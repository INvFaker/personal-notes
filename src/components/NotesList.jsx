import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, onDelete, onMove }) {
	return (
		<div className="notes-list">
			{notes.map((noteItem) => (
				<NoteItem
					key={noteItem.id}
					id={noteItem.id}
					archived={noteItem.archived}
					onDelete={onDelete}
					onMove={onMove}
					{...noteItem}
				/>
			))}
		</div>
	);
}

export default NotesList;
