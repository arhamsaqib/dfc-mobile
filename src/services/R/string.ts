import {R} from '.';
import {lodash} from './lodash';

export function addDot(text: string | null | undefined) {
  text = lodash.trim(text || '');

  if (!text.length) {
    return text;
  }

  return !text.endsWith('.') && !text.endsWith('?') && !text.endsWith('!')
    ? `${text}.`
    : text;
}

export function isEmail(value: string) {
  return R.isString(value) && !!value.match(/.+\@.+\..+/);
}
