import { NoteCustomAdd } from "./custom-template.js";
import { Notes } from "./notes.js";
import { TotalNotes } from "./total-notes.js";
import { NoteCustomSearch } from "./custom-search.js";
import "./custom-footer.js";
import "../src/styles/styles.css";
import "../src/styles/mediastyles.css";
import anime from "animejs/lib/anime.es.js";
const NoteClass = new Notes();
const TotalNotesClass = new TotalNotes(NoteClass);
let animationInstance;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const showAnimations = () => {
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "flex";
  animationInstance = anime({
    targets: ".spinner .dot",
    scale: [
      { value: 1.5, duration: 400 },
      { value: 1, duration: 400 },
    ],
    easing: "easeInOutSine",
    delay: anime.stagger(200, { start: 0 }),
    loop: true,
  });
};

const hideLoadingAnimation = () => {
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "none";

  if (animationInstance) {
    animationInstance.pause();
  }
};

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

document.addEventListener("DOMContentLoaded", async (event) => {
  showAnimations(); // Show animation
  await delay(2000);
  hideLoadingAnimation(); // Hide animation
  await NoteClass.getNotesHtml();
  await TotalNotesClass.getNotesTotalHtml();
  await setupDeleteBtnListener();
});

function setupDeleteBtnListener() {
  const notesContainer = document.getElementById("notesList"); // Adjust as needed

  // Use event delegation to listen for clicks on delete buttons
  notesContainer.addEventListener("click", async (event) => {
    if (event.target.parentElement.id == "deleteIcon") {
      const noteItem = event.target.closest(".noteItem");
      if (noteItem) {
        const noteId = noteItem.getAttribute("data-noteid");

        // Remove the note item from the DOM
        noteItem.remove();

        // Delete the note from the data structure
        await NoteClass.deleteNote(noteId);

        // Update the total notes count
        TotalNotesClass.getNotesTotalHtml();
      }
    }
  });
}
