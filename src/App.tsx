import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person"
import PersonList from "./components/PersonList"

function App() {
	const names = [
		{
			first: "nick",
			last: "chai"
		},
		{
			first: "karene",
			last: "loi"
		},
		{
			first: "declan",
			last: "chai"
		}
	]

	return (
		<>
			<div className="card">
				<Greet 
					name="Nick" 
					messageCount={10}
					isLoggedIn={true}
				/>
			</div>
			<div className="card">
				<Person
					name={{
						first: "Nick",
						last: "Chai"
					}}
				/>
			</div>
			<div className="card">
				<PersonList
					names={names}
				/>
			</div>
		</>
	);
}

export default App;
