// @flow

import {
  createStackNavigator,
  type NavigationState,
  type NavigationNavigator,
  type NavigationRouteConfigMap,
} from 'react-navigation';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Routes } from '@kiwicom/margarita-navigation';

import {
  SearchScreen,
  ResultsScreen,
  ResultDetailScreen,
  PassengerFormScreen,
  PaymentScreen,
} from '../screens';

type NavigationOptions = {};
type NavigationProps = {};

const StackNavigator: NavigationNavigator<
  NavigationState,
  NavigationOptions,
  NavigationProps,
> = createStackNavigator(
  ({
    [Routes.SEARCH]: {
      screen: SearchScreen,
      navigationOptions: {
        headerTruncatedBackTitle: null,
      },
    },
    [Routes.RESULTS]: {
      screen: ResultsScreen,
      navigationOptions: {
        headerTintColor: defaultTokens.paletteProductNormal,
        headerTitleStyle: { color: defaultTokens.colorTextPrimary },
        headerTransparent: true,
      },
    },
    [Routes.RESULT_DETAIL]: {
      screen: ResultDetailScreen,
      navigationOptions: {
        title: 'My Booking',
      },
    },
    [Routes.PAYMENT]: {
      screen: PaymentScreen,
      navigationOptions: {
        title: 'Payment',
      },
    },
    [Routes.PASSENGER_FORM]: {
      screen: PassengerFormScreen,
      navigationOptions: {
        title: 'Edit Passenger',
      },
    },
  }: NavigationRouteConfigMap),
  {
    defaultNavigationOptions: {
      headerTintColor: defaultTokens.paletteProductNormal,
    },
  },
);

export default StackNavigator;
