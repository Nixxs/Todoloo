import { CounterState, CounterActions } from "../types/CounterTypes"

function counterReducer(state:CounterState , action: CounterActions){
	switch(action.type){
		case "increment":
			return (
				{count: state.count + action.payload}
			)
		case "decrement":
			return (
				{count: state.count - action.payload}
			)
		default:
			return state
	}
}

export {counterReducer}