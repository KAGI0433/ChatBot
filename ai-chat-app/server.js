const express = require('express');
const { Configuration, OpenAIApi } = require('openai/index.mjs');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(require('cors')());

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });
    res.json(response.data.choices[0].message.content);
  } catch (error) {
    res.status(500).json({ error: 'API Error' });
  }
});

app.listen(5000, () => console.log('Server started on port 5000'));

