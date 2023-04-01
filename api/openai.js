const { Configuration, OpenAIApi } = require("openai");
const config = require('../config');

const openaiApiKey = config.OPENAI_API_KEY;
const configuration = new Configuration({
    organization: "org-Vfwbf3y8Sw30jO0RQW35Gz8t",
    apiKey: openaiApiKey,
});
const openai = new OpenAIApi(configuration);

async function getAIResponse(prompt, input) {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.3,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    const output = response.data.choices[0].text.trim();
    return output;
  }

module.exports = getAIResponse;