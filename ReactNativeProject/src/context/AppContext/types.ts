import { ConvertedProductType } from '@src/dataConverters/convertProductsData';
import { UserData } from '../AuthContext/AuthContext';

export type CartProductType = ConvertedProductType & {
  totalAmount: number;
};

export type OrderType = {
  id: string;
  date: string;
  products: CartProductType[];
  totalAmount: number;
  status: string;
};

export type ProfileType = {
  id: string;
  fullName: string;
  phone: string;
  city: string;
  locality: string;
  build: string;
};

export type CartPriceDetailsType = {
  totalAmount: number;
  price: number;
  delivery: number;
  discount: number;
  tax: number;
  totalPrice: number;
};

export type CartProductsType = CartProductType[];

export type OrdersType = OrderType[];

export type StateProps = {
  cartProducts: CartProductsType;
  orders: OrdersType;
  profile: ProfileType;
  user: Required<UserData>;
};

export type ActionType =
  | { type: 'ADD_PRODUCT_TO_CART'; product: ConvertedProductType | null }
  | { type: 'REMOVE_PRODUCT_FROM_CART'; productId: string }
  | { type: 'REMOVE_PRODUCT_CARD_FROM_CART'; productId: string }
  | { type: 'CLEAR_CART' }
  | { type: 'CHANGE_PROFILE_FIELD'; key: string; value: string }
  | { type: 'CHANGE_USER_FIELD'; key: string; value: string }
  | { type: 'SET_PROFILE'; profile: ProfileType }
  | { type: 'RESET_USER_DATA' }
  | { type: 'ADD_ORDER'; order: OrderType };
