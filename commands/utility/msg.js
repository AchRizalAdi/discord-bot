const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pesan_rahasia")
    .setDescription("Kirim chat secara anonymous!")
    .addStringOption((option) => option.setName("input").setDescription("Isi sesuai hati lu").setRequired(true)),
  async execute(interaction) {
    const msg = interaction.options.getString("input");

    // Send a message in the channel without replying to the slash command
    await interaction.channel.send(msg)

    await interaction.deferReply({ ephemeral: true });

    await interaction.deleteReply();
    // await interaction.reply(msg)
  },
};
