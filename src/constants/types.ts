import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {Route} from 'react-native';

export type NavigationType = NavigationProp<ParamListBase> &
  NavWithPush &
  NavWithReplace;

export interface NavWithReplace {
  replace: (name: string, params?: object) => void;
}

export interface NavWithPush {
  push: (name: string, params?: object) => void;
}

export type Navigation = NavigationType & NavWithReplace & NavWithPush;

export type RouteType = RouteProp<Route, string>;

export interface ScreenProps {
  navigation: Navigation;
  route: RouteType;
}
