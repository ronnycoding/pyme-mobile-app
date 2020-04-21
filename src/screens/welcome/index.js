import React from 'react';
import {View} from 'react-native';
import {Button} from '@ui-kitten/components';

import BaseLayout from 'components/base-layout';

export default function WelcomeScreen({navigation}) {
  const handleGoToLogin = () => {
    navigation.navigate('SignIn');
  };

  return (
    <BaseLayout>
      <View>
        <Button
          size={'medium'}
          onPress={handleGoToLogin}
          onLongPress={handleGoToLogin}>
          login
        </Button>
      </View>
    </BaseLayout>
  );
}
