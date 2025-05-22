import React, {useMemo} from 'react';

export type FormControl<T> = {
  id: string;
  value?: T;
  initialValue?: T;
  control: {
    isEmpty: boolean;
    isNull: boolean;
    patchValue: (newValue: T) => void;
    resetValue: () => void;
    isValid: boolean;
    validate: () => boolean;
  };
  config: {
    placeholder: string;
    isRequired: boolean;
  };
};

export function formControl<T>(params: {
  value?: T;
  placeholder: string;
  isRequired: boolean;
}): Omit<FormControl<T>, 'id'> {
  const {value, placeholder, isRequired} = params;

  const [controlValue, setControlValue] = React.useState(value);
  const [isValid, setIsValid] = React.useState(
    !isRequired || (value !== '' && value !== null && value !== undefined),
  );
  const formControlObj: Omit<FormControl<T>, 'id'> = {
    value: controlValue,
    initialValue: value,
    control: {
      isEmpty: controlValue === '',
      isNull: controlValue === null,
      isValid,
      patchValue(newValue: T) {
        setControlValue(newValue);
        this.isEmpty = newValue === '';
        this.isNull = newValue === null;
        const newIsValid =
          !isRequired || (newValue !== '' && newValue !== null);
        this.isValid = newIsValid;
        setIsValid(newIsValid);
      },
      resetValue() {
        setControlValue(value);
        this.isEmpty = value === '';
        this.isNull = value === null;
        const newIsValid = !isRequired || (value !== '' && value !== null);
        this.isValid = newIsValid;
        setIsValid(newIsValid);
      },
      validate() {
        const newIsValid =
          !isRequired || (controlValue !== '' && controlValue !== null);
        this.isValid = newIsValid;
        setIsValid(newIsValid);
        return newIsValid;
      },
    },
    config: {
      placeholder,
      isRequired,
    },
  };

  return formControlObj;
}

export class FormGroup<
  T extends {[key: string]: Omit<FormControl<any>, 'id'>},
> {
  control: {[K in keyof T]: FormControl<T[K]['value']>};

  constructor(control: T) {
    this.control = Object.keys(control).reduce((acc, key) => {
      acc[key as keyof T] = {...control[key], id: key} as FormControl<
        T[typeof key]['value']
      >;
      return acc;
    }, {} as {[K in keyof T]: FormControl<T[K]['value']>});
  }

  get isSubmittable(): boolean {
    return Object.values(this.control).every(
      control => control.control.isValid,
    );
  }

  patchValue(patch: Partial<{[K in keyof T]: {value: any}}>): void {
    for (const key in patch) {
      if (Object.prototype.hasOwnProperty.call(this.control, key)) {
        const controlField = this.control[key];
        const patchField = patch[key];
        if (patchField && patchField.value !== undefined) {
          controlField.control.patchValue(patchField.value);
        }
      }
    }
  }

  resetValues(): void {
    for (const key in this.control) {
      if (Object.prototype.hasOwnProperty.call(this.control, key)) {
        const controlField = this.control[key];
        controlField.control.resetValue();
      }
    }
  }
}

export function useFormValues<T extends {[key: string]: FormControl<any>}>(
  formGroup: FormGroup<T>,
) {
  return useMemo(() => {
    const values: {[K in keyof T]: T[K]['value']} = {} as {
      [K in keyof T]: T[K]['value'];
    };
    for (const key in formGroup.control) {
      if (Object.prototype.hasOwnProperty.call(formGroup.control, key)) {
        values[key] = formGroup.control[key].value;
      }
    }
    return values;
  }, [formGroup]);
}

// export function useFormState<T extends {[key: string]: FormControl<any>}>(
//   formGroup: FormGroup<T>,
//   onSubmit: (values: {[K in keyof T]: T[K]['value']}) => void,
// ) {
//   const formValues = useFormValues(formGroup);

//   React.useEffect(() => {
//     if (formGroup.isSubmittable) {
//       onSubmit(formValues);
//     }
//   }, [formGroup.isSubmittable, formValues, onSubmit]);

//   return formValues;
// }

export type FormGroupType<T extends FormGroup<any>> = {
  [K in keyof T['control']]: T['control'][K]['value'];
};
