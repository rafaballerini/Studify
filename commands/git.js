const { SlashCommandBuilder, MessageEmbed } = require("discord.js");

const exampleEmbed = new MessageEmbed()
    .setColor("ORANGE")
    .setTitle(":computer: Comandos do Git")
    .addFields(
        { name: "\u200B", value: "\u200B" },
        {
            name: ":file_folder: $ git init [nome-do-projeto]",
            value:
                "Cria um novo repositório local com um nome especificado",
            inline: true,
        },
        {
            name: ":arrow_down: $ git clone [url]",
            value: "Baixa um projeto e seu histórico de versão inteiro",
            inline: true,
        },
        {
            name: ":package: $ git stash",
            value: "Armazena temporariamente todos os arquivos monitorados modificados",
            inline: true,
        },
        { name: "\u200B", value: "\u200B" },
        {
            name: ":chart_with_upwards_trend: $ git status",
            value: "Revise edições e crie uma transação de commit",
            inline: true,
        },
        {
            name: ":heavy_plus_sign: $ git add [arquivo]",
            value: "Faz o snapshot de um arquivo na preparação para versionamento",
            inline: true,
        },
        {
            name: ":bookmark: $ git commit -m '[mensagem]'",
            value:
                "Grava o snapshot permanentemente do arquivo no histórico de versão",
            inline: true,
        },
        { name: "\u200B", value: "\u200B" },
        {
            name: ":deciduous_tree: $ git branch",
            value: "Lista todos os branches locais no repositório atual",
            inline: true,
        },
        {
            name: ":seedling: $ git branch [nome-branch]",
            value: "Cria uma nova branch",
            inline: true,
        },
        {
            name: ":repeat: $ git switch -c [nome-branch]",
            value:
                "Muda para a branch especificada e atualiza o diretório de trabalho",
            inline: true,
        },
        { name: "\u200B", value: "\u200B" },
        {
            name: ":arrows_counterclockwise: $ git merge [nome-branch]",
            value:
                "Combina o histórico da branch especificada a branch atual",
            inline: true,
        },
        {
            name: ":arrow_up: $ git push [alias] [branch]",
            value: "Envia todos os commits do branch local para o GitHub",
            inline: true,
        },
        {
            name: ":arrow_down: $ git pull",
            value: "Baixa o histórico e incorpora as mudanças",
            inline: true,
        }
    );

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Relembrar comandos do Git"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] });
    },
};
