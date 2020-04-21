import React from 'react';
import {View, Text} from 'react-native';

import BaseLayout from 'components/base-layout';

export default function HomeScreen() {
  return (
    <BaseLayout>
      <View>
        <Text>{'HomeScreen'}</Text>
      </View>
    </BaseLayout>
  );
}
