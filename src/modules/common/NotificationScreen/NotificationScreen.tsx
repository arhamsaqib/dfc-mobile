import {ScreenWrapper} from '@src/components/ScreenWrapper';
import {ScreenProps} from '@src/constants/types';
import {formControl, FormGroup} from '@src/core/form';
import {FormInput} from '@src/core/form/Form/FormInput';
import {View} from '@src/core/View';
import React, {useCallback, useMemo} from 'react';
import {NotificationItem} from './components/NotificationItem';
import {Margin} from '@src/components/Margin';

function defineNotificationScreenForm() {
  return new FormGroup({
    search: formControl<string>({
      placeholder: 'Search',
      isRequired: false,
    }),
  });
}

export const NotificationScreen = (props: ScreenProps) => {
  const form = defineNotificationScreenForm();

  const items = useMemo(
    () => [
      {
        title: 'New Order',
        description: 'You have a new order',
        time: '3:49 pm',
      },
      {
        title: 'Order Completed',
        description: 'Your order has been completed',
        time: '3:49 pm',
      },
      {
        title: 'New Message',
        description: 'You have a new message',
        time: '3:49 pm',
      },
      {
        title: 'System Update',
        description: 'A new system update is available',
        time: '3:49 pm',
      },
      {
        title: 'Account Alert',
        description: 'There was a login attempt from a new device',
        time: '3:49 pm',
      },
      {
        title: 'Payment Received',
        description: 'Your payment has been received',
        time: '3:49 pm',
      },
    ],
    [],
  );

  const renderItems = useCallback((item: any, index: number) => {
    return <NotificationItem item={item} key={index} isUnread={index === 0} />;
  }, []);

  return (
    <ScreenWrapper headerProps={{title: 'Notifications'}}>
      <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
        <FormInput
          control={form.control.search}
          icon={{type: 'ion', name: 'search-outline'}}
        />
        <Margin top={20} />
        {items.map(renderItems)}
      </View>
    </ScreenWrapper>
  );
};
