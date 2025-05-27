import {ScreenWrapper} from '@src/components/ScreenWrapper';
import {TabItemProps, Tabs} from '@src/components/Tabs';
import React, {useMemo} from 'react';
import {DriverOrdersTab} from './Tabs/DriverOrdersTab';

export const DriverOrdersScreen = () => {
  const tabItems = useMemo(
    () => [
      {name: 'Active', component: DriverOrdersTab, props: {isCompleted: false}},
      {
        name: 'Completed',
        component: DriverOrdersTab,
        props: {isCompleted: true},
      },
    ],
    [],
  ) as TabItemProps[];

  return (
    <ScreenWrapper headerProps={{title: 'Orders'}} scrollable={false}>
      <Tabs items={tabItems} />
    </ScreenWrapper>
  );
};
