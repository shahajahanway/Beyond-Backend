const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updateNotesController,
  deleteNoteController,
} = require("../controllers/notes.controller");

const router = express.Router();
// Create
router.post("/create", createNotesController);
// Read
router.get("/allNotes", getAllNotesController);

// Read one
router.get("/:id", getSingleNoteController);

// Update
router.put("/:id", updateNotesController)

router.delete("/:id", deleteNoteController)

module.exports = router;
