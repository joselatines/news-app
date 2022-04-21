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

	const countries = [
		'ae',
		'ar',
		'at',
		'au',
		'be',
		'bg',
		'br',
		'ca',
		'ch',
		'cn',
		'co',
		'cu',
		'cz',
		'de',
		'eg',
		'fr',
		'gb',
		'gr',
		'hk',
		'hu',
		'id',
		'ie',
		'il',
		'in',
		'it',
		'jp',
		'kr',
		'lt',
		'lv',
		'ma',
		'mx',
		'my',
		'ng',
		'nl',
		'no',
		'nz',
		'ph',
		'pl',
		'pt',
		'ro',
		'rs',
		'ru',
		'sa',
		'se',
		'sg',
		'si',
		'sk',
		'th',
		'tr',
		'tw',
		'ua',
		'us',
		've',
		'za',
	];

	const [category, setCategory] = useState('general');
	const [country, setCountry] = useState('us');
	const { data, isLoading, isSuccess, isError } = useGetNewsQuery({
		country,
		category,
	});

	return (
		<Container className='p-5'>
			{isError && <h1>Something went wrong</h1>}
			{isLoading && <h1>Loading...</h1>}

			{isSuccess && (
				<>
					<Navigation
						categories={categories}
						setCategory={setCategory}
						countries={countries}
						setCountry={setCountry}
					/>
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
