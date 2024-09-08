import { NoteCustomAdd } from "./custom-template.js";
import { Notes, notesData } from "./notes.js";
import { TotalNotes } from "./total-notes.js";

const NoteClass = new Notes();
const NoteCustom = new NoteCustomAdd(NoteClass);
const TotalNotesClass = new TotalNotes();




document.addEventListener("DOMContentLoaded", (event) => {
  NoteClass.getNotesHtml();
  TotalNotesClass.getNotesTotalhtml();
  setupDeleteBtnListener();
});

function setupDeleteBtnListener() {
  const notesContainer = document.getElementById("notesList"); // Adjust as needed

  // Use event delegation to listen for clicks on delete buttons
  notesContainer.addEventListener("click", (event) => {
    if (event.target.parentElement.id == "cancelIcon") {
      const noteItem = event.target.closest(".noteItem");
      if (noteItem) {
        const noteId = noteItem.getAttribute("data-noteid");

        // Remove the note item from the DOM
        noteItem.remove();

        // Delete the note from the data structure
        NoteClass.deleteNote(noteId);

        // Update the total notes count
        TotalNotesClass.getNotesTotalhtml();
      }
    }
  });
}

