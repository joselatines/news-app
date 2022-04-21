import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';

export const SearchBar = getSearchEntry => {
	return (
		<Container className='mb-5'>
			<InputGroup size='lg'>
				<InputGroup.Text id='inputGroup-sizing-lg'>Search news</InputGroup.Text>
				<FormControl
					aria-label='Large'
					aria-describedby='inputGroup-sizing-sm'
				/>
			</InputGroup>
			<div>
				<div
					as='ul'
					style={{
						listStyleType: 'none',
						display: 'flex',
						alignItems: 'center',
						gap: '.5rem',
					}}
				>
					<span className='h5 me-2'>Category:</span>
					<li>business</li>
					<li>entertainment</li>
					<li>sports</li>
				</div>
			</div>
		</Container>
	);
};
