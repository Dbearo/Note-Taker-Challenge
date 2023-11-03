const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});