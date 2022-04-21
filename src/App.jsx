import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Navigation } from './components/Navigation';
import { News } from './components/News';

import { useGetNewsQuery } from './services/getNewsByCategory';

function App() {
	const categories = [
		'general',
		'business',
		'entertainment',
		'sports',
		'health',
		'science',
		'technology',
	];

	const [category, setCategory] = useState('business');
	const { data, isLoading, isSuccess, isError } = useGetNewsQuery(category);

	return (
		<Container className='p-5'>
			{isError && <h1>Something went wrong</h1>}
			{isLoading && <h1>Loading...</h1>}

			{isSuccess && (
				<>
					<Navigation categories={categories} setCategory={setCategory} />
					<Row>
						{data.articles
							.filter(({ urlToImage }) => urlToImage)
							.map(({ ...data }, i) => (
								<News key={i} {...data} />
							))}
					</Row>
				</>
			)}
		</Container>
	);
}

export default App;
