const apiUrl = "https://notes-api.dicoding.dev/v2#/";

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

      this.notes = await response.json();
      console.log(this.notes);
      return this.notes;
    } catch (error) {
      console.log(error);
    }
  }

  getNotesHtml() {
    if (this.notes.length > 0) {
      this.notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

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

  generateNoteId() {
    return `notes-${Math.random().toString(36).substring(2, 8)}-${Math.random()
      .toString(36)
      .substring(2, 8)}`;
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

      if (!response.ok) {
        throw new Error(`ERROR UPDATING API!, status: ${response.status}`);
      }

      const responseData = await response.json();
      await this.getNotes();
      this.getNotesHtml();
      alert(`Note updated successfully! ${responseData}`);
    } catch (error) {
      console.log(error);
      alert("Failed to update note. Please try again");
    }
  }

  deleteNote(noteId) {
    console.log(noteId);
  }
}
