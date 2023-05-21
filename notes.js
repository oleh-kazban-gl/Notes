const fs = require("fs");
const chalk = require("chalk");

function listNotes() {
  const notes = loadNotes();
  console.log(notes);
}

function addNote(title, body) {
  const notes = loadNotes();
  const existingNote = _getExistingNote(notes, title);

  if (existingNote) {
    console.log(chalk.red(`Such note already exists: "${title} : ${body}"`));
  } else {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green(`A new note has been added: "${title}"`));
  }
}

function removeNote(title) {
  const notes = loadNotes();
  const existingNoteIndex = _getExistingNoteIndex(notes, title);

  if (existingNoteIndex === -1) {
    console.log(chalk.red(`The note with title: "${title}" doesn't exist`));
  } else {
    notes.splice(existingNoteIndex, 1);
    saveNotes(notes);

    console.log(chalk.green(`The note: "${title}" was succesfully deleted`));
  }
}

function getNote(title) {
  const notes = loadNotes();
  const existingNote = _getExistingNote(notes, title);

  if (!existingNote) {
    console.log(chalk.red(`The note with title: "${title}" doesn't exist`));
  } else {
    console.log(chalk.green(JSON.stringify(existingNote)));
  }
}

function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");

    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return [];
  }
}

function saveNotes(notes) {
  const dataJson = JSON.stringify(notes);

  fs.writeFileSync("notes.json", dataJson);
}

function _getExistingNote(notes, title) {
  return notes.find((n) => n.title === title);
}

function _getExistingNoteIndex(notes, title) {
  return notes.findIndex((n) => n.title === title);
}

module.exports = {
  listNotes,
  addNote,
  removeNote,
  getNote,
};
