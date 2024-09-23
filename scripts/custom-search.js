const template = document.createElement("template");
template.innerHTML = `
<style>
  #filterNote{
  padding: 0.8em;
  border-radius: 5px;
  border: 0;
  width: 200px;
  font-size: 1em;

  }


@media (max-width: 768px) {
#filterNote{
  width: 300px;
}
}
</style>
<input type="text" placeholder="Search Note Title" id="filterNote">
`;

export class NoteCustomSearch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  searchTitle(event) {
    const searchInput = event.target.value.toLowerCase();
    const notes = document.querySelectorAll(".noteItem");

    notes.forEach((note) => {
      const title = note.querySelector(".noteTitle").textContent.toLowerCase();

      if (title.includes(searchInput)) {
        note.style.display = "block";
      } else {
        note.style.display = "none";
      }
    });
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("input")
      .addEventListener("input", this.searchTitle.bind(this));
  }

  disconnectedCallBack() {
    this.shadowRoot
      .querySelector("input")
      .removeEventListener("input", this.searchTitle.bind(this));
  }
}
