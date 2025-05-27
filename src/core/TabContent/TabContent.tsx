import React, {memo, ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewProps,
} from 'react-native';

interface TabContentProps extends ViewProps, ScrollViewProps {
  backgroundColor?: string;
  fullWidth?: boolean;
}

export const TabContent = memo((props: TabContentProps) => {
  const {children, backgroundColor = false, refreshControl, ...left} = props;
  const {style, fullWidth, ...rest} = left;
  const dimensions = useWindowDimensions();
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: 'transparent'}} // Ensure the view takes up full space
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} // Adjust the offset if necessary
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        refreshControl={refreshControl}
        style={[!!backgroundColor && {backgroundColor: backgroundColor}]}>
        <View
          style={[styles.main, fullWidth && {width: dimensions.width}, style]}>
          {children}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  main: {},
});
