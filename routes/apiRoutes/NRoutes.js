const router = require('express').Router();
const { createNote, deleteNote } = require('../../lib/note');
let { notesdb } = require('../../db/notes');

router.get('/notes', (req, res) => {
  let results = notesdb;
  res.json(results);
});

router.post('/notes', (req, res) => {
  req.body.id = notesdb.length.toString();
  res.json(createNote(req.body, notesdb));
});

router.delete('/notes/:id', async (req, res) => {
  notesdb = deleteNote(req.params.id, notesdb);
  res.json(notesdb);
});

module.exports = router;