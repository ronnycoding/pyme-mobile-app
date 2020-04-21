import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import createFluidNavigator from 'react-navigation-fluid-transitions';

import WelcomeScreen from 'screens/welcome';
import GeneralErrorScreen from 'screens/general-error';

import AuthStack from '../auth';
import AppStack from '../app';
import NavigationService from '../navigation-service';

const Navigator = createSwitchNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    App: AppStack,
    Auth: AuthStack,
    GeneralErrorScreen: {
      screen: GeneralErrorScreen,
    },
  },
  {
    initialRouteName: 'Welcome',
  },
);

function RootNavigator({navigation}) {
  return (
    <Navigator
      ref={(navigatorRef) =>
        NavigationService.setTopLevelNavigator(navigatorRef)
      }
      navigation={navigation}
    />
  );
}

RootNavigator.router = Navigator.router;

export default createAppContainer(RootNavigator);
