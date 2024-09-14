import { NoteCustomAdd } from "./custom-template.js";
import { Notes } from "./notes.js";
import { TotalNotes } from "./total-notes.js";
import { NoteCustomSearch } from "./custom-search.js";
// In your main.js file
import "../src/styles/styles.css";
import "../src/styles/mediastyles.css";

const NoteClass = new Notes();
const TotalNotesClass = new TotalNotes(NoteClass);

customElements.define(
  "note-custom-add",
  class extends NoteCustomAdd {
    constructor() {
      super(NoteClass, TotalNotesClass); // Pass instances to the constructor
    }
  }
);

customElements.define(
  "note-custom-filter",
  class extends NoteCustomSearch {
    constructor() {
      super();
    }
  }
);

document.addEventListener("DOMContentLoaded", (event) => {
  NoteClass.getNotesHtml();
  TotalNotesClass.getNotesTotalHtml();
  setupDeleteBtnListener();
});

function setupDeleteBtnListener() {
  const notesContainer = document.getElementById("notesList"); // Adjust as needed

  // Use event delegation to listen for clicks on delete buttons
  notesContainer.addEventListener("click", (event) => {
    if (event.target.parentElement.id == "deleteIcon") {
      const noteItem = event.target.closest(".noteItem");
      if (noteItem) {
        const noteId = noteItem.getAttribute("data-noteid");

        // Remove the note item from the DOM
        noteItem.remove();

        // Delete the note from the data structure
        NoteClass.deleteNote(noteId);

        // Update the total notes count
        TotalNotesClass.getNotesTotalHtml();
      }
    }
  });
}
