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
const archiveSelect = document.getElementById("archiveSelect");

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
  },
);

customElements.define(
  "note-custom-filter",
  class extends NoteCustomSearch {
    constructor() {
      super();
    }
  },
);

document.addEventListener("DOMContentLoaded", async (event) => {
  showAnimations(); // Show animation
  await delay(500);
  hideLoadingAnimation(); // Hide animation
  await NoteClass.getNotes(); // DOM loaded "archived" fetch
  await TotalNotesClass.getNotesTotalHtml();
  setupListeners();
});

// handling archive selection
archiveSelect.addEventListener("change", async (event) => {
  const selectedValue = event.target.value; // get archived or ('' = unarchived)
  await NoteClass.getNotes(selectedValue);
  await TotalNotesClass.getNotesTotalHtml();
});

//setup Delete & Archive Listener for both
async function setupListeners() {
  const noteContainer = document.getElementById("notesList");

  noteContainer.addEventListener("click", async (event) => {
    if (event.target.classList.contains("isArchived")) {
      console.log("archive/non-archived is being clicked");
      const btnNoteId = event.target.closest("[data-noteid]").dataset.noteid;
      await NoteClass.updateArchive(btnNoteId);
      await TotalNotesClass.getNotesTotalHtml();
    } else if (event.target.parentElement.id === "deleteIcon") {
      const noteId = event.target.closest("[data-noteid]").dataset.noteid;

      await NoteClass.deleteNote(noteId); //optional to add archive
      event.target.closest(".noteItem").remove();
      await TotalNotesClass.getNotesTotalHtml();
    }
  });
}
