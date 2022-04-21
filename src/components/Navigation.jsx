import { useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';

export const Navigation = ({ categories, setCategory }) => {
	const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
	const lowerCase = str => str.charAt(0).toLowerCase() + str.slice(1);
	return (
		<Breadcrumb>
			{categories.map(el => (
				<Breadcrumb.Item
					onClick={e => setCategory(lowerCase(e.target.textContent))}
					key={el}
				>
					{capitalize(el)}
				</Breadcrumb.Item>
			))}
		</Breadcrumb>
	);
};
