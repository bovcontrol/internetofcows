//region Required libs

var api = require('express')(),
    rp  = require('request-promise');

//endregion

//region Environment data

var bovcontrol_api   = process.env.BOVCONTROL_API || 'https://api.bovcontrol.com',
    bovcontrol_token = process.env.BOVCONTROL_TOKEN || '00:00:00:00:00:00';

//endregion

//region Data log

var ioc_data = {
    method: 'POST',
    uri: (bovcontrol_api + '/ioc/v1/wearable/data'),
    body: {
        token: bovcontrol_token,
        data: {
            temperature: 38
            //region Other data fields

            // - weight
            // - steps
            // - location
            // - heart_rate
            // - abnormal_motion

            //endregion
        }
    },
    json: true
};

//endregion

//region Data status

var counter  = 1,     //Count how many times the data was collected.
    interval = 10,    //Define the interval between each data collection (in seconds).
    loop_id  = 1,     //Interval function usage: to be able to stop data collection.
    toggle   = false; //Interval function usage: to the device to know the state of the collection (on or off).

//endregion

//region Core functions

/**
 * Generates a Random temperature between 30 to 39 celsius degrees
 */
function randomTemp() {
    return Number.parseInt("3"+(Math.random()*10));
}

/**
 * Starts the data-collection
 */
function start() {
    if(toggle) {
        return;
    }

    toggle = true;
    loop_id = setInterval(function() {
        counter++;

        //Data collect: Random temperature
        ioc_data.body.data.temperature = randomTemp();

        rp(ioc_data);
    }, interval*1000);
}

/**
 * Stops the data-collection
 */
function stop() {
    if(!toggle) {
        return;
    }
    toggle = false;
    clearInterval(loop_id);
}

/**
 * Gets the status of the data-collection
 */
function status() {
    return {on: toggle, counter: counter, temperature: ioc_data.body.data.temperature, interval: interval};
}

//endregion

//region API routes

/**
 * Activates the data-collection and returns the current status
 * URL: http://ioc.dev.azk.io/on
 */
api.get('/on', function (req, res) {
    start();
    res.send(status());
});

/**
 * Deactivates the data-collection and returns the current status
 * URL: http://ioc.dev.azk.io/off
 */
api.get('/off', function (req, res) {
    stop();
    res.send(status());
});

/**
 * Gets the current status
 * URL: http://ioc.dev.azk.io/status
 */
api.get('/status', function (req, res) {
    res.send(status());
});

/**
 * Gets the info about the API's Routes and the status
 * URL: http://ioc.dev.azk.io/
 */
api.get('/', function (req, res) {
    res.send({methods:['/on','/off','/status'],status:status()});
});

//endregion

//region Server start

var server = api.listen(8000);

//endregion
