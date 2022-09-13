import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Text } from 'react-native'

import { styles } from './styles'
import { theme } from '../../themes'

export function Etiqueta() {
  return (
    <View style={styles.container}>
      <Feather
        name="tag"
        color={theme.colors.white}
        size={26}
      />

      <View style={styles.info}>
        <Text style={styles.texto}>
          Calorias
        </Text>

        <Text style={styles.valor}>
          430
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.texto}>
          Peso
        </Text>

        <Text style={styles.valor}>
          190g
        </Text>
      </View>
    </View >
  );
}