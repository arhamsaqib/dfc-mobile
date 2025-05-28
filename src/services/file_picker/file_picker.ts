import {pick, types} from '@react-native-documents/picker';

interface PickerOptions {
  multiple?: boolean;
  type?: PickerType;
}

export async function open(options?: PickerOptions) {
  const isMultiple = options?.multiple ?? false;
  const allowedTypes = getTypes(options?.type);
  return await pick({
    allowMultiSelection: isMultiple,
    mode: 'import',
    types: allowedTypes,
  });
}

export type PickerType = 'image' | 'document' | 'all';
export function getTypes(inType?: PickerType) {
  const type = inType ?? 'image';
  switch (type) {
    case 'image':
      return [types.images];
    case 'document':
      return [types.pdf];
    case 'all':
      return [types.pdf, types.images];
    default:
      return [types.images];
  }
}
