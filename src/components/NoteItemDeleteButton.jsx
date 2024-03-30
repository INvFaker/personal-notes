import React from "react";

function NoteItemDeleteButton({ id, onDelete }) {
	return (
		<button
			className="note-item__delete-button"
			onClick={() => onDelete(id)}
		>
			Delete
		</button>
	);
}

export default NoteItemDeleteButton;
