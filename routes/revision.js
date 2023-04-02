const express = require('express');
const router = express.Router();
const getAIResponse = require('../api/openai');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('revision', { input: "", output : ""});
});

const instruction_small_change = input => {
  const instruction = "Revise the paragraphs under following condition: ";
  const condition = "Condition: [Less than 20% of changes, Grammar should be correct, The sentences should be well flow and interconnected]";
  const prompt = instruction + "\n" + condition + "\n" + input;
  return prompt;
};

const instruction_professional_change = input => {
  const instruction = "Revise the paragraphs under following condition: ";
  const condition = "Condition: [Use academic language, The sentences should be well flow and interconnected, Grammar should be correct, The thesis or message of the paragraph should be clear and well formed.]";
  const prompt = instruction + "\n" + condition + "\n" + input;
  return prompt;
};


router.post('/generate-revision', async (req, res) => {
  const input_paragraph = req.body.input;
  const input_type = req.body.option;
  let prompt = null;
  switch (input_type) {
    case "small":
        prompt = instruction_small_change(input_paragraph);
      break;
    case "professional":
        prompt = instruction_professional_change(input_paragraph);
      break;
  }
  const output = await getAIResponse(prompt);
  res.render('revision', { input: input_paragraph, output: output });
});


module.exports = router;
