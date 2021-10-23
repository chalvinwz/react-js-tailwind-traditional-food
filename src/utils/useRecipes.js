import { useState, useEffect } from 'react';

export const useRecipes = () => {
	const [recipes, setRecipes] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const getRecipes = async (searchTerm) => {
			try {
				const response = await fetch(
					`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${searchTerm}`
				);
				const data = await response.json();
				setRecipes(data.results);
			} catch (error) {
				console.log(error);
			}
		};
		getRecipes(searchTerm);
	}, [searchTerm]);

	return { recipes, setSearchTerm, searchTerm };
};
