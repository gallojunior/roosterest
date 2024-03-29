import React from 'react'
import { Text, Pressable } from 'react-native'

import { styles } from './styles';

export function Filter({ title, selected, onPress }) {
  return <Pressable style={[styles.pressable, selected && styles.selected]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </Pressable>
}