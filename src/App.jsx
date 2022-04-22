import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { Navigation } from './components/Navigation';
import { News } from './components/News';
import { useGetNewsQuery } from './services/getNewsByCategory';
import { capitalize } from './shared/stringModifiers';

function App() {
	const config = useSelector(state => state.config);

	const { data, isLoading, isSuccess, isError } = useGetNewsQuery(config);
	console.log(data, isLoading, isSuccess, isError);

	return (
		<Container className='p-5'>
			{isError && <h1>Something went wrong</h1>}
			{isLoading && <h1>Loading...</h1>}

			{isSuccess && (
				<>
					<Navigation />
					<h1>
						{capitalize(config.category)}{' '}
						{config.search && `- ${config.search}`}
					</h1>
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
