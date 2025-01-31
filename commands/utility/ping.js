const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Halo sayanmg"),
  async execute(message, args) {
    // console.log(interaction, 'kau ni ape')
    // await interaction.reply("Pantek kau ni!");
    // console.log(interaction, 'nah ndi')
    await message.reply(`🏓Latency is ${Date.now() - message.createdTimestamp}ms`);
    // const sent = await interaction.reply({ content: "Pinging..." });
    // interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
  },
};
