import { AddNewNote } from "./custom-template.js";
import { STORAGE_KEY } from "./notes.js";

export class TotalNotes {
  constructor() {
    this.notes = this.loadNotes();
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

  sumCreatedNotes() {
    return this.loadNotes().length;
  }

  latestCreatedDate() {
    const notes = this.loadNotes();

    if (notes.length === 0) {
      return null;
    }

    const sortedNotes = notes.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return sortedNotes[0].createdAt;
  }

  sumArchivedNotes() {
    return this.loadNotes().filter((note) => note.archived).length;
  }

  getNotesTotaltml() {
    document.querySelector("#created-date-value").innerHTML =
      this.latestCreatedDate();

    document.querySelector("#total-created-notes-value").innerHTML =
      this.sumCreatedNotes();

    document.querySelector("#total-archived-notes-value").innerHTML =
      this.sumArchivedNotes();
  }
}
