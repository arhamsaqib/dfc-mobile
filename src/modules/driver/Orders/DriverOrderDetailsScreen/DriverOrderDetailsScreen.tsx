import React from 'react';
import {ScreenWrapper} from '@src/components/ScreenWrapper';
import {Text} from '@src/core/Text';
import {Margin} from '@src/components/Margin';
import {Collapsible} from '@src/components/Collapsible';
import {View} from '@src/core/View';
import {Theme} from '@src/constants/colors';
import {Badge} from '@src/components/Badge';
import {Button} from '@src/core/Button';
import {Card} from '@src/components/Card';
import {appStyle} from '@src/constants/styles';
import {RowItem} from '@src/components/RowItem';
import {OrderTaskItem} from './components/OrderTaskItem';

const AddressItem = () => {
  return (
    <Card style={{width: '100%', marginTop: 10}}>
      <RowItem
        title="Pickup Location"
        titleIcon={{
          type: 'ion',
          name: 'pin-outline',
          color: Theme.success_bright,
        }}
      />
      <Text style={{alignSelf: 'flex-start', marginLeft: 30}}>
        123 Pickup Street, Munich, Germany
      </Text>
      <RowItem
        title="Delivery Location"
        titleIcon={{
          type: 'ion',
          name: 'pin-outline',
          color: Theme.button_danger,
        }}
      />
      <Text style={{alignSelf: 'flex-start', marginLeft: 30}}>
        123 Pickup Street, Munich, Germany
      </Text>
    </Card>
  );
};

export const DriverOrderDetailsScreen = () => {
  return (
    <ScreenWrapper headerProps={{title: 'Order Details', backButton: true}}>
      <Margin top={10} />
      <View style={{width: '90%', alignSelf: 'center'}}>
        <Card style={{width: '100%'}} noPadding>
          <View
            row
            style={[{width: '90%', alignSelf: 'center', marginVertical: 15}]}>
            <Text style={{fontSize: 18}}>#ORD-2025</Text>
            <Badge text="Pending Pickup" intent="primary" />
          </View>
          <View style={[appStyle.defaultBorder, {width: '100%'}]} />
          <Margin top={5} />
          <Collapsible bordered padding title="Vehicle Details">
            <RowItem title="VIN">1HGCM82633A123456</RowItem>
            <RowItem title="Make & Model">BMW M5 Competition</RowItem>
            <RowItem title="Mileage">1700 km</RowItem>
          </Collapsible>
          <View style={[appStyle.defaultBorder, {width: '100%'}]} />
          <Collapsible bordered padding title="Seller Details">
            <RowItem title="Name">John Sturgis</RowItem>
            <RowItem title="Email">johnsturgis112@gmail.com</RowItem>
            <RowItem title="Phone">06171 86181</RowItem>
            <RowItem title="Location">Oberursel, Germany</RowItem>
          </Collapsible>
          <View style={[appStyle.defaultBorder, {width: '100%'}]} />
          <Collapsible bordered padding title="Buyer Details" bottomRadius={12}>
            <RowItem title="Name">Test Buyer</RowItem>
            <RowItem title="Email">Testbuyer45@gmail.com</RowItem>
            <RowItem title="Phone">234234222</RowItem>
            <RowItem title="Location">Helsinki, Finland</RowItem>
          </Collapsible>
        </Card>
        <AddressItem />
        <Card style={{width: '100%', marginTop: 10}}>
          <Text style={{fontWeight: '500', alignSelf: 'flex-start'}}>
            Tasks
          </Text>
          <OrderTaskItem status="completed" title="Vehicle Inspection" />
          <OrderTaskItem
            status="progress"
            title="Upload Loading Images"
            action={{title: 'Upload', type: 'button'}}
          />
          <OrderTaskItem
            status="pending"
            title="Delivery Confirmation"
            action={{title: 'inspectionform.pdf', type: 'link'}}
          />
        </Card>
      </View>
    </ScreenWrapper>
  );
};
