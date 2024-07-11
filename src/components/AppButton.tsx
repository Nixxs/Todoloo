import { FC}  from "react";
import { Button } from "@mui/material";

type ButtonProps = {
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AppButton: FC<ButtonProps> = ({handleClick}) => {
	return (
		<Button
			variant="contained"
			onClick={handleClick}
		>
			click me
		</Button>
	);
}

export default AppButton;