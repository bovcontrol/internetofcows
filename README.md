↓↓↓↓ READ THIS TEXT BELOW FIRST    ↓↓↓↓

This is the demo project for demonstrate internet of cows BovControl's API. This example take usage of Wearable API.

For more info about the project, take a look in the [internet of cows project page](http://internetofcows.org).


## REQUIREMENTS
### Access your terminal
If you use Mac press ``Command key (⌘) + SPACE KEY``, type ``terminal`` and then press RETURN KEY.

### Install [VirtualBox](https://www.virtualbox.org)
Download: https://www.virtualbox.org/wiki/Downloads

### Install [homebrew](http://brew.sh) (for Mac Users)
Copy and past to your terminal:

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Install [azk](http://docs.azk.io/en/installation/) in your machine:
Copy and past to your terminal:

```bash
curl -Ls http://azk.io/install.sh | bash
```

If you use Linux OS (Ubuntu of similar), please read this instructions to install AZK: http://docs.azk.io/en/installation/

### Install [Atom](https://atom.io/) (code editor):
Download: https://atom.io/

### Clone project in your terminal:
Copy and past to your terminal:

```bash
git clone https://github.com/bovcontrol/internetofcows.git
cd internetofcows
```

## CONFIGURATION

Edit the server environment data:
```shell
atom Azkfile.js
```

Replace access token with your own:

```
BOVCONTROL_TOKEN: "YOUR-TOKEN-HERE"
```

## STARTING SERVER

```shell
azk start
curl http://ioc.dev.azk.io/start
curl http://ioc.dev.azk.io/status
```
