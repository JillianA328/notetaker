const router  = require("express").Router();
const fs = require("fs");
const path = require("path");


router.get('/notes', (req, res) => {
    const notesData = JSON.parse( fs.readFileSync (path.join(__dirname, "../db/db.json"), "utf-8"));
    res.json(notesData);
});

module.exports = router