↓↓↓↓ READ THIS TEXT BELOW FIRST    ↓↓↓↓


![Internet of Cows](https://raw.github.com/bovcontrol/internetofcows/master/logo.png "Internet of Cows")

This is the demo project to show internet of cows BovControl's API. This example shows the usage of the Wearable API. The Wearable API's purpose is to track a single animal: one device -> one animal.

For more info about the project, take a look in the [internet of cows project page](http://internetofcows.org).


## REQUIREMENTS
### Access your terminal
If you use a Mac: press ``COMMAND key (⌘) + SPACE key``, type ``terminal`` and then press ``RETURN key``.

### Install [VirtualBox](https://www.virtualbox.org):
Download: https://www.virtualbox.org/wiki/Downloads

### Install [homebrew](http://brew.sh) (for Mac Users):
Copy and past to your terminal:

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Some important steps or things about homebrew installation:

- XCode requirements take a while to install, please be patient.
- After XCode installation, press ``RETURN`` in the terminal to continue the Brew installation.
- Brew will ask your user password. When you type it, the password will not be appear on the screen for security reasons. Just type and press ``RETURN``.

### Install [azk](http://docs.azk.io/en/installation/) in your machine:
Copy and past to your terminal:

```bash
curl -Ls http://azk.io/install.sh | bash
```

If you use Linux OS (Ubuntu or similar), please read these instructions to install AZK: http://docs.azk.io/en/installation/

### Install [Atom](https://atom.io/) (code editor):
Download: https://atom.io/

### Enter in your Desktop:
Copy and past to your terminal:

```bash
cd ~/Desktop
```

### Clone the project into your machine:
Copy and past to your terminal:

```bash
git clone https://github.com/bovcontrol/internetofcows.git
```

Now you should see a folder called ```internetofcows``` in your Desktop with all the project files.

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

Replace the access token with your own: (BovControl will provide this to you)

```
BOVCONTROL_TOKEN: "YOUR-TOKEN-HERE"
```

Save the document using ``Command key (⌘) + S``

## STARTING SERVER

Copy and past each command into your terminal:

### To start AZK Server:
```shell
azk start
```

Some important things about running AZK for the first time:

- AZK first starting will requirements a while to download the requirements, please be patient.
- When AZK asks for a IP address just press ``RETURN``.

### To START your Internet of Cows client:
```shell
curl http://ioc.dev.azk.io/start
```

### To get the STATUS of your Internet of Cows client:
```shell
curl http://ioc.dev.azk.io/status
```

Now the example temperature data will be uploaded to the server and the referred animal will be updated with this data.

To understand how it works, take a look at the main project file by copying and pasting to your terminal:

```shell
atom app.js
```
