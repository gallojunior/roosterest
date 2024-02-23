import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { theme } from '../../theme';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.white,
    fontSize: 24,
    fontFamily: theme.fontFamily.bold
  }
});