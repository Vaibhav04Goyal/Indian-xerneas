module.exports = {
	cooldown: 1000,
	help: `Displays the help for a command. Syntax: ${prefix}help (command)`,
	permissions: 'none',
	commandFunction: function (Bot, room, time, by, args, client) {
		if (!args[0]) return Bot.pm(by, 'I\'m a Bot by PartMan. If you have any issues regarding me, please contact them. To see my usable commands, use the ``' + prefix + 'commands`` command.');
		let commandName = tools.commandAlias(toID(args.join('')));
		fs.readdir('./commands/global', (e, gcommands) => {
			if (e) return console.log(e);
			if (gcommands.includes(commandName + '.js')) {
				let commandReq = require('./' + commandName + '.js');
				if (!tools.hasPermission(by, commandReq.permissions, room)) return Bot.pm(by, 'Shh.');
				Bot.say(room, commandReq.help);
			}
			else {
				fs.readdir('./commands/' + room, (e, files) => {
					if (e || !files.includes(commandName + '.js')) return Bot.pm(by, 'It doesn\'t look like that command exists.');
					let commandReq = require('../' + room + '/' +	commandName + '.js');
					if (!tools.hasPermission(by, commandReq.permissions, room)) return Bot.say(room, 'Shh.');
					Bot.say(room, commandReq.help);
				});
			}
		});
	}
}