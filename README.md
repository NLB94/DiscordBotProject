# Download

You can download this repository to your computer by using `git clone https://github.com/NLB94/BotStartProject.git`.

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

# Contribute
You can help me by adding my bot [I2Z7](https://discord.com/oauth2/authorize?client_id=735824367698837555&permissions=2146958847&response_type=code&scope=identify%20applications.commands%20bot%20guilds%20guilds.join) in your server. If you want more informations about it, join [support server](https://discord.gg/92ffufA).
Please don't remove the `add.js` command, you can change the name but don't remove it pls.