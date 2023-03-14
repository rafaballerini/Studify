const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist")
    .setDescription("Obtenha o link da melhor playlist de estudos"),

  async execute(interaction) {
    // Cria uma mensagem embed para fornecer informações sobre a playlist
    const embed = new EmbedBuilder()
      .setColor("#1DB954")
      .setTitle("Melhor playlist de estudos do Spotify")
      .setDescription("Esta é uma playlist cuidadosamente selecionada de músicas para ajudá-lo a estudar e se concentrar.")
      .addField("Link", "[Clique aqui](https://open.spotify.com/playlist/5TUxgTIxzLbLVh7RUf9V8i?si=d79ad3b1a72840b6) para acessar a playlist.")
      .setThumbnail("https://i.imgur.com/0mRiBLx.png")
      .setFooter("Criado por Nome do Criador");

    // Responde com a mensagem embed
    await interaction.reply({ embeds: [embed] });
  }
}
