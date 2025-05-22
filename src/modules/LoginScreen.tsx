import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const LoginScreen = () => {
  return (
    <SafeAreaView style={{margin: 20}}>
      <Text>Hello</Text>
      <Text style={{fontFamily: 'poppins-bold'}}>Hello</Text>
      <FontAwesome name="rocket" size={30} color="#900" />
    </SafeAreaView>
  );
};
