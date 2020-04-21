import {createStackNavigator} from 'react-navigation-stack';

import SignInScreen from 'screens/sign-in';
import SignUpScreen from 'screens/sign-up';
import ForgotPasswordScreen from 'screens/forgot-password';

export default createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
  ForgotPassword: ForgotPasswordScreen,
});
