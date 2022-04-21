import { Card, Button } from 'react-bootstrap';

export const News = ({ title, url, urlToImage, author, publishedAt }) => {
	return (
		<Card style={{ width: '20rem', margin: '.5rem' }}>
			<Card.Img variant='top' alt={title} src={urlToImage} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					Author: {author} - {publishedAt}
				</Card.Text>
				<a href={url} target='_blank' rel='noopener noreferrer'>
					<Button variant='primary'>Read more</Button>
				</a>
			</Card.Body>
		</Card>
	);
};
