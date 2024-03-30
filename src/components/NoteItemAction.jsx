import React from "react";
import NoteItemDeleteButton from "./NoteItemDeleteButton";
import NoteItemMoveButton from "./NoteItemMoveButton";

function NoteItemAction({ id, onDelete, onMove, archived }) {
	return (
		<div className="note-item__action">
			<NoteItemDeleteButton id={id} onDelete={onDelete} />
			<NoteItemMoveButton id={id} onMove={onMove} archived={archived} />
		</div>
	);
}

export default NoteItemAction;
