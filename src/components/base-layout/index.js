import React from 'react';
import {StatusBar, SafeAreaView, Platform} from 'react-native';
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
  Layout,
} from '@ui-kitten/components';

const BackIcon = (style) => <Icon {...style} name="arrow-back" />;
const ForwardIcon = (style) => <Icon {...style} name="arrow-forward" />;

export default function BaseLayout({
  children,
  navigation,
  leftNavigationAction = '',
  rightNavigationAction = '',
  title = '',
  alignment = 'center',
  backgroundColor = '#ffffff',
}) {
  const navigateLeft = () => {
    if (leftNavigationAction) {
      navigation.navigate(leftNavigationAction);
    }
  };

  const navigateRight = () => {
    if (rightNavigationAction) {
      navigation.navigate(rightNavigationAction);
    }
  };

  const LeftAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateLeft} />
  );

  const RightAction = () => (
    <TopNavigationAction icon={ForwardIcon} onPress={navigateRight} />
  );

  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      <TopNavigation
        title={title}
        alignment={alignment}
        leftControl={leftNavigationAction ? LeftAction() : null}
        rightControls={rightNavigationAction ? RightAction() : null}
      />
      <SafeAreaView>
        <Layout style={{flex: 1, backgroundColor}}>{children}</Layout>
      </SafeAreaView>
    </>
  );
}
