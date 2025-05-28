import {Theme} from '@src/constants/colors';
import {CustomIconProps, Icon} from '@src/core/Icon';
import {Text} from '@src/core/Text';
import {View} from '@src/core/View';
import React, {useMemo} from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';

interface RowItemProps extends React.PropsWithChildren {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
  titleIcon?: CustomIconProps;
}

export const RowItem = (props: RowItemProps) => {
  const {title, children, titleIcon} = props;

  const titleContainerWidth = useMemo(() => {
    if (!children) {
      return '70%';
    }
    return '35%';
  }, [children]);

  return (
    <View style={styles.main}>
      <View
        style={[
          styles.titleCont,
          titleIcon && {alignItems: 'flex-start'},
          {width: titleContainerWidth},
        ]}>
        {titleIcon && <Icon {...titleIcon} />}
        <Text style={[styles.title, titleIcon && {marginLeft: 5}]}>
          {title}
        </Text>
      </View>
      <View style={styles.valueCont}>
        <Text style={styles.value}>{children}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    minHeight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 1,
  },
  title: {
    fontSize: 14,
    color: Theme.grey1,
  },
  value: {
    fontSize: 14,
    color: Theme.black,
    textAlign: 'right',
  },
  titleCont: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  valueCont: {
    width: '55%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
