import 'flag-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const Navigation = ({
	categories,
	setCategory,
	countries,
	setCountry,
}) => {
	const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
	const lowerCase = str => str.charAt(0).toLowerCase() + str.slice(1);

	return (
		<nav>
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
			<div>
				<span className='h-4'>Select a country</span>
				<Dropdown>
					<Dropdown.Toggle variant='success' id='dropdown-basic'>
						Select a country <span className='fi fi-gr'></span>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{countries.map(country => (
							<Dropdown.Item
								key={(`country-`, country)}
								className={country}
								onClick={e => setCountry(e.target.classList[0])}
							>
								<span className={`fi fi-${country}`}></span> - {country}
							</Dropdown.Item>
						))}
					</Dropdown.Menu>

					<option>Select a country</option>
				</Dropdown>
			</div>
		</nav>
	);
};
