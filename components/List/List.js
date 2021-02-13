import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import styles from "./List.module.scss";
export default function List() {
	const [toDoList, setToDoList] = useState([
		{ id: 1, name: "Kush" },
		{ id: 2, name: "Mukesh" },
		{ id: 3, name: "Chandrakant" },
		{ id: 4, name: "Chotalal" },
		{ id: 5, name: "Karsanji" },
		{ id: 6, name: "Kothari" },
	]);

	return (
		<ReactSortable
			list={toDoList}
			setList={setToDoList}
			style={{
				padding: "2em",
				backgroundColor: "#dddddd",
				display: "inline-block",
			}}
			animation={200}
			ghostClass={styles.ghostClass}
			dragClass={styles.dragClass}
		>
			{toDoList.map((item) => (
				<div
					key={item.id}
					style={{
						padding: "1em",
						margin: "1em auto",
						textAlign: "center",
						cursor: "move",
					}}
				>
					{item.name}
				</div>
			))}
		</ReactSortable>
	);
}
