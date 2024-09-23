export class TotalNotes {
  constructor(notesInstance) {
    this.notesInstance = notesInstance;
  }

  sumCreatedNotes() {
    return this.notesInstance.notes.length;
  }

  latestCreatedDate() {
    if (this.notesInstance.notes.length === 0) {
      return null;
    }

    const sortedNotes = this.notesInstance.notes.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
    return sortedNotes[0].createdAt;
  }

  sumArchivedNotes() {
    return this.notesInstance.notes.filter((note) => note.archived).length;
  }

  getNotesTotalHtml() {
    document.querySelector("#created-date-value").innerHTML =
      this.latestCreatedDate();

    document.querySelector("#total-created-notes-value").innerHTML =
      this.sumCreatedNotes();

    document.querySelector("#total-archived-notes-value").innerHTML =
      this.sumArchivedNotes();
  }
}
