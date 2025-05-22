import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Mat from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {Theme} from '@src/constants/colors';

export interface CustomIconProps {
  type?: 'ion' | 'fa' | 'feather' | 'ant' | 'ent' | 'mat';
  name: string;
  size?: number;
  color?: string;
  onPress?(): void;
}

export const Icon = (props: CustomIconProps) => {
  const {
    type = 'ion',
    name = 'help-circle-outline',
    size = 18,
    color = Theme.black,
    onPress,
  } = props;
  const content = () => {
    if (type === 'ion') {
      return <Ionicons size={size} name={name} color={color} />;
    }
    if (type === 'fa') {
      return <FontAwesome size={size} name={name} color={color} />;
    }
    if (type === 'feather') {
      return <Feather size={size} name={name} color={color} />;
    }
    if (type === 'ant') {
      return <AntDesign size={size} name={name} color={color} />;
    }
    if (type === 'ent') {
      return <Entypo size={size} name={name} color={color} />;
    }
    if (type === 'mat') {
      return <Mat size={size} name={name} color={color} />;
    }
    return <></>;
  };
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      {content()}
    </TouchableOpacity>
  );
};
