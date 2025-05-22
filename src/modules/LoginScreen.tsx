import {Theme} from '@src/constants/colors';
import {Button} from '@src/core/Button';
import {TextInput} from '@src/core/TextInput';
import {View} from '@src/core/View';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const LoginScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: Theme.screen_bg}}>
      <View style={{width: '80%', alignSelf: 'center'}}>
        <Text>Hello</Text>
        <Text style={{fontFamily: 'poppins-bold'}}>Hello</Text>
        <FontAwesome name="rocket" size={30} color="#900" />
        <Button title="Test" loader />
        <Button title="Test" loader intent="light" />
        <TextInput placeholder="Hello" />
        <TextInput placeholder="Hello" icon={{name: 'rocket'}} />
        <TextInput placeholder="Hello" icon={{name: 'rocket'}} type="rounded" />
        <TextInput placeholder="Hello" type="rounded" />
        <TextInput placeholder="Hello" type="rounded" secureTextEntry />
        <TextInput
          placeholder="Hello"
          icon={{name: 'rocket'}}
          type="rounded"
          secureTextEntry
        />
      </View>
    </SafeAreaView>
  );
};
