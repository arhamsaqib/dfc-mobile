import React, {memo, ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
} from 'react-native';
import {MyViewProps, View} from '../View';

interface TabContentProps extends MyViewProps, ScrollViewProps {
  backgroundColor?: string;
}

export const TabContent = memo((props: TabContentProps) => {
  const {children, backgroundColor = false, refreshControl, ...left} = props;
  const {style, transparent = false, ...rest} = left;
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
        <View {...rest} transparent={transparent} style={[styles.main, style]}>
          {children}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  main: {},
});
