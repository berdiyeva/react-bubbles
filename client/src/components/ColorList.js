import React, { useState } from "react";
import { AxiosWithAuth } from "../utils/AxiosWithAuth";
// import { useHistory } from "react-router-dom";

const initialColor = {
	color: "",
	code: { hex: "" },
};

const ColorList = ({ colors, getColors }) => {
	console.log("Colors are here:", colors);
	const [editing, setEditing] = useState(false);
	const [colorToEdit, setColorToEdit] = useState(initialColor);
// editing color
	const editColor = (color) => {
		setEditing(true);
		setColorToEdit(color);
	};
// saving edited color
	const saveEdit = (e) => {
		e.preventDefault();
		const id = colorToEdit.id;
		AxiosWithAuth()
			.put(`/colors/${id}`, colorToEdit)
			.then((res) => {
				setEditing(false);
				getColors();
			})
			.catch((err) => console.log("Edit Error: ", err));
	};
// deleting color
	const deleteColor = (color) => {
		AxiosWithAuth()
			.delete(`/colors/${color.id}`)
			.then((res) => {
				console.log("deleted color res:", res);
				getColors();
			})
			.catch((err) => console.log("deleted color error: ", err));
	};

	return (
		<div className='colors-wrap'>
			<p>colors</p>
			<ul>
				{colors.map((color) => (
					<li key={color.color} onClick={() => editColor(color)}>
						<span>
							<span
								className='delete'
								onClick={(e) => {
									e.stopPropagation();
									deleteColor(color);
								}}
							>
								x
							</span>{" "}
							{color.color}
						</span>
						<div
							className='color-box'
							style={{ backgroundColor: color.code.hex }}
						/>
					</li>
				))}
			</ul>
			{editing && (
				<form onSubmit={saveEdit}>
					<legend>edit color</legend>
					<label>
						color name:
						<input
							onChange={(e) =>
								setColorToEdit({ ...colorToEdit, color: e.target.value })
							}
							value={colorToEdit.color}
						/>
					</label>
					<label>
						hex code:
						<input
							onChange={(e) =>
								setColorToEdit({
									...colorToEdit,
									code: { hex: e.target.value },
								})
							}
							value={colorToEdit.code.hex}
						/>
					</label>
					<div className='button-row'>
						<button type='submit'>save</button>
						<button onClick={() => setEditing(false)}>cancel</button>
					</div>
				</form>
			)}
			<div className='spacer' />
			{/* stretch - build another form here to add a color */}
		</div>
	);
};

export default ColorList;
