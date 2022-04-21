import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { NewsCard } from '../../components/NewsCard/Index';
import { SearchBar } from '../../shared/SearchBar/Index';

export const Home = ({ newsData, getSearchEntry }) => {
	getSearchEntry('fff');
	return (
		<Container>
			<h1>News</h1>
			<SearchBar getSearchEntry={getSearchEntry} />
			<Row style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem 1rem' }}>
				{newsData?.map(({ ...singleNewsData }, i) => (
					<NewsCard key={i} {...singleNewsData} />
				))}
			</Row>
		</Container>
	);
};
