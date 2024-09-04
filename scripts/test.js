import { notesData } from "./notes.js";

console.log(notesData);
const template = document.createElement("template");
template.innerHTML = `
<style>
    p{background-color: steelblue;}
</style>
<div class="noteContent" data-noteid="id">
<p class="noteTitle"></p>
<p class="noteBody"></p>
<p class="createdAt"></p>
<p class="archived"></p>
</div>
`;

function getNote() {
  const notesDiv = "";

  notesData.forEach((note) => {
    console.log(note);
  });

  return notesDiv;
}

class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  render() {

  }

  connectedCallback() {
    // this.render();
  }
}

customElements.define("note-item", NoteItem);
getNote();

//push noteid andcreate note-item once DOM is being loaded

document.addEventListener("DOMContentLoaded", (event) => {
  const notesElement = document.querySelector(".notes");

  notesData.forEach((note) => {
    let noteElement = document.createElement("note-item");
    noteElement.setAttribute("data-noteid", note.id);

    notesElement.appendChild(noteElement);
  });
});
