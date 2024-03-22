import React from "react";

class NoteInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: "",
			limitCharacter: 50,
		};

		this.onTitleChangeEventHandler =
			this.onTitleChangeEventHandler.bind(this);
		this.onBodyChangeEventHandler =
			this.onBodyChangeEventHandler.bind(this);
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
	}

	onTitleChangeEventHandler(event) {
		const inputValue = event.target.value;
		const countCharacterInput = inputValue.length;
		const resultLimit = 50 - countCharacterInput;

		if (countCharacterInput <= 50) {
			this.setState(() => ({
				title: inputValue,
				limitCharacter: resultLimit,
			}));
		} else {
			this.setState(() => ({
				title: event.target.value.substring(0, 50),
				limitCharacter: 0,
			}));
		}
	}

	onBodyChangeEventHandler(event) {
		this.setState(() => {
			return {
				body: event.target.value,
			};
		});
	}

	onSubmitEventHandler(event) {
		event.preventDefault();
		this.props.onAddNotes(this.state);
	}

	render() {
		return (
			<div className="note-input">
				<h2>Buat Catatan</h2>
				<form action="" onSubmit={this.onSubmitEventHandler}>
					<p className="note-input__title__char-limit">
						Sisa Karakter: {this.state.limitCharacter}
					</p>
					<input
						type="text"
						className="note-input__title"
						placeholder="Ini adalah judul ..."
						onChange={this.onTitleChangeEventHandler}
						value={this.state.title}
						required
					/>
					<textarea
						className="note-input__body"
						name=""
						id=""
						placeholder="Tuliskan catatanmu di sini ..."
						cols="30"
						rows="10"
						onChange={this.onBodyChangeEventHandler}
						required
					></textarea>
					<button type="submit">Buat</button>
				</form>
			</div>
		);
	}
}

export default NoteInput;
