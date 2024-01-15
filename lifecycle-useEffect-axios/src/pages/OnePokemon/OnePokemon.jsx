import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Spinner from "./../../components/Spinner/Spinner"

function OnePokemon() {
	const [onePokemon, setPokemon] = useState(null)
	const { pokemonName } = useParams()
	// console.log(params)

	const fetchPokemon = async () => {
		try {
			const results = await axios.get(
				"https://pokeapi.co/api/v2/pokemon/" + pokemonName
			)
			console.log(results)
			setPokemon(results.data)
		} catch (error) {
			console.error(error)
		}
	}
	useEffect(() => {
		fetchPokemon()
	}, [pokemonName])

	if (!onePokemon) {
		return <Spinner />
	}
	return (
		<section
			style={{
				padding: "1rem",
			}}>
			<h3>{onePokemon.name}</h3>
			<img src={onePokemon.sprites.front_shiny} alt={onePokemon.name} />
			<p>Types: </p>
			<ol>
				{onePokemon.types.map((type) => {
					return <li key={type.slot}>{type.type.name}</li>
				})}
			</ol>
		</section>
	)
}

export default OnePokemon
