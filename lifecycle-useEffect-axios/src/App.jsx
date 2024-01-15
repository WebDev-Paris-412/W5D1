import "./App.css"
/**
 * Componen t lifecycle
 * - Mounting (Added to the DOM)
 * - Update (State update / props change)
 * - Unmounting (death of a component)
 *
 */
import { Routes, Route } from "react-router-dom"
import CountersPage from "./pages/CountersPage/CountersPage"
import HomePage from "./pages/HomePage/HomePage"
import GlobalEventListener from "./pages/GlobalEventListener/GlobalEventListener"
import NavBar from "./components/NavBar/NavBar"
import PokemonLayout from "./pages/Layouts/PokemonLayout"
import PokemonsPage from "./pages/PokemonsPage/PokemonsPage/PokemonsPage"
import OnePokemon from "./pages/OnePokemon/OnePokemon"
import Footer from "./components/Footer/Footer"
// function expensiveComputationnalFunction () {
//   return 1
// }

function App() {
	return (
		<>
			<NavBar />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/counters" element={<CountersPage />} />
					<Route path="/global" element={<GlobalEventListener />} />
					<Route path="/pokemons" element={<PokemonLayout />}>
						<Route index element={<PokemonsPage />} />
						<Route path=":pokemonName" element={<OnePokemon />} />
					</Route>
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App
