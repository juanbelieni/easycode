import { Text, Button } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import ScreenContainer from '../components/screen-container.components';

export default function LandingScreen() {
  return (
    <ScreenContainer>
      <View style={styles.greetings}>
        <Text style={styles.text}>Olá, nós somos a</Text>
        <View style={styles.companyName}>
          <Text style={styles.companyNameText}>easy</Text>
          <Text style={styles.companyNameTextInBlue}>code</Text>
        </View>
        <Text style={styles.text}>o novo app de profissionasis de TI</Text>
      </View>
      <Button appearance="outline" style={styles.button}>
        Começar
      </Button>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  greetings: {
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
  },
  companyName: {
    flexDirection: 'row',
    marginBottom: 12,
    marginTop: 4,
  },
  companyNameText: {
    fontSize: 48,
    fontWeight: '700',
  },
  companyNameTextInBlue: {
    fontSize: 48,
    fontWeight: '700',
    color: '#3D67FD',
  },
  button: {
    position: 'absolute',
    bottom: '7.5%',
    alignSelf: 'center',
  },
});
