import {Avatar, Card, Margin, UploadContainer} from '@src/components';
import {ScreenWrapper} from '@src/components/ScreenWrapper';
import {appStyle, ScreenProps} from '@src/constants';
import {Button, formControl, FormGroup, Text, View} from '@src/core';
import {FormInput} from '@src/core/form/Form/FormInput';
import {FormLabel} from '@src/core/form/Form/FormLabel';
import React from 'react';
import {StyleSheet} from 'react-native';

function defineProfileForm() {
  return new FormGroup({
    name: formControl<string>({
      placeholder: 'Full Name',
      isRequired: true,
    }),
    email: formControl<string>({
      placeholder: 'Email',
      isRequired: true,
    }),
    phone: formControl<string>({
      placeholder: 'Phone Number',
      isRequired: false,
    }),
    companyName: formControl<string>({
      placeholder: 'Company Name',
      isRequired: true,
    }),
    address: formControl<string>({
      placeholder: 'Business Address',
      isRequired: true,
    }),
  });
}

export const ProfileScreen = (props: ScreenProps) => {
  const {navigation} = props;

  const form = defineProfileForm();
  return (
    <ScreenWrapper
      headerProps={{title: 'Profile Management', backButton: true}}>
      <Margin top={20} />
      <View style={appStyle.contentView}>
        <Card style={{width: '100%'}}>
          <Margin top={20} />
          <Avatar size={86} />
          <Text style={styles.title}>Personal Information</Text>
          <Margin top={10} />
          <FormLabel style={{alignSelf: 'flex-start'}}>Full Name</FormLabel>
          <FormInput control={form.control.name} bordered />
          <FormLabel style={{alignSelf: 'flex-start'}}>Email Address</FormLabel>
          <FormInput control={form.control.email} bordered />
          <FormLabel style={{alignSelf: 'flex-start'}}>Phone Number</FormLabel>
          <FormInput control={form.control.phone} bordered />
        </Card>
        <Margin top={20} />
        <Card style={{width: '100%'}}>
          <Margin top={20} />
          <Text style={styles.title}>Business Information</Text>
          <Margin top={10} />
          <FormLabel style={{alignSelf: 'flex-start'}}>Company Name</FormLabel>
          <FormInput control={form.control.companyName} bordered />
          <FormLabel style={{alignSelf: 'flex-start'}}>
            Business Address
          </FormLabel>
          <FormInput control={form.control.address} bordered />
        </Card>
        <Margin top={20} />
        <Card style={{width: '100%'}}>
          <UploadContainer title="Upload Business Form" />
        </Card>
        <Margin top={20} />
        <Button title="Save" />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    alignSelf: 'flex-start',
    fontWeight: '600',
  },
});
