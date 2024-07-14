import "./App.css";
import Header from "./components/Header"
import MainLayout from "./layouts/MainLayout";
import Content from "./components/Content"


function App() {
	return (
		<MainLayout>
			<Header />
			<Content />
		</MainLayout>
	);
}

export default App;
