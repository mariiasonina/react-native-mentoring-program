import { createContext, useContext } from 'react';
import { ConvertedProductType } from '@src/dataConverters/convertProductsData';
import { UserData } from '../AuthContext/AuthContext';
import {
  CartPriceDetailsType,
  CartProductsType,
  OrderType,
  OrdersType,
  ProfileType,
} from './types';

export const cartPriceDetailsInitialState = {
  totalAmount: 0,
  price: 0,
  delivery: 0,
  discount: 0,
  tax: 0,
  totalPrice: 0,
};

export const profileInitialState = {
  id: '',
  fullName: '',
  phone: '',
  city: '',
  locality: '',
  build: '',
};

export const userInitialState = {
  userName: '',
  email: '',
  userPassword: '',
  passwordConfirmation: '',
};

type AppContextType = {
  addProductToCart: (product: ConvertedProductType | null) => void;
  removeProductFromCart: (productId: string) => void;
  removeProductCardFromCart: (productId: string) => void;
  clearCart: () => void;
  setProfileData: (profile: ProfileType) => void;
  changeProfileField: (key: keyof ProfileType, value: string) => void;
  changeUserField: (key: keyof Required<UserData>, value: string) => void;
  resetUserData: () => void;
  addOrder: (order: OrderType) => void;
  manageAddress: (action: string) => Promise<void>;
  cartProducts: CartProductsType;
  cartPriceDetails: CartPriceDetailsType;
  profile: ProfileType;
  user: Required<UserData>;
  orders: OrdersType;
};

const AppContext = createContext<AppContextType>({
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  removeProductCardFromCart: () => {},
  clearCart: () => {},
  setProfileData: () => {},
  changeProfileField: () => {},
  changeUserField: () => {},
  resetUserData: () => {},
  addOrder: () => {},
  manageAddress: async () => {},
  cartProducts: [],
  cartPriceDetails: cartPriceDetailsInitialState,
  profile: profileInitialState,
  user: userInitialState,
  orders: [],
});

export const useAppData = () => useContext(AppContext);

export default AppContext;
