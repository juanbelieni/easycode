import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/routes';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <StatusBar style="light" />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Routes />
    </ApplicationProvider>
  </>
);
