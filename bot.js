var irc = require('irc');
var client = new irc.Client("irc.yourserver.com", "Chat-Utils", {
    channels: ['#channel-name'],
});

channel.createWebhook('Chat-Utils');
webhook.edit({
	name: 'Chat-Utils',
	avatar: '',
	channel: '',
});
