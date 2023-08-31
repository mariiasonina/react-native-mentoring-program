import React from 'react';
import FailureIcon from '@assets/images/icons/failure.svg';
import SuccessIcon from '@assets/images/icons/success.svg';
import WarningIcon from '@assets/images/icons/warning.svg';

type ModalsType = {
  [key: string]: {
    header?: string;
    text?: string;
    icon: React.ReactElement;
    buttons: { title: string; action: string; isRedColor?: boolean }[];
  };
};

export const MODALS: ModalsType = {
  SELECT_OPTION: {
    header: 'Select color',
    text: 'Please select your color to\nadd this item in your cart',
    icon: <FailureIcon />,
    buttons: [{ title: 'OK', action: 'GO_BACK' }],
  },
  SUCCESS: {
    text: 'Product added to your cart',
    icon: <SuccessIcon />,
    buttons: [{ title: 'OK', action: 'GO_BACK' }],
  },
  LOGIN: {
    header: 'Login To Continue',
    text: 'Please login to add product\nin your cart',
    icon: <WarningIcon />,
    buttons: [
      { title: 'SIGN IN', action: 'GO_SIGN_IN' },
      { title: 'SIGN UP', action: 'GO_SIGN_UP' },
    ],
  },
  LOGOUT: {
    text: 'Are you sure you want to logout?',
    icon: <WarningIcon />,
    buttons: [
      { title: 'CANCEL', action: 'GO_BACK', isRedColor: true },
      { title: 'LOGOUT', action: 'LOGOUT' },
    ],
  },
  SIGN_UP_ERROR: {
    icon: <FailureIcon />,
    buttons: [{ title: 'OK', action: 'GO_SIGN_UP' }],
  },
  SIGN_IN_ERROR: {
    icon: <FailureIcon />,
    buttons: [{ title: 'OK', action: 'GO_SIGN_IN' }],
  },
};
