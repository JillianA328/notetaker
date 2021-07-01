const { router } = require("express");
const store = require('../data/store');

router.get('/notes', (req, res) => {
    store.getNotes().then(notes => { return res.json(notes) })
    .cath(error => {res.status(500).json(error) })
});

router.post('./notes', (req, res) => {
    store.addNote().then(notes => {return res.json(notes) })
    .catch(error => { res.status(400).json(error) })
})


module.ecports = router