import { UserData } from '@src/context/AuthContext/AuthContext';

const paths = {
  products: 'https://demo.spreecommerce.org/api/v2/storefront/products',
  token: 'https://demo.spreecommerce.org/spree_oauth/token',
  account: 'https://demo.spreecommerce.org/api/v2/storefront/account',
  addresses:
    'https://demo.spreecommerce.org/api/v2/storefront/account/addresses',
};

export const fetchData = async (filter = '') => {
  try {
    const response = await fetch(
      `${paths.products}?filter%5Bname%5D=${filter}&include=images&fields%5Bproduct%5D=id%2Cname%2Cprice%2Cdescription%2Ccompare_at_price%2Cimages`,
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getToken = async ({ email, userPassword }: UserData) => {
  try {
    const bodyData = {
      grant_type: 'password',
      username: email,
      password: userPassword,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(bodyData),
    };

    const response = await fetch(paths.token, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching token:', error);
  }
};

export const getAccountData = async (token: string) => {
  const url = `${paths.account}?include=default_billing_address`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Account getting error:', error);
  }
};

export const createAccount = async ({
  userName,
  email,
  userPassword,
  passwordConfirmation,
}: Required<UserData>) => {
  const [firstName, lastName] = userName?.split(' ');
  const bodyData = {
    user: {
      email,
      first_name: firstName,
      last_name: lastName,
      selected_locale: 'en',
      password: userPassword,
      password_confirmation: passwordConfirmation,
      public_metadata: {
        user_segment: 'supplier',
      },
      private_metadata: {
        has_abandoned_cart: false,
      },
    },
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
    },
    body: JSON.stringify(bodyData),
  };

  try {
    const response = await fetch(paths.account, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Account creating error:', error);
  }
};

export const manageAddress = async (
  {
    id,
    token,
    fullName,
    locality,
    build,
    city,
    phone,
  }: {
    [key: string]: string;
  },
  action?: string,
) => {
  const [first_name, last_name] = fullName.split(' ');
  const url =
    action === 'CREATE' ? paths.addresses : `${paths.addresses}/${id}`;
  const bodyData = {
    address: {
      first_name,
      last_name,
      address1: locality,
      address2: build,
      city,
      phone,
      state_name: 'CA',
      country_iso: 'US',
      zipcode: '90210',
    },
  };

  const options = {
    method: action === 'CREATE' ? 'POST' : 'PATCH',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bodyData),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Address error:', error);
  }
};
