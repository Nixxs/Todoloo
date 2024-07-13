import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import Status from "./components/Status"
import AppButton from "./components/AppButton"
import AppInput from "./components/AppInput";
import Animal from "./components/SeparateTypes";
import Animals from "./components/Animals"
import CheckAuth from "./components/AuthCheck";

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

	const animals = [
		{
			family: "feliine",
			species: "ragdoll",
			name: "manny",
			age: 9
		},
		{
			family: "canine",
			species: "Golden",
			name: "Max",
			age: 11
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
				<h3>Input and click events</h3>
				<AppButton 
					handleClick = {(event) => {
						alert("button clicked: " + event.type);
					}}
				/>
				<br />
				<AppInput 
					initialValue=""
				/>
			</div>
			<div className="card">
				<h3>Separating Types to different files</h3>
				<Animal 
					family="Canine"
					species="Golden Retriever"
					name= "max"
					age = {12}
				/>
			</div>
			<div className="card">
				<h3>Separating Types to different files</h3>
				<Animal 
					family="Canine"
					species="Golden Retriever"
					name= "max"
					age = {12}
				/>
			</div>
			<div className="card">
				<Animals
					animals={animals}
				/>
			</div>
			<div
				className="card"
			>
				<CheckAuth />
			</div>
		</>
	);
}

export default App;
