const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

const main = async (request) => {
  try {
    if (typeof request !== 'string') {
      throw new Error('Request must be a string');
    }

    const reply = await openai.chat.completions.create({
      messages: [{ role: 'user', content: request }],
      model: 'gpt-3.5-turbo',
    });

    return reply.choices[0].message.content;
  } catch (error) {
    console.error('Error creating chat completion:', error);
    return `Error: ${error.message}`;
  }
};

module.exports = { main };
