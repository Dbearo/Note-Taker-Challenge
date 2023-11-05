const fs = require('fs');
const path = require('path');

function updateDb(notesdb) {
  fs.writeFileSync(
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ notesdb }, null, 2)
  );
  return notesdb
}

function createNote(body, notesdb) {
  const note = body;
  notesdb.push(note);
  updateDb(notesdb);
  return note;
}

function deleteNote(id, notes) {
  let notesdb = notes.filter(selectedNote => {
    if (selectedNote.id == id) {
      return false
    } else {
      return true
    }
  })

  let index = 0;
  notesdb.forEach(note => {
    note.id = index;
    index += 1;
  });

  updateDb(notesdb)
  return notesdb;
}

module.exports = {
  createNote,
  deleteNote
};