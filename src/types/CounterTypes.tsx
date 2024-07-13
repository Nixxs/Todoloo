type CounterState = {
	count: number
}

type CounterActions = {
	type: "increment" | "decrement"
	payload: number
}

export type {CounterState, CounterActions}