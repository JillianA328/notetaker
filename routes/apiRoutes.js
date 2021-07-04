const router  = require("express").Router();
const notes = require("../lib/notes");
const fs = require("fs");
const path = require("path");
const {createNewNote} = require('../lib/notes')


router.get('/notes', (req, res) => {
    const notesData = JSON.parse( fs.readFileSync (path.join(__dirname, "../db/db.json"), "utf-8"));
    res.json(notesData);
});

router.post('/api/notes', (req, res) => {
    const notesData = JSON.parse( fs.readFileSync (path.join(__dirname, "../db/db.json"), "utf-8"));
    res.json(notesData);
});




module.exports = router;