import { Typography, Box, Button } from "@mui/material";
import {useState} from "react"

type ToDo = {
	id: number,
	content: string
}

type ToDos = {
	items: ToDo[]
}

const ToDoList = () => {
	const [todos, setTodos] = useState<ToDos>({items: []})

	const handleAddToDo = () => {
		setTodos(
			prevTodos => ({
				items: [
					...prevTodos.items,
					{
						id: prevTodos.items.length + 1,
						content: "new item"
					}
				]
			})
		);
	}

	return(
		<>
			<Box>
				{todos.items.map((item) => {
					return (
						<Typography
							key={item.id}
							onClick={() => {
								console.log(item.id);
							}}
						>
							{item.content}
						</Typography>
					);
				})}
				<Button
					variant="contained"
					onClick={handleAddToDo}
					sx={{
						mt: 2
					}}
				>Add</Button>
			</Box>
		</>
	);
}

export default ToDoList;