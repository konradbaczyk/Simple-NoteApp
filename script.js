const addNoteBtn = document.querySelector(".nav-add-btn");
const deleteAllNotesBtn = document.querySelector(".nav-delete-all-btn");

const modalAddNewNote = document.querySelector(".modal-shadow");
const categoryNote = document.querySelector("#category");
const contentNewNote = document.querySelector(".textarea");
const modalCallback = document.querySelector(".modal-callback");
const modalCancelNoteBtn = document.querySelector(".modal-cancel-btn");
const modalConfirmNoteBtn = document.querySelector(".modal-confirm-btn");

const noteArea = document.querySelector(".note-area");
const noteDeleteBtn = document.getElementsByClassName(".note-delete-btn");

console.log(noteDeleteBtn);

let noteID = 0;

const showModal = () => {
	modalAddNewNote.classList.add("modal-display");
};

const cancelAddNote = () => {
	modalAddNewNote.classList.remove("modal-display");
	categoryNote.selectedIndex = "0";
	contentNewNote.value = "";
	modalCallback.classList.remove("callback-visible");
};

const createNote = () => {
	const newNote = document.createElement("div");
	newNote.classList.add("note");
	newNote.setAttribute("id", noteID);

	newNote.innerHTML = `
    <div class="note__header">
		<h3 class="note__header__title note-title">${categoryNote.options[categoryNote.selectedIndex].text}</h3>
		<button class="note__header__delete-btn note-delete-btn" onclick="deleteNote(${noteID})"> 
        <i class="fas fa-times"></i>
        </button>
	</div>
	<div class="note__body">
		<p class="note__body__content note-content">${contentNewNote.value}</p>
	</div>
    `;
	noteArea.appendChild(newNote);
	noteID++;
	contentNewNote.value = "";
	categoryNote.selectedIndex = "0";
};

const confirmAddNote = () => {
	if (categoryNote.options[categoryNote.selectedIndex].value === "0" || contentNewNote.value === "") {
		modalCallback.classList.remove("callback-accepted");
		modalCallback.classList.add("callback-visible", "callback-rejected");
		modalCallback.textContent = "Uzupełnij wszystkie dane!";
	} else {
		createNote();
		modalCallback.classList.remove("callback-rejected");
		modalCallback.classList.add("callback-visible", "callback-accepted");
		modalCallback.textContent = "Notatka dodana!";
	}
};

const deleteNote = (id) => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

const deleteAllNotes = () => {
	noteArea.innerHTML = "";
};

const test = () => {
	console.log("test");
};

addNoteBtn.addEventListener("click", showModal);
modalCancelNoteBtn.addEventListener("click", cancelAddNote);
modalConfirmNoteBtn.addEventListener("click", confirmAddNote);
deleteAllNotesBtn.addEventListener("click", deleteAllNotes);
