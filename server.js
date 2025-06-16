const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let submissions = []; // In-memory array to store patient data

app.post('/submit', (req, res) => {
  const data = req.body;
  submissions.push(data);
  console.log('New submission:', data);
  res.status(200).send({ message: 'Data received' });
});

app.get('/admin', (req, res) => {
  res.json(submissions);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
