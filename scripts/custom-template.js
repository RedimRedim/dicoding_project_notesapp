import { notesData, STORAGE_KEY } from "./notes.js";
const template = document.createElement("template");
template.innerHTML = `
<style>
  button{
  padding:0.8em;
  cursor: pointer;
  }
</style>
<button id="addNote">Add Note</button>
<div class="notesContent" style="display: none;">
<form id="noteForm">
    <div class="note-group">
        <label for="noteTitle">Title</label>
        <input type="text" id="noteTitle" name="noteTitle" required minlength=5>
        <p class="error-message" id="titleError"></p>
    </div>

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
                <div class="noteTitle">${note.title}</div>
                <div class="noteBody">${note.body}</div>
                <div class="noteCreatedAt">${note.createdAt}</div>
                <div class="noteArchived">${note.archived}</div>
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

  handleNoteClick = () => {
    this.showInfo = !this.showInfo;

    if (this.showInfo) {
      this.shadowRoot.querySelector(".notesContent").style.display = "block";
      this.shadowRoot.querySelector("#addNote").textContent = "hide note";
    } else {
      this.shadowRoot.querySelector(".notesContent").style.display = "none";
      this.shadowRoot.querySelector("#addNote").textContent = "Add note";
    }
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
      this.shadowRoot.querySelector(".notesContent").style.display = "none";
      this.shadowRoot.querySelector("#addNote").textContent = "Add note";
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

customElements.define("add-newnote", AddNewNote);
