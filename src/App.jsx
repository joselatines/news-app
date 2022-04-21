import { useState } from 'react';
import { useGetUsersQuery } from './services/users';
import { useGetCountryQuery } from './services/users';

function App() {
	const [category, setCategory] = useState('business');
	const { data, isLoading, isSuccess, isError } = useGetUsersQuery(category);


	console.log(data);

	return (
		<div>
			{isSuccess && (
				<>
					<ul>
						{data.articles.map((el, i) => (
							<li key={i}>{el.title}</li>
						))}
						<h1>{data.articles.length}</h1>
					</ul>
				</>
			)}
		</div>
	);
}

export default App;
