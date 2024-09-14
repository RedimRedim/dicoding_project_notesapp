export const apiUrl = "https://notes-api.dicoding.dev/v2/notes";

export class Notes {
  constructor() {
    this.notes = [];
  }

  async getNotes() {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`ERROR FETCHING API!, status: ${response.status}`);
      }
      const data = await response.json();
      this.notes = data.data;
      return this.notes;
    } catch (error) {
      alert(error);
    }
  }

  async getNotesHtml() {
    this.notes = await this.getNotes();
    console.log(this.notes);
    if (this.notes.length > 0) {
      this.notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      const notesHtml = this.notes.map((note) => {});
      this.notes.forEach((note) => {
        notesHtml.push(
          `<div data-noteId="${note.id}" class="noteItem">
                <div class="noteTitle">${note.title}
                <button id="deleteIcon" aria-label="Cancel">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 24 24">
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
  }

  async addNote(noteData) {
    try {
      const response = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteData),
      });

      const responsedata = await response.json();
      if (!response.ok) {
        throw new Error(`ERROR ADDING API!, status: ${response}`);
      }
      alert(
        `Note has been added successfully" ${JSON.stringify(responsedata)}`
      );
      await this.getNotesHtml();
    } catch (error) {
      alert(error);
    }
  }

  async updateNote(noteId, updatedData) {
    try {
      const response = await fetch(`${apiUrl}/${noteId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`ERROR UPDATING API!, status: ${response}`);
      }

      await this.getNotesHtml();
      alert(`Note updated successfully! ${JSON.stringify(responseData)}`);
    } catch (error) {
      alert(error);
    }
  }

  async deleteNote(noteId) {
    try {
      const response = await fetch(`${apiUrl}/${noteId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`ERROR DELETING API!, status: ${response}`);
      }

      await this.getNotesHtml();
      alert(`Note deleted successfully! ${JSON.stringify(responseData)}`);
    } catch (error) {
      alert(error);
    }
  }
}
