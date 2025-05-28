import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput as TI,
  TextInputEndEditingEventData,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import {CustomIconProps, Icon} from '../Icon';
import {View} from '../View';
import {Text} from '../Text';
import {R} from '@src/services/R';
import {Validators} from '@src/services/Validators';
import {Theme} from '@src/constants/colors';

export interface MyTIProps extends TextInputProps {
  mainContainerStyle?: StyleProp<ViewStyle>;
  iconContainerStyle?: StyleProp<ViewStyle>;
  icon?: CustomIconProps;
  id?: string;
  onUpdate?: (key: string, value: any) => void;
  validators?: any[];
  textarea?: boolean;
  light?: boolean;
  inputType?: 'text' | 'number';
  type?: 'rounded' | 'squared';
  bordered?: boolean;
}

export const TextInput = (props: MyTIProps) => {
  const [error, setError] = useState('');

  const {
    icon = null,
    style,
    mainContainerStyle,
    iconContainerStyle,
    onChangeText,
    onUpdate,
    id,
    autoCorrect = false,
    validators = [],
    secureTextEntry,
    textarea = false,
    light = false,
    inputType,
    type = 'squared',
    bordered = false,
    ...rest
  } = props;

  const placeholderTextColor = Theme.inactive_text;
  const borderRadius = type === 'rounded' ? 25 : 8;
  const divider = type === 'rounded';
  const backgroundColor = type === 'rounded' ? Theme.field_bg : Theme.white;

  const [isSecure, setSecure] = React.useState(secureTextEntry);

  function onEndEditing(e: NativeSyntheticEvent<TextInputEndEditingEventData>) {
    const text = e.nativeEvent.text;

    if (validators.length === 0) {
      onUpdate && onUpdate('isDirty', false);
      setError('');
      return;
    }

    for (let i = 0; i < validators.length; i++) {
      const validator = validators[i];
      const res = validator(text);
      if (res && !R.isNull(res.type)) {
        setError(Validators.getErrorMessage(res.type));
        onUpdate && onUpdate('isDirty', true);
        return;
      } else {
        onUpdate && onUpdate('isDirty', false);
        setError('');
      }
    }
  }

  return (
    <>
      <View
        style={[
          styles.main,
          textarea && {height: 162},
          {borderRadius, backgroundColor},
          bordered && styles.border,
          mainContainerStyle,
        ]}>
        {icon && (
          <View style={[styles.iconContainer, iconContainerStyle]}>
            <Icon {...icon} />
          </View>
        )}
        {icon && divider && (
          <View
            style={{
              height: '40%',
              alignSelf: 'center',
              width: 2,
              backgroundColor: Theme.black,
            }}
          />
        )}
        <TI
          multiline={textarea}
          placeholderTextColor={placeholderTextColor}
          autoCorrect={autoCorrect}
          onEndEditing={onEndEditing}
          secureTextEntry={isSecure}
          onChangeText={v => {
            if (inputType === 'number') {
              v = v.replace(/[^0-9]/g, '');
            }
            onChangeText && onChangeText(v);
            id && onUpdate && onUpdate(id, v);
          }}
          {...rest}
          style={[
            styles.ti,
            !icon && styles.noIconTi,
            divider && {marginLeft: 10},
            style,
          ]}
        />
        {secureTextEntry && (
          <View style={[styles.eyeContainer]}>
            <Icon
              type="ion"
              name={isSecure ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => setSecure(!isSecure)}
              color={Theme.primary}
            />
          </View>
        )}
      </View>
      {error && (
        <Text bold style={styles.err}>
          {error}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 48,
    width: '100%',
    backgroundColor: Theme.field_bg,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    borderRadius: 10,
    width: '12%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ti: {
    height: '100%',
    width: '72%',
    color: Theme.black,
    fontFamily: 'poppins',
  },
  noIconTi: {
    paddingLeft: 10,
    width: '84%',
  },
  secure: {
    width: '70%',
  },
  eyeContainer: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  err: {
    color: Theme.danger,
    fontSize: 12,
    marginLeft: 10,
    marginTop: -5,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  light: {
    backgroundColor: '#f5f5f5',
    borderColor: '#E2E2E2',
    borderWidth: 1,
  },
  border: {
    borderWidth: 0.7,
    borderColor: Theme.inactive_text,
  },
});
