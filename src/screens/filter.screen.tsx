import { useNavigation } from '@react-navigation/native';
import { Text, Spinner } from '@ui-kitten/components';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';

import ScreenContainer from '../components/screen-container.components';
import { getServices } from '../services/airtable.service';

interface Service {
  id: string;
  name: string;
  category: string;
}

export default function ServiceScreen() {
  const [services, setServices] = useState<Service[]>();
  const navigation = useNavigation();

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  return (
    <ScreenContainer>
      <ScrollView>
        <Text style={styles.title}>Filtrar por serviço</Text>

        {services ? (
          services.map((service) => (
            <RectButton
              key={service.id}
              style={styles.service}
              onPress={() =>
                navigation.navigate('Service', {
                  name: service.name,
                })
              }
            >
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceCategory}>{service.category}</Text>
            </RectButton>
          ))
        ) : (
          <View style={styles.spinnerContainer}>
            <Spinner size="giant" />
          </View>
        )}
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: '700',
    margin: 32,
  },
  service: {
    backgroundColor: '#3D67FDAA',
    marginHorizontal: 32,
    marginVertical: 16,
    borderRadius: 8,
    padding: 16,
  },
  serviceName: {
    marginBottom: 8,
    fontSize: 20,
    fontWeight: '700',
  },

  serviceCategory: {
    fontSize: 14,
    fontWeight: '600',
  },
  spinnerContainer: {
    alignSelf: 'center',
    marginTop: 32,
  },
});
