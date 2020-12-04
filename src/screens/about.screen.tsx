import { Text, Button, ViewPager } from '@ui-kitten/components';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ScreenContainer from '../components/screen-container.components';

const tabs = [
  {
    icon: '👍',
    title: 'Profissionais confiáveis',
    description:
      'Possuímos uma curadoria eficaz, capaz de selecionar os melhores profissionais do mercado e que etendem diretamente sua demanda.',
  },
  {
    icon: '💸',
    title: 'Cabe no seu orçamento',
    description:
      'Não importa se é um site simples ou um até grande projeto, nós todas várias opções para que você consiga realizar seus planos.',
  },
  {
    icon: '💳',
    title: 'Pague com segurança',
    description:
      'Oferecemos meio de pagamentos seguros, para que você fique tranquilo na hora de transferir seu dinheiro.',
  },
];

export default function AboutScreen() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <ScreenContainer>
      <ViewPager
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
      >
        {tabs.map((tab, index) => (
          <View style={styles.tab} key={`tab-${index}`}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{tab.icon}</Text>
            </View>
            <Text style={styles.title}>{tab.title}</Text>
            <Text style={styles.description}>{tab.description}</Text>
          </View>
        ))}
      </ViewPager>
      <View style={styles.indicators}>
        {tabs.map((tab, index) => (
          <View
            key={`indicator-${index}`}
            style={
              index === selectedTab
                ? [styles.indicator, styles.indicatorSelected]
                : styles.indicator
            }
          />
        ))}
      </View>
      <Button
        style={styles.button}
        disabled={selectedTab !== tabs.length - 1}
        onPress={() => {}}
      >
        Vamos lá
      </Button>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  tab: {
    justifyContent: 'center',
    padding: 32,
  },
  iconContainer: {
    backgroundColor: '#3D67FDAA',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 32,
    marginBottom: 48,
  },
  icon: {
    fontSize: 32,
  },
  title: {
    marginBottom: 28,
    fontSize: 28,
    fontWeight: '700',
  },
  description: {
    marginBottom: 8,
    fontSize: 18,
  },
  indicators: {
    flexDirection: 'row',
    marginHorizontal: 32,
  },
  indicator: {
    borderRadius: 80,
    width: 10,
    height: 10,
    backgroundColor: '#ddd',
    marginRight: 8,
  },
  indicatorSelected: {
    backgroundColor: '#3D67FDAA',
  },
  button: {
    position: 'absolute',
    bottom: '7.5%',
    right: 32,
  },
});
