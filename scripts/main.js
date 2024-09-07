import { AddNewNote } from "./custom-template.js";
import { notesData } from "./notes.js";
import { TotalNotes } from "./total-notes.js";

const NoteClass = new AddNewNote();
const TotalNotesClass = new TotalNotes();

document.addEventListener("DOMContentLoaded", (event) => {
  NoteClass.getNotesHtml();
  TotalNotesClass.getNotesTotaltml();

  document.getElementById("cancelIcon").addEventListener("click", (event) => {
    NoteClass.deleteNote(event);
  });
});
