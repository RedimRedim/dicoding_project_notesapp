const template = document.createElement("template");
template.innerHTML = `
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" defer> 
</script>

<style>
  button{
    background-color: #7f5af0;
    border-radius: 5px;
    border: 0;
    color: #fffffe;
    width: 150px;
    padding: 0.8em;
    cursor: pointer;
    margin-bottom: 1em;
  }

  #cancelNote{
    background-color: #94A1B2;
  }

  .notesContent {
   width:150px;
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
    width: 100%;
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
    font-size: 18px;
    flex-grow:1
    outline: none;
    border: none;
  }

     .form-check {
      width:100%;
      margin: 0;
      display:flex;
      gap: 4em;
      justify-content: flex-start;
      align-items: center;
      align-self: center;
    }

    .form-check-label{
      margin-left: -50px;
      align-items:center;
      align-self: center;
      justify-content: center;
    }

    .form-check-input{
       width:15% !important;
       height:10%!important;
       border: 1px solid white !important;
      padding: 1em !important;
      margin-bottom: 2em;
    }

  .notesContent {
    width: 500px;
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


  .notesContent {
    width: 100%;
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

      <div class="form-check form-switch">
      <label class="form-check-label" for="flexSwitchCheckDefault">Archived</label>
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
      </div>

    <div class="note-group note-button-group">
        <button type="submit" id="saveNote">Save</button>
        <button type="button" id="cancelNote">Cancel</button>

    </div>

 
</form>
</div>`;

export class NoteCustomAdd extends HTMLElement {
  constructor(notesInstance, totalNotesInstance) {
    super();
    this.showInfo = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.noteInstance = notesInstance;
    this.totalNoteInstance = totalNotesInstance;
  }
  async postNote() {
    const noteTitle = this.shadowRoot.querySelector("#noteTitle").value;
    const noteBody = this.shadowRoot.querySelector("#noteBody").value;
    const isArchived = this.shadowRoot.querySelector(
      "#flexSwitchCheckDefault",
    ).checked;
    let noteData = {
      title: noteTitle,
      body: noteBody,
    };

    await this.noteInstance.addNote(noteData, isArchived);
  }

  handleNoteClick = () => {
    this.showInfo = !this.showInfo;
    this.updateVisbiility();
  };

  handleSaveCancelNote = async (event) => {
    if (event.target.id === "saveNote") {
      const form = this.shadowRoot.querySelector("#noteForm");
      if (form.checkValidity()) {
        event.preventDefault();
        await this.postNote();
        await this.totalNoteInstance.getNotesTotalHtml();
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
      this.setAttribute("visibility", "true");
    } else {
      this.shadowRoot.querySelector(".notesContent").classList.remove("show");
      this.shadowRoot.querySelector("#addNote").textContent = "Add Note";
      this.setAttribute("visibility", "false");
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
