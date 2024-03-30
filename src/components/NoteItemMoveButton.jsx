import React from "react";

function NoteItemMoveButton({ id, onMove, archived }) {
	return (
		<button
			className="note-item__archive-button"
			onClick={() => onMove(id)}
		>
			{archived ? "Pindahkan" : "Arsipkan"}
		</button>
	);
}

export default NoteItemMoveButton;
