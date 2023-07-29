export const fetchData = async () => {
	try {
		const response = await fetch(
			'https://demo.spreecommerce.org/api/v2/storefront/products?include=images&fields%5Bproduct%5D=id%2Cname%2Cprice%2Cdescription%2Ccompare_at_price%2Cimages',
		);
		const data = await response.json();

		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};
