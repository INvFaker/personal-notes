import React from "react";
import NoteAppHeader from "./components/NoteAppHeader";
import NoteAppBody from "./components/NoteAppBody";
import { getInitialData } from "./utils/index";

class NoteApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: getInitialData(),
			searchNotes: [],
			searchText: "",
		};

		this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
		this.onMoveEventHandler = this.onMoveEventHandler.bind(this);
		this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
		this.onAddNotesEventHandler = this.onAddNotesEventHandler.bind(this);
	}

	onDeleteEventHandler(id) {
		const filter1 = this.state.searchNotes.filter(
			(noteItem) => noteItem.id !== id
		);
		const filter2 = this.state.notes.filter(
			(noteItem) => noteItem.id !== id
		);

		this.setState({ searchNotes: filter1, notes: filter2 });
	}

	onMoveEventHandler(id) {
		this.setState((prevState) => ({
			searchNotes: prevState.searchNotes.map((noteItem) => {
				if (noteItem.id === id) {
					return { ...noteItem, archived: !noteItem.archived };
				}
				return noteItem;
			}),
			notes: prevState.notes.map((noteItem) => {
				if (noteItem.id === id) {
					return { ...noteItem, archived: !noteItem.archived };
				}
				return noteItem;
			}),
		}));
	}

	onSearchEventHandler(event) {
		const searchValue = event.target.value.toLowerCase();

		this.setState((prevState) => ({
			searchText: searchValue,
			searchNotes: prevState.notes.filter((noteItem) =>
				noteItem.title.toLowerCase().includes(searchValue)
			),
		}));
	}

	onAddNotesEventHandler({ title, body }) {
		const newNoteItem = {
			id: +new Date(),
			title: title,
			body: body,
			archived: false,
			createdAt: new Date(),
		};

		this.setState((prevState) => ({
			notes: [...prevState.notes, newNoteItem],
			searchNotes:
				prevState.searchNotes.length > 0
					? [...prevState.searchNotes, newNoteItem]
					: prevState.searchNotes,
		}));
	}

	render() {
		return (
			<>
				<NoteAppHeader onSearch={this.onSearchEventHandler} />
				<NoteAppBody
					notes={
						this.state.searchText === ""
							? this.state.notes
							: this.state.searchNotes
					}
					onAddNotes={this.onAddNotesEventHandler}
					onDelete={this.onDeleteEventHandler}
					onMove={this.onMoveEventHandler}
				/>
			</>
		);
	}
}

export default NoteApp;
