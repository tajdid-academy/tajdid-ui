import { useReducer } from 'react';

type PasswordState = {
  [key: string]: {
    isValid: boolean;
    message: string;
  };
};

const passwordState = {
  length: {
    isValid: false,
    message: '8 characters long (max 15)',
  },
  uppercase: {
    isValid: false,
    message: 'At least 1 uppercase letter (A-Z)',
  },
  lowercase: {
    isValid: false,
    message: 'At least 1 lowercase letter (a-z)',
  },
  number: {
    isValid: false,
    message: 'At least 1 number (0-9)',
  },
  specialCharacter: {
    isValid: false,
    message: '1 special character (ex: # $ % & * @)',
  },
};

const reducer = (
  state: PasswordState,
  action: { type: string; payload: boolean },
) => {
  switch (action.type) {
    case 'SET_LENGTH_VALID':
      return { ...state, length: { ...state.length, isValid: action.payload } };
    case 'SET_UPPERCASE_VALID':
      return {
        ...state,
        uppercase: { ...state.uppercase, isValid: action.payload },
      };
    case 'SET_LOWERCASE_VALID':
      return {
        ...state,
        lowercase: { ...state.lowercase, isValid: action.payload },
      };
    case 'SET_NUMBER_VALID':
      return { ...state, number: { ...state.number, isValid: action.payload } };
    case 'SET_SPECIALCHAR_VALID':
      return {
        ...state,
        specialCharacter: {
          ...state.specialCharacter,
          isValid: action.payload,
        },
      };
    default:
      return state;
  }
};

export default function usePasswordSchema() {
  const [state, dispatch] = useReducer(reducer, passwordState);

  const handlePasswordValidation = (value: string) => {
    dispatch({
      type: 'SET_LENGTH_VALID',
      payload: value.length >= 8 && value.length <= 15,
    });
    dispatch({ type: 'SET_UPPERCASE_VALID', payload: /[A-Z]/.test(value) });
    dispatch({ type: 'SET_LOWERCASE_VALID', payload: /[a-z]/.test(value) });
    dispatch({ type: 'SET_NUMBER_VALID', payload: /\d/.test(value) });
    dispatch({
      type: 'SET_SPECIALCHAR_VALID',
      payload: /[!@#$%^&*]/.test(value),
    });
  };

  return {
    handlePasswordValidation,
    passwordState: state,
  };
}
