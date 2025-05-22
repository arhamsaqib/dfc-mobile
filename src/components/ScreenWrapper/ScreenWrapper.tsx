import React, {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollViewProps} from 'react-native';
import {Header, HeaderProps} from '../Header';
import {TabContent} from '@src/core/TabContent';
import {Theme} from '@src/constants/colors';
import {View} from '@src/core/View';

interface ScreenWrapperProps extends PropsWithChildren {
  scrollable?: boolean;
  headerProps?: HeaderProps;
  scrollViewProps?: ScrollViewProps;
  headerBackground?: string;
  contentBackground?: string;
}

export const ScreenWrapper = (props: ScreenWrapperProps) => {
  const {
    children,
    scrollable = true,
    headerProps,
    scrollViewProps,
    headerBackground = Theme.white,
    contentBackground = Theme.screen_bg,
  } = props;
  return (
    <View style={{flex: 1, backgroundColor: contentBackground}}>
      <SafeAreaView
        style={{width: '100%', backgroundColor: headerBackground}}
      />
      <Header backgroundColor={headerBackground} {...headerProps} />
      {scrollable && <TabContent {...scrollViewProps}>{children}</TabContent>}
      {!scrollable && children}
    </View>
  );
};
