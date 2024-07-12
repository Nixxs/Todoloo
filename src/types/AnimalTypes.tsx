type AnimalProps = {
	family: string,
	species: string
	name: string,
	age: number
}

type AnimalList = {
	animals: AnimalProps[]
}

export type { AnimalProps, AnimalList }