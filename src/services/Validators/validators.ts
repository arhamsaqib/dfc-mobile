import {R} from '../R';

export function required(value: string) {
  if (!value || value === '' || R.isEmpty(value)) {
    return {type: 'required'};
  }
  return null;
}

export function email(value: string) {
  if (value && !R.isEmail(value)) return {type: 'email'};
  return null;
}

export function isNumber(value: string) {
  if (value && isNaN(Number(value))) return {type: 'number'};
  return null;
}

export function getErrorMessage(type: string) {
  switch (type) {
    case 'required':
      return 'This field is required';
    case 'email':
      return 'Invalid email address';
    case 'passwordLength':
      return 'Password should be at least 6 characters';
    default:
      return 'Invalid value';
  }
}

export const passwordLength = (value: string) => {
  if (value.length < 6) return {type: 'passwordLength'};
  return null;
};
