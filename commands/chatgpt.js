const { SlashCommandBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');

dotenv.config();
const { OPENAI_KEY } = process.env;

const configuration = new Configuration({
  apiKey: OPENAI_KEY,
  apiVersion: '2021-06-29',
});

const openai = new OpenAIApi(configuration);
const MODEL_NAME = 'text-davinci-003';

// Cache object to store responses for input strings
const cache = {};

const getOpenAIResponse = async (input) => {
  if (cache[input]) {
    // Return the cached response if it exists
    return cache[input];
  }

  try {
    const response = await openai.createCompletion({
      model: MODEL_NAME,
      prompt: input,
      maxTokens: 2048,
      n: 1,
      stop: '\n',
      append: '\n',
      timeout: 15000, // 15 seconds
    });

    // Check for errors
    if (response.choices && response.choices[0].text) {
      const result = response.choices[0].text.trim();
      cache[input] = result;
      return result;
    } else if (response.error) {
      throw new Error(response.error.message);
    } else {
      throw new Error('API not available');
    }
  } catch (error) {
    throw new Error(`Failed to get OpenAI response: ${error.message}`);
  }
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('chatgpt')
    .setDescription('Talk to an AI chatbot powered by OpenAI')
    .addStringOption((option) =>
      option
        .setName('message')
        .setDescription('What do you want to say?')
        .setRequired(true)
    ),
  async execute(interaction) {
    const input = interaction.options.getString('message');

    await interaction.deferReply();
    try {
      const response = await getOpenAIResponse(input);
      await interaction.editReply(response);
    } catch (error) {
      await interaction.editReply(`An error occurred: ${error.message}`);
    }
  },
};
