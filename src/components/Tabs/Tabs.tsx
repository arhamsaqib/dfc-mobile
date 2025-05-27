import {Theme} from '@src/constants/colors';
import {Text} from '@src/core/Text';
import {View} from '@src/core/View';
import React, {useEffect, useMemo} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

interface TabItemRenderProps {
  width: number;
  name: string;
  isActive?: boolean;
  onPress?: () => void;
}

const TabItem = (props: TabItemRenderProps) => {
  const {width, isActive, name, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.tabItem,
        {width},
        isActive && {borderBottomWidth: 2, borderBottomColor: Theme.primary},
      ]}>
      <Text style={[isActive && {color: Theme.primary}]}>{name}</Text>
    </TouchableOpacity>
  );
};

export interface TabItemProps {
  name: string;
  component?: any;
  props?: any;
  id?: any;
}

export interface TabProps {
  items: TabItemProps[];
  onChange?: (item: TabItemProps) => void;
}

export const Tabs = (props: TabProps) => {
  const {items = [], onChange} = props;
  const dimentions = useWindowDimensions();
  const [active, setActive] = React.useState<TabItemProps | null>(null);

  const tabWidth = useMemo(() => {
    if (items.length <= 4) {
      return dimentions.width / items.length;
    }
    return dimentions.width / 4;
  }, [items.length, dimentions.width]);

  useEffect(() => {
    if (items.length > 0) {
      setActive({...items[0], id: 0});
    }
  }, [items]);

  return (
    <View style={styles.main}>
      <View style={styles.tabContiner}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <TabItem
              key={index}
              name={item.name}
              width={tabWidth}
              isActive={index === active?.id}
              onPress={() => {
                setActive({...item, id: index});
                onChange && onChange(item);
              }}
            />
          ))}
        </ScrollView>
      </View>
      <View style={{flex: 1}}>
        {active && <active.component {...active.props} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flex: 1,
  },
  tabContiner: {
    height: 45,
    borderTopWidth: 0.4,
    width: '100%',
    backgroundColor: Theme.white,
  },
  tabItem: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
