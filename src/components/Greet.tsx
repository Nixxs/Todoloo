type GreetProps = {
	name: string
}

const Greet = (props: GreetProps) => {
	return (
		<div>
			<h2>Hello, {props.name} you have 10 unread messages!</h2>
		</div>
	)
}

export default Greet