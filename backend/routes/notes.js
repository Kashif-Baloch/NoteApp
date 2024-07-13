const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
const fetchUser = require('../middleware/fetchUser');

//Initialize route path for adding notes in database
router.post('/addnotes', fetchUser, [
    // Initialize objects for validations
    body("title", "Enter a title at least 3 character").isLength({ min: 3 }),
    body("description", "Enter a description at least 8 character").isLength({ min: 8 })], async (req, res) => {
        // Check validations rrrors
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //Handling Error with try catch
        try {
            //Getting title and other elements from req.body by destructive method
            let { title, description, tag } = req.body;

            //Create a schema note  and adding a authtoken id to get the unique notes
            let notesDb = await new Notes({
                title, description, tag, user: req.user.id
            });

            //Sava Note in database
            let saveData = await notesDb.save();

            //Sending response
            res.json({ saveData });

        } catch (error) {
            console.log(error.message);
            return res.status(400).send({ error: "Internal Server Error" });
        }
    });

//Initialize route path for fetching notes from database
router.get('/fetchnotes', fetchUser, async (req, res) => {
    try {
        //Fetching notes from database by fetchuser's fetching user id by jwt token
        let fetNotes = await Notes.find({ user: req.user.id });

        //Sending Response
        res.json({ fetNotes });

    } catch (error) {
        console.log(error.message);
        return res.status(400).send({ error: "Internal Server Error" });
    }
});

//Initialize route path for fetching notes from database
router.put('/updatenotes/:id', fetchUser, async (req, res) => {
    try {
        let upDate = {}
        let { title, description, tag } = req.body;
        if (title) { upDate.title = title };
        if (description) { upDate.description = description };
        if (tag) { upDate.tag = tag };
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }

        if (req.user.id !== note.user.toString()) {
            return res.status(401).send("Try Again");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: upDate }, { new: true });
        res.json(note);
    } catch (error) {
        console.log(error.message);
        return res.status(400).send({ error: "Internal Server Error" });
    }
})

router.delete('/deletenotes/:id', fetchUser, async (req, res) => {
    try {
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }

        if (req.user.id !== note.user.toString()) {
            return res.status(401).send("Try Again");
        }

        await Notes.findByIdAndDelete(req.params.id);
        res.json(`Note Deleted Successfully`);

    } catch (error) {
        console.log(error.message);
        return res.status(400).send({ error: "Internal Server Error" });
    }
})



module.exports = router;