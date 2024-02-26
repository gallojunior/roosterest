import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxIcon: {
    backgroundColor: theme.colors.gray[700],
    padding: 24,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
  },
  icon: {
    color: theme.colors.white,
    fontSize: 32,
  },
  text: {
    color: theme.colors.white,
    fontSize: 14,
    fontFamily: theme.fontFamily.medium,
    marginTop: 10,
  },
})