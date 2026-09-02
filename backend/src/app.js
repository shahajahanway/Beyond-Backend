const express = require("express");
const cors = require("cors");
const NotesModel = require("./models/notes.model");
const connectDB = require("./config/db");
const createNotesController = require("./controllers/notes.controller");
const app = express();
const notesRoute = require("./routes/notes.route");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

connectDB();

app.get("/", (req, res) => {
  res.send("Ok man");
});

// create
app.use("/notes", notesRoute);

module.exports = app;
