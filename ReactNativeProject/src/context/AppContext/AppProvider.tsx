import React, {
  PropsWithChildren,
  Reducer,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import AppContext, {
  cartPriceDetailsInitialState,
  profileInitialState,
  userInitialState,
} from './AppContext';
import { ConvertedProductType } from '@src/dataConverters/convertProductsData';
import { UserData, useAuth } from '../AuthContext/AuthContext';
import {
  ActionType,
  CartProductsType,
  OrderType,
  ProfileType,
  StateProps,
} from './types';
import { manageAddress, getAccountData } from '@src/api/api';

const initialState: StateProps = {
  cartProducts: [],
  orders: [],
  profile: profileInitialState,
  user: userInitialState,
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

      return { ...prevState, cartProducts: updatedCartProducts };
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

      return { ...prevState, cartProducts: updatedCartProductsAfterRemoval };
    case 'REMOVE_PRODUCT_CARD_FROM_CART':
      return {
        ...prevState,
        cartProducts: prevState.cartProducts.reduce((acc, item) => {
          if (item.id === action.productId) {
            return acc;
          }

          return [...acc, item];
        }, [] as CartProductsType),
      };
    case 'CLEAR_CART':
      return {
        ...prevState,
        cartProducts: [],
      };
    case 'ADD_ORDER':
      return {
        ...prevState,
        orders: prevState.orders.concat(action.order),
      };
    case 'CHANGE_PROFILE_FIELD':
      return {
        ...prevState,
        profile: {
          ...prevState.profile,
          [action.key]: action.value,
        },
      };
    case 'CHANGE_USER_FIELD':
      return {
        ...prevState,
        user: {
          ...prevState.user,
          [action.key]: action.value,
        },
      };
    case 'RESET_USER_DATA':
      return {
        ...prevState,
        user: {
          ...userInitialState,
        },
      };
    case 'SET_PROFILE':
      return {
        ...prevState,
        profile: action.profile,
      };

    default:
      return { ...prevState };
  }
};

const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { userToken } = useAuth();

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { included } = await getAccountData(userToken);

        if (included?.length) {
          const { id, attributes } = included[0];

          dispatch({
            type: 'SET_PROFILE',
            profile: {
              id,
              fullName: `${attributes.firstname} ${attributes.lastname}`,
              phone: attributes.phone,
              city: attributes.city,
              locality: attributes.address1,
              build: attributes.address2,
            },
          });
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    if (userToken) {
      fetchData();
    }
  }, [userToken]);

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
      clearCart: () => {
        dispatch({ type: 'CLEAR_CART' });
      },
      addOrder: (order: OrderType) => {
        dispatch({ type: 'ADD_ORDER', order });
      },
      setProfileData: (profile: ProfileType) => {
        dispatch({ type: 'SET_PROFILE', profile });
      },
      changeProfileField: (key: keyof ProfileType, value: string) => {
        dispatch({ type: 'CHANGE_PROFILE_FIELD', key, value });
      },
      changeUserField: (key: keyof Required<UserData>, value: string) => {
        dispatch({ type: 'CHANGE_USER_FIELD', key, value });
      },
      resetUserData: () => {
        dispatch({ type: 'RESET_USER_DATA' });
      },
      manageAddress: async (action: string) => {
        const requestBody = {
          id: state.profile.id,
          token: userToken,
          fullName: state.profile.fullName,
          locality: state.profile.locality,
          build: state.profile.build,
          city: state.profile.city,
          phone: state.profile.phone,
        };

        if (action === 'CREATE') {
          const { data } = await manageAddress(requestBody, action);

          dispatch({
            type: 'CHANGE_PROFILE_FIELD',
            key: 'id',
            value: data?.id,
          });
        } else {
          await manageAddress(requestBody, action);
        }
      },
      cartProducts: state.cartProducts,
      cartPriceDetails,
      profile: state.profile,
      user: state.user,
      orders: state.orders,
    }),
    [
      state.cartProducts,
      state.profile,
      state.user,
      state.orders,
      cartPriceDetails,
      userToken,
    ],
  );

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
