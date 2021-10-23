const RecipeCard = ({ title, imageURL }) => {
	return (
		<div className='border border-gray-200 rounded-lg shadow-md max-w-sm p-6'>
			<h1 className='font-bold text-gray-700 mb-4 md:text-lg'>{title}</h1>
			<img src={imageURL} alt='' />
		</div>
	)
}

export default RecipeCard
