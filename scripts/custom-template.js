import { notesData, STORAGE_KEY } from "./notes.js";
const template = document.createElement("template");
template.innerHTML = `
<style>
  button {
    background-color: #7f5af0;
    border-radius: 5px;
    border: 0;
    color: #fffffe;
    width: 100px;
    padding: 0.8em;
    cursor: pointer;
    margin-bottom: 1em;
  }

  #cancelNote{
    background-color: #94A1B2;
  }

  .notesContent {
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    opacity: 0;
    visibility: hidden;
    height: 0;
    overflow: hidden;
  }

  .notesContent.show {
    opacity: 1;
    visibility: visible;
    height: auto;
  }

  .note-group {
    display: flex;
    flex-direction: row;
    width: 50%;
    margin-bottom: 1.5em;
  }

  label {
    padding: 1em;
    width: 20%;
  }

  #noteTitle, 
  textarea {
    flex-grow: 1;
  }

  .note-button-group {
    padding: 0 1em;
    width: 20%;
    column-gap: 20px;
  }

  .note-group input:focus,
  .note-group textarea:focus {
    background-color: #94A1B2;
    font-size: 18px;
    color: #fffffe;
    outline: none;
    border: none;
  }

  @media (max-width: 500px) {
    .note-group {
      width: 90%;
    }

    label {
      width: 30%;
    }

    .note-button-group {
      width: 60%;
    }
  }
</style>
<button id="addNote">Add Note</button>
<div class="notesContent">
<form id="noteForm">
    <div class="note-group">
        <label for="noteTitle">Title</label>
        <input type="text" id="noteTitle" name="noteTitle" required minlength=5>
    </div>
    <p class="error-message" id="titleError"></p>

    <div class="note-group">
        <label for="noteBody">Body</label>
        <textarea id="noteBody" name="noteBody" required></textarea>
    </div>

    <div class="note-group note-button-group">
        <button type="submit" id="saveNote">Save</button>
        <button type="button" id="cancelNote">Cancel</button>
    </div>
</form>
</div>`;

export class AddNewNote extends HTMLElement {
  constructor() {
    super();
    this.showInfo = false;
    this.attachShadow({ mode: "open" });
    this.notes = this.loadNotes();
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  loadNotes() {
    const storedNotes = localStorage.getItem(STORAGE_KEY);
    if (storedNotes !== null) {
      return JSON.parse(storedNotes);
    } else {
      console.log("asd");
      return localStorage.setItem(STORAGE_KEY, JSON.stringify(notesData));
    }
  }

  getNotesHtml() {
    let notesHtml = [];
    //passing the localstorage here already okay
    // aslong as here fetch get the latest one

    this.notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    this.notes.forEach((note) => {
      notesHtml.push(
        `<div data-noteId="${note.id}" class="noteItem">
                <div class="noteTitle">${note.title}
                <button id="cancelIcon" aria-label="Cancel">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" />
                </svg>
              </button>
                </div>
                <div class="noteBody">${note.body}</div>
                
                <div class="note-creation">
                  <div class="noteArchived">${note.archived}</div>
                  <div class="noteCreatedAt">${note.createdAt}</div>
                </div>
            </div>`
      );
    });
    const notesContainer = document.querySelector(".notes");
    notesContainer.innerHTML = notesHtml.join("");
  }

  getNote() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  }

  updateNote(note) {
    this.notes = this.loadNotes();
    this.notes.push(note);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.notes));
    this.getNotesHtml();
  }

  generateNoteId() {
    return `notes-${Math.random().toString(36).substring(2, 8)}-${Math.random()
      .toString(36)
      .substring(2, 8)}`;
  }

  addNote() {
    const noteTitle = this.shadowRoot.querySelector("#noteTitle").value;
    const noteBody = this.shadowRoot.querySelector("#noteBody").value;

    let noteData = {
      id: this.generateNoteId(),
      title: noteTitle,
      body: noteBody,
      createdAt: new Date(),
      archived: false,
    };
    console.log(noteData);
    this.updateNote(noteData);
  }

  deleteNote(event) {
    const noteId = this.getAttribute("data-noteid");
    console.log(noteId);
    // this.notes = this.loadNotes();
    // this.notes = this.notes.filter((note) => note.id !== noteId);
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(this.notes));
    // this.getNotesHtml();
  }

  handleNoteClick = () => {
    this.showInfo = !this.showInfo;
    this.updateVisbiility();
  };

  handleSaveCancelNote = (event) => {
    if (event.target.id === "saveNote") {
      const form = this.shadowRoot.querySelector("#noteForm");
      if (form.checkValidity()) {
        event.preventDefault();
        this.addNote();
        console.log("note has been added successfully");
      } else {
        form.reportValidity();
      } //form validation when saveNote being clicked
    } else if (event.target.id === "cancelNote") {
      this.showInfo = false;
      this.updateVisbiility();
    } //cancelNote handling
  };

  functform = () => {
    const noteTitle = this.shadowRoot.querySelector("#noteTitle");
    const titleError = this.shadowRoot.querySelector("#titleError");

    if (noteTitle.value.length < 5) {
      titleError.textContent = "Title should be at least 5 characters long.";
      noteTitle.setCustomValidity("Invalid Min 5 Characters");
    } else {
      titleError.textContent = "";
      noteTitle.setCustomValidity("");
    }
  };

  static get observedAttributes() {
    return ["visibility"];
  }

  attributesChangedCallback(name, oldValue, newValue) {
    if (name == "visibility") {
      this.showInfo = newValue.toLowerCase() === "true";
      this.updateVisbiility();
    }
  }

  updateVisbiility() {
    if (this.showInfo) {
      this.shadowRoot.querySelector(".notesContent").classList.add("show");
      this.shadowRoot.querySelector("#addNote").textContent = "Hide Note";
    } else {
      this.shadowRoot.querySelector(".notesContent").classList.remove("show");
      this.shadowRoot.querySelector("#addNote").textContent = "Add Note";
    }
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#addNote")
      .addEventListener("click", this.handleNoteClick);
    this.shadowRoot
      .querySelector(".note-button-group")
      .addEventListener("click", this.handleSaveCancelNote);
    this.shadowRoot
      .querySelector("#noteForm")
      .addEventListener("input", this.functform);
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("#addNote")
      .removeEventListener("click", this.handleNoteClick);

    this.shadowRoot
      .querySelector(".note-button-group")
      .removeEventListener("click", this.handleSaveCancelNote);

    this.shadowRoot
      .querySelector("#noteForm")
      .removeEventListener("input", this.functform);
  }
}

customElements.define("add-new-note", AddNewNote);
