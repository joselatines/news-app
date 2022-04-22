import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'flag-icons';

import { capitalize, lowerCase } from '../shared/stringModifiers';
import { setCategory, setCountry } from '../features/configSlice';
import { Search } from './Search';

export const Navigation = () => {
	const dispatch = useDispatch();
	const country = useSelector(state => state.config.country);

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

	return (
		<nav>
			<Search />
			<Breadcrumb>
				{categories.map(el => (
					<Breadcrumb.Item
						onClick={e =>
							dispatch(setCategory(lowerCase(e.target.textContent)))
						}
						key={el}
					>
						{capitalize(el)}
					</Breadcrumb.Item>
				))}
			</Breadcrumb>
			<div>
				<Dropdown>
					<Dropdown.Toggle variant='success' id='dropdown-basic'>
						Select a country <span className={`fi fi-${country}`}></span>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{countries.map(el => (
							<Dropdown.Item
								key={(`country-`, el)}
								className={el}
								onClick={e => dispatch(setCountry(e.target.classList[0]))}
							>
								<span className={`fi fi-${el}`}></span> - {el}
							</Dropdown.Item>
						))}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
