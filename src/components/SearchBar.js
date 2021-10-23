import { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
	const [text, setText] = useState('');

	const handleOnSubmit = (e) => {
		e.preventDefault();

		setSearchTerm(text);
	};

	return (
		<div className='container mx-auto px-4 py-2'>
			<h1 className='text-center mb-4 text-4xl font-bold text-gray-700'>
				Find Traditional Food
			</h1>
			<form onSubmit={handleOnSubmit} className='text-center'>
				<input
					type='text'
					className='border px-2 py-1 mr-2 rounded capitalize w-72 shadow'
					placeholder='Search for country...'
					onChange={(e) => setText(e.target.value)}
				/>
				<button
					type='submit'
					className='bg-blue-500 px-3 py-2 rounded text-white text-sm font-semibold hover:bg-blue-600'
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
