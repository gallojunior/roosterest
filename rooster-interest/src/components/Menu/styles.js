import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: { },
  content: {
    height: 300,
    width: "100%",
    backgroundColor: theme.colors.white,
  },
  title: {
    color: theme.colors.white,
    fontSize: 18,
    fontFamily: theme.fontFamily.medium,
  },
});