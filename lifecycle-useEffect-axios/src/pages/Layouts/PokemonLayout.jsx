import React from "react"
import { Outlet } from "react-router-dom"
import SideBar from "./../../components/SideBar/SideBar"
import "./PokemonLayout.css"
function PokemonLayout() {
	return (
		<>
			<section className="PokemonLayout">
				<SideBar />

				<Outlet />
			</section>
		</>
	)
}

export default PokemonLayout
