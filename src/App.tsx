import "./App.css";
import Header from "./components/Header"
import MainLayout from "./layouts/MainLayout";
import ToDoList from "./components/ToDoList";
import {Box} from "@mui/material"

function App() {
	return (
		<MainLayout>
			<Header />
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					mt: 2
				}}
			>
				<ToDoList />
			</Box>
			
		</MainLayout>
	);
}

export default App;
