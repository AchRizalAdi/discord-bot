const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Halo sayanmg"),
  async execute(interaction) {
    // console.log(interaction, 'kau ni ape')
    await interaction.reply("Pantek kau ni!");
  },
};
