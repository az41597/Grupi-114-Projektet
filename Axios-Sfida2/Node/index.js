// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  console.log(`New user registered: ${username}, ${email}, ${password}`);

  res.json({ success: true, message: 'Registration successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
