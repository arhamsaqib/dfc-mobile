import lodash from 'lodash';

export function objectCompact<T>(
  object: T,
  options?: {number?: boolean; string?: boolean},
) {
  for (const propName in object) {
    if (
      lodash.isNil(object[propName]) ||
      (options && options.number && lodash.isEqual(object[propName], 0)) ||
      (options && options.string && lodash.isEqual(object[propName], ''))
    ) {
      delete object[propName];
    }
  }
  return object;
}
