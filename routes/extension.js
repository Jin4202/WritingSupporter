const express = require('express');
const router = express.Router();
const getAIResponse = require('../api/openai');

router.get('/', function(req, res, next) {
    res.render('extension', { input: "", lines: "" });
});

router.post('/generate-extension', async (req, res) => {
    const input = req.body.input;
    const instruction = "From the following paragraph, can I have several options that would be the next sentences of the paragraph. Separate the each options by '*'. \n";
    const prompt = instruction + input;
    const output = await getAIResponse(prompt);
    console.log(output);
    const lines = output.split('*');
    const lines_s = lines.slice(1);
    res.render('extension', { input: input, lines: lines_s });
});

module.exports = router;