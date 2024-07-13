import { counterReducer } from "../reducers/CounterReducer";
import { useReducer } from "react";

const Counter = () => {
	const [countState, countDispatch] = useReducer(counterReducer, {count: 0});
	return (
		<>
			<h1>{countState.count}</h1>
			<button
				onClick={() => {countDispatch({type:"increment", payload: 1})}}
			>Increase</button>
			<button
				onClick={() => {countDispatch({type:"decrement", payload: 1})}}
			>Decrease</button>
		</>
	);
}

export default Counter;