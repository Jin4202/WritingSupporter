const express = require('express');
const router = express.Router();
const getAIResponse = require('../api/openai');

router.get('/', function(req, res, next) {
    res.render('extension', { input: "", lines: "" });
});
const instruction_extension = input => {
    const instruction = "Provide the list of subsequent sentences for the given paragraph.";
    const condition = "Condition: [Separate the each paragraph by * ]";
    const result = "The list list of subsequent sentences for the paragraph: ";
    const prompt = instruction + "\n" + condition + "\n" + result + "\n" + input;
    return prompt;
};

router.post('/generate-extension', async (req, res) => {
    const input = req.body.input;
    const prompt = instruction_extension(input);
    const output = await getAIResponse(prompt);
    const lines = output.split('*');
    const lines_s = lines.slice(1);
    res.render('extension', { input: input, lines: lines_s });
});

module.exports = router;