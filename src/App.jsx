import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { Navigation } from './components/Navigation';
import { News } from './components/News';
import { useGetNewsQuery } from './services/getNewsByCategory';
import { capitalize } from './shared/stringModifiers';

function App() {
	const config = useSelector(state => state.config);

	const { data, isLoading, isSuccess, isError } = useGetNewsQuery(config);
	console.log(data);

	return (
		<Container className='p-5'>
			<Navigation />
			{isError && <h1>Something went wrong</h1>}
			{isLoading && <h1>Loading...</h1>}

			{!isLoading & isSuccess && data.articles.length > 1 ? (
				<>
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
			) : (
				<h1>Nothing was founded</h1>
			)}
		</Container>
	);
}

export default App;
