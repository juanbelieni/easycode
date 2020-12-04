import { useRoute } from '@react-navigation/native';
import { Text, Spinner, Icon } from '@ui-kitten/components';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ScreenContainer from '../components/screen-container.components';
import { getProfessionals } from '../services/airtable.service';

interface Professional {
  id: string;
  name: string;
  phone: string;
  city: string;
}

export default function FilterScreen() {
  const [professionals, setProfessionals] = useState<Professional[]>();
  const params = useRoute().params as { name: string };

  useEffect(() => {
    getProfessionals(params.name).then(setProfessionals);
  }, []);

  return (
    <ScreenContainer>
      <ScrollView>
        <Text style={styles.title}>{params.name}</Text>

        {professionals ? (
          professionals.map((professional) => (
            <View key={professional.id} style={styles.professional}>
              <Text style={styles.professionalName}>{professional.name}</Text>
              <Text style={styles.professionalPhone}>{professional.phone}</Text>
              <Text style={styles.professionalCity}>{professional.city}</Text>
            </View>
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
  professional: {
    backgroundColor: '#3D67FDAA',
    marginHorizontal: 32,
    marginVertical: 16,
    borderRadius: 8,
    padding: 16,
  },
  professionalName: {
    marginBottom: 8,
    fontSize: 20,
    fontWeight: '700',
  },
  professionalPhone: {
    fontSize: 14,
    fontWeight: '600',
  },
  professionalCity: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  spinnerContainer: {
    alignSelf: 'center',
    marginTop: 32,
  },
});
