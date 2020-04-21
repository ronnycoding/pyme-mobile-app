import React from 'react';
import {StoreProvider} from 'easy-peasy';
import {PersistGate} from 'redux-persist/integration/react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import RootNavigator from 'navigators/root';
import {store, persistor} from 'state';
import appTheme from 'theme';
// import customMapping from 'theme/custom-mapping';

const theme = {...lightTheme, ...appTheme};

export default function Provider({children}) {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationProvider mapping={mapping} theme={theme}>
            {children}
          </ApplicationProvider>
        </PersistGate>
      </StoreProvider>
    </>
  );
}
