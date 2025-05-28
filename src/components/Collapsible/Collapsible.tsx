import {Theme} from '@src/constants/colors';
import {appStyle} from '@src/constants/styles';
import {Icon} from '@src/core/Icon';
import {Text} from '@src/core/Text';
import {View} from '@src/core/View';
import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface CollapsibleProps extends React.PropsWithChildren {
  title?: string;
  onToggle?: (isOpen: boolean) => void;
  openByDefault?: boolean;
  bordered?: boolean;
  padding?: boolean;
  bottomRadius?: number;
}

export const Collapsible = (props: CollapsibleProps) => {
  const {
    children,
    title,
    onToggle,
    openByDefault = false,
    bordered,
    padding,
    bottomRadius = 0,
  } = props;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (openByDefault) {
      setOpen(true);
    }
  }, [openByDefault]);

  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          setOpen(!open);
          onToggle?.(!open);
        }}
        style={[
          styles.header,
          bordered && appStyle.defaultBorder,
          padding && {paddingHorizontal: 15},
          bottomRadius > 0 &&
            !open && {
              borderBottomLeftRadius: bottomRadius,
              borderBottomRightRadius: bottomRadius,
            },
        ]}>
        <Text numberOfLines={1} style={{fontSize: 16}}>
          {title}
        </Text>
        <Icon
          name={open ? 'chevron-down' : 'chevron-up'}
          type="ion"
          color={Theme.seconday_text}
        />
      </TouchableOpacity>
      {open && (
        <>
          <View
            style={[
              styles.content,
              bottomRadius > 0 &&
                open && {
                  borderBottomLeftRadius: bottomRadius,
                  borderBottomRightRadius: bottomRadius,
                },
            ]}>
            {children}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: Theme.white,
  },
  content: {
    width: '100%',
    backgroundColor: Theme.white,
    padding: 10,
  },
});
