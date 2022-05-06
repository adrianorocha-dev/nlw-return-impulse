import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProperties } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProperties {
  isLoading: boolean;
}

export function Button({ isLoading, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {isLoading ? (
        <ActivityIndicator
          color={theme.colors.text_on_brand_color}
        />
      ) : (
        <Text style={styles.title}>
          Enviar feedback
        </Text>
      )}
    </TouchableOpacity>
  );
}