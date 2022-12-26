const { Discord, Client, MessageEmbed } = require("discord.js");
const config = require("./config.json");
const client = new Client()

client.on('ready', async () => {
    const server = client.guilds.cache.get(config.GUILD)
    const channel = client.channels.cache.get(config.CHANNEL)

    console.log(`Logged to ${client.user.tag}`)

    setInterval(async () => {
        const embed = new MessageEmbed()
        const user = server.members.cache.random().user;

            embed.setTitle(`Avatar de ${user.tag}`)
            embed.setDescription(`[Lien de l'avatar](${user.avatarURL()})`)
            embed.setColor("RANDOM")
            embed.setImage(user.avatarURL({ dynamic: true }))
            embed.setTimestamp()
            embed.setFooter(client.user.username)
        if(channel) return channel.send(embed)
    }, 3000)
    client.login(config.token)
