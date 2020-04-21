import React from 'react';
import {Divider} from '@ui-kitten/components';

import BaseLayout from 'components/base-layout';

export default function SignInScreen({navigation}) {
  return (
    <BaseLayout
      leftNavigationAction="Welcome"
      rightNavigationAction="Welcome"
      title={'Ingresa'}
      navigation={navigation}>
      <Divider />
    </BaseLayout>
  );
}
