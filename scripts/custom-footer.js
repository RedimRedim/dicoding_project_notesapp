const template = document.createElement("template");
template.innerHTML = `This is a Custom footer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, repudiandae!`;

export class NoteCustomFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("note-custom-footer", NoteCustomFooter);
