const express = require('express');
const router = express.Router();
const getAIResponse = require('../api/openai');

router.get('/', function (req, res, next) {
  res.render('suggestion', { keywords: "", output: "Output Text" });
});

router.post('/generate-suggestion', async (req, res) => {
    const input_keywords = req.body.keywords;
    const input_paragraph = req.body.paragraph;
    const prompt = `With the keywords: ${input_keywords}; I need a essay outline and a Summary paragraph`;
    const output = await getAIResponse(prompt);
    res.render('suggestion', { keywords: input_keywords, output: output });
});

module.exports = router;
