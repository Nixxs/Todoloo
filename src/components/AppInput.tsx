import {FC, useState} from "react";
import { TextField } from "@mui/material";

type AppInputProps = {
	value: string
}

const AppInput: FC<AppInputProps> = ({value}) => {
	const [outputValue, setOutputValue] = useState(value);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOutputValue(event.target.value);
	}

	return (
		<>
			<TextField 
				value={outputValue}
				onChange={handleInputChange}
			/>
			<p>{outputValue}</p>
		</>
	);
}

export default AppInput;