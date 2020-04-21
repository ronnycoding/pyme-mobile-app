import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from 'screens/home';
import StoreCategoriesScreen from 'screens/store-categories';
import StoreSubcategoriesScreen from 'screens/store-subcategories';
import StoreListScreen from 'screens/store-list';
import StoreDetailScreen from 'screens/store-detail';
import ProfileScreen from 'screens/profile';
import OrderScreen from 'screens/order';
import OrdersScreen from 'screens/orders';

export default createStackNavigator({
  Home: HomeScreen,
  StoreCategories: StoreCategoriesScreen,
  StoreDetail: StoreDetailScreen,
  StoreList: StoreListScreen,
  StoreSubcategories: StoreSubcategoriesScreen,
  Profile: ProfileScreen,
  Order: OrderScreen,
  Orders: OrdersScreen,
});
