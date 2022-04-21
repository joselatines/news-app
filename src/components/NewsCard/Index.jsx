import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './styles.css';

export const NewsCard = ({
	title,
	description,
	urlToImage,
	url,
	source,
	publishedAt,
	author,
}) => {
	return (
		<>
			{urlToImage && (
				<div className='col-md-3'>
					<div className='card-sl'>
						<div className='card-image'>
							<img src={urlToImage} />
						</div>

						<a className='card-action' href='#'>
							<i className='fa fa-heart'></i>
						</a>
						<a href={url} target='_blank' rel='noopener noreferrer'>
							<div className='card-heading'>{title}</div>
						</a>
						<div className='card-text'>{description}</div>
						<span className='card-text'>{source?.name}</span>
						<div className='card-text'>
							{publishedAt} - {author}
						</div>
						<a href={url} className='card-button'>
							Read more..
						</a>
					</div>
				</div>
			)}
		</>
	);
};
