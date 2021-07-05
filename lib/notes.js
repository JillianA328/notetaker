const fs = require("fs");
const path = require("path");

// Function to create new note
function createNewNote(body, notesArray) {
    const note = body;
    console.log('notes array:' + notesArray.length);
    let noteId;
        if (!notesArray.length) {
            noteId = 1;
        }
        else {
            noteId = notesArray.length + 1;
        }

    console.log(noteId);
    note.id=noteId;
    notesArray.push(note)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),JSON.stringify(notesArray));
    return note;
};


module.exports = { createNewNote };