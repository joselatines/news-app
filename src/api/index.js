export const getNews = async (
	lang = 'en',
	country = 'us',
	endpoint = 'top-headlines'
) => {
	const API_KEY = '7f600c1864644f8b9b3c5665cbc9342d';

	try {
		const response = await fetch(
			`https://newsapi.org/v2/${endpoint}?country=${country}&apiKey=${API_KEY}`
		);
		const data = await response.json();

		if (data.status === 'ok') {
			return data;
		} else {
			return 'Something in the api went wrong';
		}
	} catch (err) {
		console.log('Something went wrong', err);
	}
};
