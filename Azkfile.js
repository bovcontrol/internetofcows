/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */

systems({
  "ioc": {
    image: {"docker": "azukiapp/node"},
    provision: [
        "npm install"
    ],
    command: "npm start",
    workdir: "/azk/#{manifest.dir}",
    mounts: {
      '/azk/#{manifest.dir}': path(".")
    },
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    ports: {
      http: "8000"
    },
    envs: {
      BOVCONTROL_API: "https://api.bovcontrol.com",
      BOVCONTROL_TOKEN: "YOUR-TOKEN-HERE"
    }
  }
});
