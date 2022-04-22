import { useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setSearch } from '../features/configSlice';

export const Search = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	return (
		<InputGroup className='mb-3'>
			<FormControl
				placeholder='Search'
				aria-label='Search'
				aria-describedby='basic-addon2'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<Button
				variant='outline-primary'
				onClick={() => dispatch(setSearch(value))}
				id='button-addon2'
			>
				Search
			</Button>
		</InputGroup>
	);
};
