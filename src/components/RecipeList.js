import RecipeCard from './RecipeCard'

const RecipeList = ({ recipes, searchTerm }) => {
	return (
		<div className='container mx-auto px-4 py-2'>
			{searchTerm && (
				<h1 className='capitalize text-gray-700 text-2xl font-semibold mb-4 text-center md:text-left'>
					{searchTerm} Traditional Foods
				</h1>
			)}
			<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
				{recipes.map((recipe) => (
					<RecipeCard
						key={recipe.id}
						title={recipe.title}
						imageURL={recipe.image}
					/>
				))}
			</div>
		</div>
	)
}

export default RecipeList
