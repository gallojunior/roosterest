import React from 'react';
import { FlatList } from 'react-native';

import { styles } from './styles';
import Filter from '../Filter';

export default function Filters({ filters, selected, onChange }) {
  return <FlatList
    data={filters}
    keyExtractor={item => item}
    renderItem={({ item }) => (
      <Filter
        title={item}
        selected={item == selected}
        onPress={() => onChange(item)}
      />
    )}
    horizontal
    style={styles.list}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.content}
  />
}