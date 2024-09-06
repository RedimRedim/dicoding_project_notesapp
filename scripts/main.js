import { AddNewNote } from "./custom-template.js";

const NoteClass = new AddNewNote();

document.addEventListener("DOMContentLoaded", (event) => {
  const notesHtml = NoteClass.getNotesHtml();
  const notesContainer = document.querySelector(".notes");
  notesContainer.innerHTML = notesHtml;
});
