export const apiUrl = "https://notes-api.dicoding.dev/v2/notes";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark/dark.css"; // Import the dark theme CSS

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

      if (!response.ok) {
        throw new Error(`ERROR ADDING API!, status: ${response}`);
      }

      await this.swalAlert({
        status: "success",
        title: "Note added successfully",
      });

      await this.getNotesHtml();
    } catch (error) {
      this.swalAlert({ status: "error", title: "Failed to add note" });
    }
  }

  swalAlert({ status, title }) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      customClass: {
        container: "swal2-dark", // Add dark theme explicitly
      },
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: status,
      title: title,
    });
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

      this.swalAlert({
        status: "success",
        title: "Note updated successfully",
        text: JSON.stringify(responseData),
      });
    } catch (error) {
      this.swalAlert({ status: "error", title: "Failed to update note" });
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

      this.swalAlert({
        status: "success",
        title: "Note deleted successfully",
        text: JSON.stringify(responseData),
      });
    } catch (error) {
      this.swalAlert({ status: "error", title: "Failed to delete note" });
    }
  }
}
