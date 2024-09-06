import { AddNewNote } from "./custom-template.js";

const NoteClass = new AddNewNote();

document.addEventListener("DOMContentLoaded", (event) => {
  NoteClass.getNotesHtml();
});
