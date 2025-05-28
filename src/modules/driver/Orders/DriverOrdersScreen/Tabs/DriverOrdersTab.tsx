import {formControl, FormGroup} from '@src/core/form';
import {FormInput} from '@src/core/form/Form/FormInput';
import {TabContent} from '@src/core/TabContent';
import {View} from '@src/core/View';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {DriverOrderItem} from '../components/DriverOrderItem';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '@src/constants/screens';

function defineDriverOrderTabForm() {
  return new FormGroup({
    search: formControl<string>({
      placeholder: 'Search',
      isRequired: false,
    }),
  });
}

interface TabProps {
  isCompleted?: boolean;
}

export const DriverOrdersTab = (props: TabProps) => {
  const {isCompleted = false} = props;
  const form = defineDriverOrderTabForm();
  const navigation = useNavigation();

  return (
    <TabContent fullWidth>
      <View style={styles.content}>
        <View row style={{marginBottom: 10}}>
          <FormInput
            icon={{type: 'ion', name: 'search-outline'}}
            control={form.control.search}
          />
        </View>
        <DriverOrderItem
          isCompleted={isCompleted}
          onPress={() =>
            (navigation as any).push(Screens.driverOrdersDetailsScreen)
          }
        />
        <DriverOrderItem isCompleted={isCompleted} />
      </View>
    </TabContent>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'flex-start',
    marginTop: 20,
  },
});
