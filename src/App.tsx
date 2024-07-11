import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import Status from "./components/Status"
import Appbutton from "./components/AppButton"
import AppButton from "./components/AppButton";

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
			<div className="card">
				<Status
					status="loading"
				>
					<>
						<p>the children</p>
					</>
				</Status>
			</div>
			<div className="card">
				<h3>A button</h3>
				<AppButton 
					handleClick = {(event) => {
						alert("button clicked: " + event.type);
					}}
				/>
			</div>
		</>
	);
}

export default App;
