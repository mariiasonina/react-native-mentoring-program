import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CartScreen } from '@src/screens/CartScreens/CartScreen';
import { useAuth } from '@src/context/AuthContext/AuthContext';
import Analytics from 'appcenter-analytics';
import { useAppData } from '@src/context/AppContext/AppContext';

const mockAppData = {
  addProductToCart: jest.fn(),
  removeProductFromCart: jest.fn(),
  cartProducts: [],
  removeProductCardFromCart: jest.fn(),
  cartPriceDetails: {},
  addOrder: jest.fn(),
  clearCart: jest.fn(),
  user: { userName: 'testUser' },
};

jest.mock('@src/context/AuthContext/AuthContext', () => ({
  useAuth: jest.fn(),
}));

jest.mock('@src/context/AppContext/AppContext', () => {
  return {
    useAppData: jest.fn(),
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
    (useAuth as jest.Mock).mockReturnValueOnce({
      isSignedIn: false,
    });

    (useAppData as jest.Mock).mockReturnValueOnce({ ...mockAppData });

    const { getByText } = render(<CartScreen navigation={navigation} />);
    expect(getByText('Login First!')).toBeDefined();
  });

  it('should render the EmptyCartScreen when the cart is empty', () => {
    (useAuth as jest.Mock).mockReturnValueOnce({
      isSignedIn: true,
    });

    (useAppData as jest.Mock).mockReturnValueOnce({
      ...mockAppData,
      cartProducts: [],
    });

    const { getByText } = render(<CartScreen navigation={navigation} />);

    expect(getByText('Your Cart is Empty!')).toBeDefined();
  });

  it('should render the cart products when the cart is not empty', () => {
    (useAuth as jest.Mock).mockReturnValueOnce({
      isSignedIn: true,
    });

    const mockCartProducts = [
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

    (useAppData as jest.Mock).mockReturnValueOnce({
      ...mockAppData,
      cartProducts: mockCartProducts,
    });

    const { getByText } = render(<CartScreen navigation={navigation} />);

    mockCartProducts.forEach(({ name }) => {
      expect(getByText(name)).toBeDefined();
    });
  });

  it('should call onProceedToPayment when the "Proceed to payment" button is pressed', () => {
    jest.spyOn(Analytics, 'trackEvent').mockResolvedValue();
    (useAuth as jest.Mock).mockReturnValueOnce({
      isSignedIn: true,
    });

    const mockCartProducts = [
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

    const mockAddOrder = jest.fn();
    const mockClearCart = jest.fn();

    (useAppData as jest.Mock).mockReturnValueOnce({
      ...mockAppData,
      addOrder: mockAddOrder,
      clearCart: mockClearCart,
      cartProducts: mockCartProducts,
    });

    const { getByText } = render(<CartScreen navigation={navigation} />);

    fireEvent.press(getByText('Proceed to payment'));

    expect(mockAddOrder).toHaveBeenCalled();
    expect(mockClearCart).toHaveBeenCalled();
    expect(navigation.navigate).toHaveBeenCalledWith('OrderConfirmation');
  });
});
