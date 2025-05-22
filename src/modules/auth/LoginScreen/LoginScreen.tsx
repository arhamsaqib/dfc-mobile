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
import {ScreenProps} from '@src/constants/types';
import {Screens} from '@src/constants/screens';
import {AbsoluteComponent} from '@src/components/AbsoluteComponent';

function defineRegisterForm() {
  return new FormGroup({
    email: formControl<string>({
      placeholder: 'Email',
      isRequired: true,
    }),
    password: formControl<string>({
      placeholder: 'Password',
      isRequired: true,
    }),
    rememberMe: formControl<boolean>({
      placeholder: 'Remember Me',
      isRequired: false,
    }),
  });
}

export const LoginScreen = (props: ScreenProps) => {
  const {navigation} = props;
  const form = defineRegisterForm();
  return (
    <>
      <ScreenWrapper contentBackground={Theme.white}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Margin top={20} />
          <Logo />
          <Margin top={20} />
        </View>
        <View style={{width: '95%', alignSelf: 'center'}}>
          <MultiColorText text1="Sign" text2="In" />
          <Margin top={10} />
          <FormInput
            control={form.control.email}
            type="rounded"
            icon={{name: 'envelope', type: 'fa'}}
          />
          <FormInput
            icon={{name: 'lock', type: 'fa'}}
            control={form.control.password}
            secureTextEntry
            type="rounded"
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{width: '50%'}}>
              <FormCheckbox control={form.control.rememberMe} />
            </View>
            <Text style={{color: Theme.primary}}>Forget Password?</Text>
          </View>
        </View>
      </ScreenWrapper>
      <AbsoluteComponent>
        <Text onPress={() => navigation.push(Screens.register)}>
          Don't have an account?{' '}
          <Text style={{color: Theme.primary}}>Register</Text>
        </Text>
      </AbsoluteComponent>
    </>
  );
};
