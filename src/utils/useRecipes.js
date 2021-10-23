import { useState, useEffect } from 'react'

export const useRecipes = () => {
	const [recipes, setRecipes] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	console.log(searchTerm)

	useEffect(() => {
		const getRecipes = async () => {
			try {
				const response = await fetch(
					`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${searchTerm}`
				)
				const data = await response.json()
				setRecipes(data.results)
			} catch (error) {
				console.log(error)
			}
		}
		getRecipes()
	}, [searchTerm])

	return { recipes, setSearchTerm, searchTerm }
}
