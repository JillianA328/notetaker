const router  = require('express').Router();
const notes = require('../db/db.json');
const fs = require("fs");
const {createNewNote} = require('../lib/notes.js')

//Get the notes from db.json and parse the data
router.get("/api/notes", (req, res) => {
    const notesData = JSON.parse( fs.readFileSync ('./db/db.json'), "utf-8");
    res.json(notesData);
    console.log(notesData);
});

//Post a new note to the database
router.post("/api/notes", (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
    console.log(note);
});

//Delete a note from the database
router.post("/api/notes/:id", (req, res) => {
    const noteToDelete = createNewNote(req.body, notes);
    res.json(noteToDelete);
    console.log(noteToDelete);
});

module.exports = router;