import { Layout } from '@ui-kitten/components';
import React, { FC } from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const ScreenContainer: FC<Props> = ({ children, style }) => {
  return (
    <Layout style={styles.layout}>
      <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#151517',
  },
  container: {
    height: '100%',
  },
});

export default ScreenContainer;
