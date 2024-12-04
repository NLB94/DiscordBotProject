## Warning

This project is no longer usable.

# Download

You can download this repository to your computer by using `git clone https://github.com/stunox/DiscordBotProject.git`.

# Get started 

You have to use `npm i` or `npm install` command to install require packages

## Configuration

Go to `config.js` file and change the token and the prefix.
You can get the bot token in [Discord Developers Portal](https://discord.com/developers/applications) by creating an application and a bot.

## Commands & Events

Bot has already `7 commands` and `2 events`, created using handlers in `util/loader.js`.

The commands have a good structure to help you : the ``run`` function to execute the command and the ``help`` object to get informations about the command.
The help object is stocked on `util/constants.js` file

The bot has already : 
- ban & kick commands
- poll, ping, say commands
- an eval command
- a ready event
- and a message event with commands cooldowns, and some verifications
