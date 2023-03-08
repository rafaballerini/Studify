const { SlashCommandBuilder, MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Verifica a latência do bot"),

    async execute(interaction) {
        const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true })
        const timeDiff = (sent.editedAt || sent.createdAt) - (interaction.editedAt || interaction.createdAt)
        const pingEmbed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle('🏓 Pong!')
            .addFields(
                { name: 'Latência do Bot:', value: `${timeDiff}ms` },
                { name: 'Latência da API:', value: `${Math.round(interaction.client.ws.ping)}ms` }
            )
        await interaction.editReply({ content: '\u200b', embeds: [pingEmbed] })
    }
}
