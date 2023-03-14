const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, MessageButton, MessageActionRow } = require("discord.js");

const row = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId("select")
            .setPlaceholder("Nenhuma linguagem selecionada")
            .addOptions(
                {
                    label: "JavaScript",
                    description: "Veja a documentação de JavaScript",
                    value: "javascript",
                    emoji: {
                        name: "🟨",
                        id: null
                    }
                },
                {
                    label: "Python",
                    description: "Veja a documentação de Python",
                    value: "python",
                    emoji: {
                        name: "🐍",
                        id: null
                    }
                },
                {
                    label: "C#",
                    description: "Veja a documentação de C#",
                    value: "csharp",
                    emoji: {
                        name: "🔷",
                        id: null
                    }
                },
                {
                    label: "Discord.js",
                    description: "Veja a documentação de Discord.js",
                    value: "discordjs",
                    emoji: {
                        name: "🤖",
                        id: null
                    }
                }
            )
    );

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documentação da tecnologia que quiser"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das techs abaixo:", components: [row]});
    }
};
