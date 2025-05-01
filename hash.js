// server.js
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { hash: null });
});

app.post('/hash', (req, res) => {
  const inputText = req.body.inputText || '';
  const hash = crypto.createHash('sha256').update(inputText).digest('hex');
  res.render('index', { hash });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌐 Server running at http://localhost:${PORT}`));

