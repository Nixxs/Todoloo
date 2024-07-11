import { FC, ReactNode } from 'react';

type StatusProps = {
	status: "loading" | "ready" | "error",
	children?: ReactNode
}

const Status: FC<StatusProps>  = ({status, children }) => {
	return(
		<div>
			<h2>load message: {status}</h2>
			{children}
		</div>
	);
}

export default Status;