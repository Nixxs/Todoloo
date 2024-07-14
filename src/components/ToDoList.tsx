import { Typography, Box, Button, TextField } from "@mui/material";
import {useState, FC} from "react"

type ToDo = {
	id: number,
	content: string
}

type ToDos = {
	items: ToDo[]
}

type ToDoListProps = {
	name: string
}

const ToDoList:FC<ToDoListProps> = ({name}) => {
	const [todos, setTodos] = useState<ToDos>({items: []});
	const [inputText, setInputText] = useState<string>("");

	const handleAddToDo = () => {
		if (inputText === "") {
			return
		}
		setTodos(
			prevTodos => ({
				items: [
					...prevTodos.items,
					{
						id: prevTodos.items.length + 1,
						content: inputText
					}
				]
			})
		);
		setInputText("");
	}

	const handleInputChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(event.target.value);
	};

	return(
		<>
			<Box
				sx={{
					textAlign: "left"
				}}
			>
				<Typography
					sx={{
						fontWeight: 600,
						fontSize: 20
					}}
				>
					{name}
				</Typography>
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
				<Box>
					<TextField 
						sx={{
							width: "180px",
							mr: 1,
							mt: 2,
							'& .MuiInputBase-root': {
								height: 37,  // Set the height you want
							},
							'& .MuiOutlinedInput-input': {
								padding: '10px 14px',  // Adjust padding to fit the new height
							}
						}}
						onChange={handleInputChanges}
						value={inputText}
					/>
					<Button
						variant="contained"
						onClick={handleAddToDo}
						sx={{
							mt: 2
						}}
					>Add</Button>
				</Box>

			</Box>
		</>
	);
}

export default ToDoList;