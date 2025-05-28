import {Icon} from '@src/core/Icon';
import {Text} from '@src/core/Text';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {View} from '@src/core/View';
import {Theme} from '@src/constants/colors';
import {R} from '@src/services/R';

interface AvatarProps {
  size?: number;
  onPress?(): void;
  source?: ImageSourcePropType;
  border?: boolean;
  name?: string;
  backgroundColor?: string;
  applyInitials?: boolean;
  disabled?: boolean;
  checkmark?: boolean;
  borderColor?: string;
  noMargin?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const {
    size = 70,
    onPress,
    source,
    border = false,
    name,
    backgroundColor = Theme.primary,
    applyInitials = true,
    disabled = false,
    checkmark = false,
    noMargin = false,
    borderColor = '#aaaaaa',
  } = props;

  const sizeStyle = {
    height: size,
    width: size,
    borderRadius: size,
  };

  const imageStyle = border
    ? {
        height: size - 6,
        width: size - 6,
        borderRadius: size - 6,
      }
    : sizeStyle;

  const imageSource = source as any;
  const hasValidSource =
    !R.isUndefined(imageSource) &&
    !R.isEmpty(imageSource.uri) &&
    !R.isNull(imageSource.uri);

  const icon = (
    <Icon name="person-outline" size={size / 2} type="mat" color="white" />
  );

  const hasName = !R.isUndefined(name) && !R.isEmpty(name) && !R.isNull(name);
  const nameInitials =
    hasName && name
      ? name
          .split(' ')
          .map(n => n[0])
          .join('')
      : '';

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.main,
          sizeStyle,
          border && styles.border,
          border && {borderColor},
          noMargin && {marginBottom: 0},
          !hasValidSource && {backgroundColor},
        ]}>
        {hasValidSource && <Image source={imageSource} style={imageStyle} />}
        {!hasValidSource && (
          <>
            {!hasName && icon}
            {hasName && (
              <Text
                white
                bold
                style={{textAlign: 'center', fontSize: size / 6}}>
                {applyInitials ? nameInitials : name}
              </Text>
            )}
          </>
        )}
        {checkmark && (
          <View style={styles.checkmark}>
            <Icon type="fa" name="check" color="white" size={13} />
          </View>
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  border: {
    borderWidth: 3,
    borderColor: '#aaaaaa',
  },
  checkmark: {
    position: 'absolute',
    bottom: 0,
    left: -10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: Theme.primary,
    borderColor: 'white',
    borderWidth: 1,
  },
});
