import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  pressable: {
    paddingBottom: 5
  },
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fontFamily.medium,
  },
  selected: {
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.white
  }
});