import { AnimalProps } from "../types/AnimalTypes"
import {FC} from "react"

const Animal: FC<AnimalProps> = ({family, species, name, age}) => {
	return (
		<div>
			<p>Family: {family}</p>
			<p>Species: {species}</p>
			<p>Name: {name}</p>
			<p>Age: {age}</p>
		</div>
	);
}

export default Animal