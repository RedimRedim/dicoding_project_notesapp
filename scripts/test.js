import { Notes } from "./class.js";

const NoteClass = new Notes();

// console.log(notesData);
// const template = document.createElement("template");
// template.innerHTML = `
// <style>
//     p{background-color: steelblue;}
// </style>
// <div class="noteContent" data-noteid="id">
// <p class="noteTitle"></p>
// <p class="noteBody"></p>
// <p class="createdAt"></p>
// <p class="archived"></p>
// </div>
// `;

// function getNote() {
//   const notesDiv = "";

//   notesData.forEach((note) => {
//     console.log(note);
//   });

//   return notesDiv;
// }

// class NoteItem extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//     this.shadowRoot.appendChild(template.content.cloneNode(true));
//   }

//   render() {

//   }

//   connectedCallback() {
//     // this.render();
//   }
// }

// customElements.define("note-item", NoteItem);

//push noteid andcreate note-item once DOM is being loaded

document.addEventListener("DOMContentLoaded", (event) => {
  const notesHtml = NoteClass.getNotesHtml();
  const notesContainer = document.querySelector(".notes");
  notesContainer.innerHTML = notesHtml;
});
