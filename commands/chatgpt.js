const { SlashCommandBuilder, SlashCommandStringOption } = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");
const { openai_key } = require('../config.json');

const configuration = new Configuration({
    apiKey: openai_key,
});

module.exports = {
    data: new SlashCommandBuilder()
        .setName('chatgpt')
        .setDescription('Discord/GPT API is a chatbot platform that allows users to have chatbot experiences in Discord')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('what are you thinking?')
                .setRequired(true)),
    async execute(interaction) {

        const input = interaction.options.getString("text")
        await interaction.reply('Working on it');
        try {
            const result = await getOpenAI(input);
            await interaction.editReply(result);
        }
        catch (err) {
            await interaction.editReply(err.message);
        }

    }
};

const getOpenAI = async (input) => {
    let response = 'api not available';
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: input,
        temperature: 0,
        max_tokens: 500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    if (completion?.data?.choices[0].text) {
        console.log(completion.data.choices);
        response = completion?.data?.choices[0].text;
    }

    return 'Question: ' + input + response;
}