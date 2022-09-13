import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../themes';

export function Botao() {
  return (
    <TouchableOpacity
      style={styles.botao}
      activeOpacity={.8}
    >
      <Text style={styles.textoBotao}>
        Comprar
      </Text>

      <Feather
        name="shopping-cart"
        size={24}
        color={theme.colors.white}
      />
    </TouchableOpacity>
  );
}