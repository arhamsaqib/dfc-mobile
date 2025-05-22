import {useNavigation} from '@react-navigation/native';
import {Theme} from '@src/constants/colors';
import {CustomIconProps, Icon} from '@src/core/Icon';
import {Text} from '@src/core/Text';
import {View} from '@src/core/View';
import React from 'react';
import {StyleSheet} from 'react-native';

export interface HeaderProps {
  onBackPress?(): void;
  icon?: CustomIconProps;
  backButton?: boolean;
  title?: string;
  backgroundColor?: string;
}

export const Header = (props: HeaderProps) => {
  const {
    onBackPress,
    icon,
    backButton,
    title,
    backgroundColor = 'transparent',
  } = props;
  const navigation = useNavigation();

  return (
    <View style={[styles.main, {backgroundColor}]}>
      {backButton && (
        <Icon
          type="ion"
          name="chevron-back-outline"
          size={25}
          onPress={onBackPress ? onBackPress : () => navigation.goBack()}
          color="black"
        />
      )}
      {icon && <Icon {...icon} />}
      <Text style={[styles.title, icon && {marginLeft: 10}]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: Theme.screen_title,
    marginLeft: 10,
  },
});
