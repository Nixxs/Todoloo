import ToDoList from "./ToDoList";
import {Box} from "@mui/material"
import {useState} from "react"
import {TextField, Button} from "@mui/material"

type ListItem = {
	name: string,
	id: number,
}

type ListItems = {
	items: ListItem[]
}

const Content = () => {
	const [todoLists, setTodoLists] = useState<ListItems>({items:[]});
	const [inputText, setInputText] = useState<string>("");

	const handleInputTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(event.target.value);
	}

	const handleAddList = () => {
		setTodoLists(
			prevTodoLists => ({
				items: [
					...prevTodoLists.items,
					{
						name: inputText,
						id: prevTodoLists.items.length + 1
					}
				]
			})
		);

		setInputText("");
	}

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<Box
				sx={{
					flex: 1
				}}
			>
				<TextField 
					value={inputText}
					onChange={handleInputTextChange}
					sx={{
						'& .MuiInputBase-root': {
							height: 37,  // Set the height you want
						},
						'& .MuiOutlinedInput-input': {
							padding: '10px 14px',  // Adjust padding to fit the new height
						}						
					}}
				/>
				<Button
					variant="outlined"
					onClick={handleAddList}
					sx={{
						ml: 1
					}}
				>
					Add List
				</Button>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					mt: 2,
				}}
			>
				{todoLists.items.map(
					(item)=>{
						return (
							<ToDoList 
								key={item.id}
								name={item.name}
							/>
						);
					}
				)}
			</Box>
		</Box>
	);
}


export default Content
