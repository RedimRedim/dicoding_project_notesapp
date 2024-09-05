import { notesData } from "./notes.js";

export class Notes {
  constructor() {}

  getNotesHtml() {
    let notesHtml = [];
    notesData.forEach((note) => {
      notesHtml.push(
        `<div data-noteId="${note.id}">
                <div class="noteTitle">${note.title}</div> 
                <div class="noteBody">${note.body}</div> 
                <div class="noteCreatedAt">${note.createdAt}</div> 
                <div class="noteArchived">${note.archived}</div> 
            </div>`
      );
    });

    return notesHtml.join("");
  }
}

const template = document.createElement("template");
template.innerHTML = `
<button id="addNote">Add Note</button>
<div class="notesContent" style="display: none;">
<form id="noteForm">
    <div class="note-group">
        <label for="noteTitle">Title</label>
        <input type="text" id="noteTitle" name="noteTitle" required minlength=5>
        <p class="error-message" id="usernameError"></p>
    </div>

    <div class="note-group">
        <label for="noteBody">Body</label>
        <textarea id="noteBody" name="noteBody" required></textarea>
    </div>

    <div class="note-group">
        <button type="submit" id="saveNote">Save</button>
        <button type="button" id="cancelNote">Cancel</button>
    </div>
</form>
</div>`;

class AddNewNote extends HTMLElement {
  constructor() {
    super();
    this.showInfo = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  render() {
    this.showInfo = !this.showInfo;

    if (this.showInfo) {
      this.shadowRoot.querySelector(".notesContent").style.display = "block";
      this.shadowRoot.querySelector("#addNote").textContent = "hide note";
    } else {
      this.shadowRoot.querySelector(".notesContent").style.display = "none";
      this.shadowRoot.querySelector("#addNote").textContent = "show note";
    }
  }

  addNote() {
    const noteTitle = this.shadowRoot.querySelector("#noteTitle").value;
    const noteBody = this.shadowRoot.querySelector("#noteBody").value;

    notesData.push({
      id: "123",
      title: noteTitle,
      body: noteBody,
      createdAt: new Date().toISOString(),
      archived: false,
    });

    console.log(notesData);
  }

  validateNoteTitle() {
    const noteTitle = this.shadowRoot.querySelector("#noteTitle");
    const usernameError = this.shadowRoot.querySelector("#usernameError");

    if (noteTitle.value.length < 5) {
      usernameError.textContent = "Title should be at least 5 characters long.";
      noteTitle.setCustomValidity("Invalid");
    } else {
      usernameError.textContent = "";
      noteTitle.setCustomValidity("");
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#addNote").addEventListener("click", () => {
      this.render();
    });

    this.shadowRoot
      .querySelector("#noteTitle")
      .addEventListener("input", () => {
        this.validateNoteTitle();
      });

    this.shadowRoot
      .querySelector("#saveNote")
      .addEventListener("click", (event) => {
        event.preventDefault();
        const form = this.shadowRoot.querySelector("#noteForm");

        if (form.checkValidity()) {
          this.addNote();
        } else {
          form.reportValidity();
        }
      });
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("#addNote")
      .removeEventListener("click", () => {
        this.render();
      });

    this.shadowRoot
      .querySelector("#noteTitle")
      .removeEventListener("input", this.validateNoteTitle);
  }
}

customElements.define("add-newnote", AddNewNote);
