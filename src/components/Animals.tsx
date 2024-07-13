import { AnimalList, AnimalProps } from "../types/AnimalTypes"
import {FC} from "react"

const Animals: FC<AnimalList> = ({animals}) => {
	return (
		<>
			{animals.map((animal: AnimalProps) => (
				<div
					key={animal.name}
				>
					<p>Family: {animal.family}</p>
					<p>Species: {animal.species}</p>
					<p>Name: {animal.name}</p>
					<p>Age: {animal.age}</p>
				</div>
			))}
		</>
	);
}

export default Animals