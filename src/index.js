import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
// import SplashScreen from 'react-native-splash-screen';

import Providers from 'providers';
import RootNavigator from 'navigators/root';

import {STORAGE_PERSISTENCE_KEY} from 'utils/constants';
import configureMoment from 'config/moment';
import configureYellowBox from 'config/yellow-box';

configureMoment();
configureYellowBox();

export default function App() {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  const persistNavigationState = async (navState) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_PERSISTENCE_KEY,
        JSON.stringify(navState),
      );
    } catch (err) {
      // handle the error according to your needs
    }
  };
  const loadNavigationState = async () => {
    const jsonString = await AsyncStorage.getItem(STORAGE_PERSISTENCE_KEY);
    return JSON.parse(jsonString);
  };

  return (
    <Providers>
      <RootNavigator
        persistNavigationState={persistNavigationState}
        loadNavigationState={loadNavigationState}
      />
    </Providers>
  );
}
