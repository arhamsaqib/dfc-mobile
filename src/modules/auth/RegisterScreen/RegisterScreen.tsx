import {ScreenWrapper} from '@src/components/ScreenWrapper';
import {Theme} from '@src/constants/colors';
import React from 'react';
import {Logo} from '../components/Logo';
import {Text} from '@src/core/Text';
import {TextInput} from '@src/core/TextInput';
import {Margin} from '@src/components/Margin';
import {MultiColorText} from '../components/MultiColorText';
import {formControl, FormGroup} from '@src/core/form';
import {FormInput} from '@src/core/form/Form/FormInput';
import {View} from 'react-native';
import {FormCheckbox} from '@src/core/form/Form/FormCheckbox';
import {FormSelect} from '@src/core/form/Form/FormSelect';

function defineLoginForm() {
  return new FormGroup({
    companyName: formControl<string>({
      placeholder: 'Company Name',
      isRequired: true,
    }),
    email: formControl<string>({
      placeholder: 'Email',
      isRequired: true,
    }),
    role: formControl<string>({
      placeholder: 'Role',
      isRequired: true,
    }),
    password: formControl<boolean>({
      placeholder: 'Password',
      isRequired: true,
    }),
    confirmPassword: formControl<boolean>({
      placeholder: 'Re-Enter Password',
      isRequired: true,
    }),
  });
}

export const RegisterScreen = () => {
  const form = defineLoginForm();
  const roleItems = [
    {label: 'Seller', value: 'seller'},
    {label: 'Transporter', value: 'transporter'},
  ];
  return (
    <ScreenWrapper contentBackground={Theme.white}>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <Margin top={20} />
        <Logo />
        <Margin top={20} />
      </View>
      <View style={{width: '95%', alignSelf: 'center'}}>
        <MultiColorText text1="Register" text2="Now" />
        <Margin top={10} />
        <FormInput
          control={form.control.companyName}
          type="rounded"
          icon={{name: 'building', type: 'fa'}}
        />
        <FormInput
          control={form.control.email}
          type="rounded"
          icon={{name: 'envelope', type: 'fa'}}
        />
        <FormSelect
          control={form.control.role}
          icon={{name: 'sitemap', type: 'fa'}}
          items={roleItems}
        />
        <FormInput
          control={form.control.password}
          type="rounded"
          icon={{name: 'lock', type: 'fa'}}
        />
        <FormInput
          icon={{name: 'lock', type: 'fa'}}
          control={form.control.confirmPassword}
          secureTextEntry
          type="rounded"
        />
      </View>
    </ScreenWrapper>
  );
};
