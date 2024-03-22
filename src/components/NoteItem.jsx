import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ title, body, createdAt, id, onDelete, onMove, archived }) {
	return (
		<div className="note-item">
			<NoteItemContent title={title} body={body} createdAt={createdAt} />
			<NoteItemAction
				id={id}
				onDelete={onDelete}
				onMove={onMove}
				archived={archived}
			/>
		</div>
	);
}

export default NoteItem;
