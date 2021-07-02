const fs = require("fs");
const path = require("path");

function createNote(body, allNotes) {
    const note = body;
    allNotes.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ allNotes }, null, 2)
    );
    return note;
}

module.exports = {
    createNote 
};