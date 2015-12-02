↓↓↓↓ READ THIS TEXT BELOW FIRST    ↓↓↓↓

This is the demo project for demonstrate internet of cows BovControl's API. This example take usage of Wearable API.

For more info about the project, take a look in the [internet of cows project page](http://internetofcows.org).


## REQUIREMENTS
### Access your terminal
If you use Mac press ``Command key (⌘) + SPACE KEY``, type ``terminal`` and then press RETURN KEY.

### Install VirtualBox
Download: https://www.virtualbox.org/wiki/Downloads

### Install homebrew (for Mac Users)
Copy and past to user terminal:

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Install [azk](http://docs.azk.io/en/installation/) in your machine:
Instructions: http://docs.azk.io/en/installation/

### Install Atom (code editor):
Download: https://atom.io/

### Clone project in your terminal:
```bash
$ git clone https://github.com/bovcontrol/internetofcows.git
$ cd internetofcows
```

## CONFIGURATION

Edit the server environment data:
```shell
$ atom Azkfile.js
```

Replace access token with your own:

```
BOVCONTROL_TOKEN: "YOUR-TOKEN-HERE"
```

## STARTING SERVER

```shell
$ azk start
$ curl http://ioc.dev.azk.io/start
$ curl http://ioc.dev.azk.io/status
```
