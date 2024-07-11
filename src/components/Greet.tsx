type GreetProps = {
	name: string,
	messageCount: number,
	isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
	return (
		<div>
			{props.isLoggedIn ? (
				<h2>Hello, {props.name} you have {props.messageCount} unread messages!</h2>
			):(
				<h2>please login.</h2>
			)}
			
		</div>
	)
}

export default Greet