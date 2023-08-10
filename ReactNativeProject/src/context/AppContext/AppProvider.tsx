import React, { PropsWithChildren, Reducer, useMemo, useReducer } from 'react';
import AppContext, { cartPriceDetailsInitialState } from './AppContext';
import { ConvertedProductType } from '@src/dataConverters/convertProductsData';

export type CartProductType = ConvertedProductType & {
  totalAmount: number;
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

type StateProps = {
  cartProducts: CartProductsType;
};

type ActionType =
  | { type: 'ADD_PRODUCT_TO_CART'; product: ConvertedProductType | null }
  | { type: 'REMOVE_PRODUCT_FROM_CART'; productId: string }
  | { type: 'REMOVE_PRODUCT_CARD_FROM_CART'; productId: string };

const initialState: StateProps = {
  cartProducts: [],
};

const reducer: Reducer<StateProps, ActionType> = (prevState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      if (!action.product) {
        return prevState;
      }

      const targetProduct = prevState.cartProducts.find(
        ({ id }) => id === action.product?.id,
      );

      const updatedCartProducts = targetProduct
        ? prevState.cartProducts.map(item =>
            item.id === action.product?.id
              ? { ...item, totalAmount: item.totalAmount + 1 }
              : item,
          )
        : [...prevState.cartProducts, { ...action.product, totalAmount: 1 }];

      return { cartProducts: updatedCartProducts };

    case 'REMOVE_PRODUCT_FROM_CART':
      const updatedCartProductsAfterRemoval = prevState.cartProducts.reduce(
        (acc, item) => {
          if (item.id === action.productId) {
            return item.totalAmount > 1
              ? [...acc, { ...item, totalAmount: item.totalAmount - 1 }]
              : acc;
          }

          return [...acc, item];
        },
        [] as CartProductsType,
      );

      return { cartProducts: updatedCartProductsAfterRemoval };

    case 'REMOVE_PRODUCT_CARD_FROM_CART':
      return {
        cartProducts: prevState.cartProducts.reduce((acc, item) => {
          if (item.id === action.productId) {
            return acc;
          }

          return [...acc, item];
        }, [] as CartProductsType),
      };

    default:
      return { ...prevState };
  }
};

const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const cartPriceDetails = state.cartProducts.reduce(
    (acc, { totalAmount, price, delivery, discount, tax, totalPrice }) => ({
      totalAmount: acc.totalAmount + totalAmount,
      price: acc.price + price * totalAmount,
      delivery: acc.delivery + delivery * totalAmount,
      discount: acc.discount + discount * totalAmount,
      tax: acc.tax + tax * totalAmount,
      totalPrice: acc.totalPrice + totalPrice * totalAmount,
    }),
    cartPriceDetailsInitialState,
  );

  const appContext = useMemo(
    () => ({
      addProductToCart: (product: ConvertedProductType | null) => {
        dispatch({ type: 'ADD_PRODUCT_TO_CART', product });
      },
      removeProductFromCart: (productId: string) => {
        dispatch({ type: 'REMOVE_PRODUCT_FROM_CART', productId });
      },
      removeProductCardFromCart: (productId: string) => {
        dispatch({ type: 'REMOVE_PRODUCT_CARD_FROM_CART', productId });
      },
      cartProducts: state.cartProducts,
      cartPriceDetails,
    }),
    [state.cartProducts, cartPriceDetails],
  );

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
