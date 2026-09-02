const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updateNotesController,
  deleteNoteController,
  singleEntityUpdateController,
} = require("../controllers/notes.controller");

const router = express.Router();
// Create
router.post("/create", createNotesController);
// Read
router.get("/allNotes", getAllNotesController);

// Read one
router.get("/:id", getSingleNoteController);

// Update via put 
router.put("/:id", updateNotesController)

// update via patch
router.patch("/:id/single" ,singleEntityUpdateController)

router.delete("/:id", deleteNoteController)

module.exports = router;
