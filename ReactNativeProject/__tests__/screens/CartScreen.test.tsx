import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CartScreen } from '@src/screens/CartScreens/CartScreen';
import { CartProductsType } from '@src/context/AppContext/types';
import Analytics from 'appcenter-analytics';

let mockUseAuth: jest.Mock;
let mockAddOrder: jest.Mock;
let mockClearCart: jest.Mock;
let mockCartProducts: CartProductsType = [];

jest.mock('@src/context/AuthContext/AuthContext', () => {
  mockUseAuth = jest.fn();

  return {
    useAuth: mockUseAuth.mockReturnValue({
      isSignedIn: true,
    }),
  };
});

jest.mock('@src/context/AppContext/AppContext', () => {
  mockAddOrder = jest.fn();
  mockClearCart = jest.fn();

  return {
    useAppData: () => ({
      addProductToCart: jest.fn(),
      removeProductFromCart: jest.fn(),
      cartProducts: mockCartProducts,
      removeProductCardFromCart: jest.fn(),
      cartPriceDetails: {},
      addOrder: mockAddOrder,
      clearCart: mockClearCart,
      user: { userName: 'testUser' },
    }),
  };
});

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      ...jest.requireActual('@react-navigation/native'),
      navigate: jest.fn(),
    }),
  };
});

describe('CartScreen', () => {
  let navigation: any;

  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the LoginFirst component when user is not signed in', () => {
    mockUseAuth.mockReturnValue({
      isSignedIn: false,
    });

    const { getByText } = render(<CartScreen navigation={navigation} />);
    expect(getByText('Login First!')).toBeDefined();
  });

  it('should render the EmptyCartScreen when the cart is empty', () => {
    mockUseAuth.mockReturnValue({
      isSignedIn: true,
    });

    jest.mock('@src/context/AppContext/AppContext', () => ({
      useAppData: () => ({
        cartProducts: [],
      }),
    }));

    const { getByText } = render(<CartScreen navigation={navigation} />);

    expect(getByText('Your Cart is Empty!')).toBeDefined();
  });

  it('should render the cart products when the cart is not empty', () => {
    mockUseAuth.mockReturnValue({
      isSignedIn: true,
    });

    mockCartProducts = [
      {
        delivery: 1,
        description: '',
        discount: 0,
        id: '0',
        images: [
          {
            id: '0',
            url_size_100x100: 'test_url_size_100x100',
            url_size_240x240: 'test_url_size_240x240',
            url_size_278x371: 'test_url_size_278x371',
          },
        ],
        name: 'Test name 1',
        oldPrice: 0,
        price: 41.99,
        tax: 1,
        totalAmount: 1,
        totalPrice: 43.99,
      },
      {
        delivery: 1,
        description: '',
        discount: 0,
        id: '1',
        images: [
          {
            id: '0',
            url_size_100x100: 'test_url_size_100x100',
            url_size_240x240: 'test_url_size_240x240',
            url_size_278x371: 'test_url_size_278x371',
          },
        ],
        name: 'Test name 2',
        oldPrice: 0,
        price: 25,
        tax: 1,
        totalAmount: 1,
        totalPrice: 26,
      },
    ];

    jest.mock('@src/context/AppContext/AppContext', () => ({
      useAppData: () => ({
        cartProducts: mockCartProducts,
      }),
    }));

    const { getByText } = render(<CartScreen navigation={navigation} />);

    mockCartProducts.forEach(({ name }) => {
      expect(getByText(name)).toBeDefined();
    });
  });

  it('should call onProceedToPayment when the "Proceed to payment" button is pressed', () => {
    jest.spyOn(Analytics, 'trackEvent').mockResolvedValue();
    mockUseAuth.mockReturnValue({
      isSignedIn: true,
    });

    mockCartProducts = [
      {
        delivery: 1,
        description: '',
        discount: 0,
        id: '0',
        images: [
          {
            id: '0',
            url_size_100x100: 'test_url_size_100x100',
            url_size_240x240: 'test_url_size_240x240',
            url_size_278x371: 'test_url_size_278x371',
          },
        ],
        name: 'Test name 1',
        oldPrice: 0,
        price: 41.99,
        tax: 1,
        totalAmount: 5,
        totalPrice: 219.95,
      },
    ];

    jest.mock('@src/context/AppContext/AppContext', () => ({
      useAppData: () => ({
        cartProducts: mockCartProducts,
      }),
    }));

    const { getByText } = render(<CartScreen navigation={navigation} />);

    fireEvent.press(getByText('Proceed to payment'));

    expect(mockAddOrder).toHaveBeenCalled();
    expect(mockClearCart).toHaveBeenCalled();
    expect(navigation.navigate).toHaveBeenCalledWith('OrderConfirmation');
  });
});
