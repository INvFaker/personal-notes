import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NoteAppBody({ notes, onDelete, onMove, onAddNotes }) {
	const filterNotesActive = notes.filter(
		(noteItem) => noteItem.archived === false
	);
	const filterNotesArchive = notes.filter(
		(noteItem) => noteItem.archived === true
	);

	return (
		<div className="note-app__body">
			<NoteInput onAddNotes={onAddNotes} />
			<h2>Catatan Aktif</h2>
			{filterNotesActive.length === 0 ? (
				<p className="notes-list__empty-message">Tidak ada catatan</p>
			) : (
				<NotesList
					notes={filterNotesActive}
					onDelete={onDelete}
					onMove={onMove}
				/>
			)}
			<h2>Arsip</h2>
			{filterNotesArchive.length === 0 ? (
				<p className="notes-list__empty-message">Tidak ada catatan</p>
			) : (
				<NotesList
					notes={filterNotesArchive}
					onDelete={onDelete}
					onMove={onMove}
				/>
			)}
		</div>
	);
}

export default NoteAppBody;
