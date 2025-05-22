import {lodash, lfp} from './lodash';
import * as object from './object';
import * as string from './string';

const R = {
  ...lodash,

  ops: {
    ...lfp,
  },

  ...string,
  ...object,
};

export {R};
