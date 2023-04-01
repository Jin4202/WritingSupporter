const express = require('express');
const router = express.Router();
const getAIResponse = require('../api/openai');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('revision', { input: "", output : ""});
});

router.post('/generate-revision', async (req, res) => {
  const input = req.body.input;
  const instruction = "Revise the paragraphs: ";
  const prompt = instruction + input;
  const output = await getAIResponse(prompt);
  res.render('revision', { input: input, output: output });
});

module.exports = router;
