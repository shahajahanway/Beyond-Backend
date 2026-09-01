const express = require("express");
const NotesModel = require("./models/notes.model");
const connectDB = require("./config/db");
const createNotesController = require("./controllers/notes.controller");
const app = express();
const notesRoute = require("./routes/notes.route");

app.use(express.json());
connectDB()

app.get("/", (req, res) => {
  res.send("Ok man");
});

// create
app.use("/notes", notesRoute)


module.exports = app;
