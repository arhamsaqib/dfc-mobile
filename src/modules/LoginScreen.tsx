import {Button} from '@src/core/Button';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const LoginScreen = () => {
  return (
    <SafeAreaView style={{margin: 20}}>
      <Text>Hello</Text>
      <Text style={{fontFamily: 'poppins-bold'}}>Hello</Text>
      <FontAwesome name="rocket" size={30} color="#900" />
      <Button title="Test" loader />
      <Button title="Test" loader intent="light" />
      <Button title="Test" loader intent="danger" />
      <Button title="Test" loader intent="success" />
      <Button title="Test" loader intent="border" />
      <Button
        title="Test"
        loader
        intent="dark"
        icon={{type: 'fa', name: 'rocket', color: 'white'}}
      />

      <Button title="Test" loader intent="dark" type="rounded" />
      <Button title="Test" loader intent="success" type="rounded" />
      <Button title="Test" loader intent="border" type="rounded" />

      <Button title="Disabled" disabled />
    </SafeAreaView>
  );
};
