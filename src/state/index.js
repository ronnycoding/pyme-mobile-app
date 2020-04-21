/* @flow */
import {createStore} from 'easy-peasy';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {STORAGE_PERSISTENCE_KEY} from 'utils/constants';

// import flags from './flags';
import currentUser from './current-user';
// import promos from './promos';
// import stores from './stores';
// import storeCategories from './store-categories';
// import storeSubcategories from './store-subcategories';
// import products from './products';
// import currentOrder from './current-order';
// import currentErrand from './current-errand';
// import orders from './orders';

const store = createStore(
  {
    // flags,
    currentUser,
    // promos,
    // stores,
    // storeCategories,
    // storeSubcategories,
    // products,
    // currentOrder,
    // currentErrand,
    // orders,
  },
  {
    reducerEnhancer: (reducer) =>
      persistReducer(
        {
          key: STORAGE_PERSISTENCE_KEY,
          storage: AsyncStorage,
        },
        reducer,
      ),
  },
);

const persistor = persistStore(store);

function resetStores() {
  Object.values(store.dispatch).forEach(
    (storeAction) => storeAction.resetStore && storeAction.resetStore(),
  );
}

export {store, persistor, resetStores};
