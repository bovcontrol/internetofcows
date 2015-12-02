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

Some important thinks about homebrew installation:

- XCode requirements take a while to install, please be patient.
- After XCode install, press RETURN in the terminal to continue the Brew installation.
- Brew will ask your user password. When you type that will not appears in the screen for secure reason. Just type and press RETURN.

### Install [azk](http://docs.azk.io/en/installation/) in your machine:
Copy and past to your terminal:

```bash
curl -Ls http://azk.io/install.sh | bash
```

If you use Linux OS (Ubuntu of similar), please read this instructions to install AZK: http://docs.azk.io/en/installation/

### Install [Atom](https://atom.io/) (code editor):
Download: https://atom.io/

### Enter in your Desktop
Copy and past to your terminal:

```bash
cd ~/Desktop
```


### Clone project in your terminal:
Copy and past to your terminal:

```bash
git clone https://github.com/bovcontrol/internetofcows.git
```

Now you could to see a folder called ```internetofcows``` in your Desktop with all project files.

### Enter in the project directory:
Copy and past to your terminal:

```bash
cd internetofcows
```

## CONFIGURATION

Edit the server environment data.
Copy and past to your terminal:

```shell
atom Azkfile.js
```

Replace access token with your own: (BovControl will provide this to you)

```
BOVCONTROL_TOKEN: "YOUR-TOKEN-HERE"
```

Save the document by pressing pressing ``Command key (⌘) + S``

## STARTING SERVER

Copy and past each command to your terminal:

### To start AZK Server
```shell
azk start
```

Some important thinks about first AZK initializing:

- AZK first starting will requirements a while to download the requirements, please be patient.
- When AZK ask for IP address just press RETURN.

### To START your Internet of Cows client
```shell
curl http://ioc.dev.azk.io/start
```

### To get the STATUS of your Internet of Cows client
```shell
curl http://ioc.dev.azk.io/status
```

Now the example temperature data will be uploaded to the server and the referred animal will be updated with this data.
