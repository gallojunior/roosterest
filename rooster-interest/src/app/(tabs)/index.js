import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { theme } from '../../theme';
import Filters from '../../components/Filters';
import { FILTERS } from '../../utils/filters';

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <View style={styles.container}>
      <Filters filters={FILTERS} selected={filter} onChange={setFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    padding: 12,
    paddingTop: 52,
  },
});