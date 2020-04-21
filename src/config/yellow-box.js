import {YellowBox} from 'react-native';

export default function configureYellowBox() {
  YellowBox.ignoreWarnings([
    'unknown call: "relay:check',
    'Setting a timer for a long period of time',
    'Importing the stack Transitioner directly from react-navigation is now deprecated.',
    'Require cycle: node_modules/@react-navigation',
  ]);
}
