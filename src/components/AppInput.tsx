import {FC, useState} from "react";
import { TextField } from "@mui/material";

type AppInputProps = {
	initialValue: string
}

const AppInput: FC<AppInputProps> = () => {
	const [outputValue, setOutputValue] = useState<string>("");

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOutputValue(event.target.value);
	}

	return (
		<>
			<TextField 
				value={outputValue}
				onChange={handleInputChange}
				sx={{
					mt: 2
				}}
			/>
			<p>{outputValue}</p>
		</>
	);
}

export default AppInput;