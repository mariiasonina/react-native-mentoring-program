import { AuthData } from '@src/context/AuthContext/AuthContext';

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

export const getToken = async ({ userName, userPassword }: AuthData) => {
  try {
    const url =
      'https://stoplight.io/mocks/spark-solutions/api-v2/3124958/spree_oauth/token';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: `{"grant_type":"password","username":${userName},"password":${userPassword}}`,
    };

    const response = await fetch(url, options);
    const data = await response.json();

    return data.accessToken;
  } catch (error) {
    console.error('Error fetching token:', error);
  }
};
