import { createContext, useContext } from 'react';
import { ConvertedProductType } from '@src/dataConverters/convertProductsData';
import { CartPriceDetailsType, CartProductsType } from './AppProvider';

export const cartPriceDetailsInitialState = {
  totalAmount: 0,
  price: 0,
  delivery: 0,
  discount: 0,
  tax: 0,
  totalPrice: 0,
};

type AppContextType = {
  addProductToCart: (product: ConvertedProductType | null) => void;
  removeProductFromCart: (productId: string) => void;
  removeProductCardFromCart: (productId: string) => void;
  cartProducts: CartProductsType;
  cartPriceDetails: CartPriceDetailsType;
};

const AppContext = createContext<AppContextType>({
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  removeProductCardFromCart: () => {},
  cartProducts: [],
  cartPriceDetails: cartPriceDetailsInitialState,
});

export const useAppData = () => useContext(AppContext);

export default AppContext;
