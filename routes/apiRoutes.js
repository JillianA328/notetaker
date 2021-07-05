const router  = require('express').Router();
const notes = require('../db/db.json');
const fs = require("fs");
const {createNewNote} = require('../lib/notes.js')


router.get("/api/notes", (req, res) => {
    const notesData = JSON.parse( fs.readFileSync ('./db/db.json'), "utf-8");
    res.json(notesData);
    console.log(notesData);
});

router.post("/api/notes", (req, res) => {
    const note = createNewNote(req.body, notes);
    note.id=noteId;
    res.json(note);
    console.log(note);
});




module.exports = router;