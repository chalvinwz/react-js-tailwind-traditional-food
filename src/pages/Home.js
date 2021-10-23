import SearchBar from '../components/SearchBar'
import RecipeList from '../components/RecipeList'

import { useRecipes } from '../utils/useRecipes'

const Home = () => {
	const { recipes, setSearchTerm, searchTerm } = useRecipes()

	return (
		<>
			<SearchBar setSearchTerm={setSearchTerm} />
			<RecipeList recipes={recipes} searchTerm={searchTerm} />
		</>
	)
}

export default Home
