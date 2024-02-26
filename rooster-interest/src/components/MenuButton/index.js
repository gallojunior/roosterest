import { Pressable, View, Text } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

import { styles } from './styles';

export function MenuButton({ title, icon, onClick }) {
  return (
    <Pressable style={styles.container} onPress={onClick}>
      <View style={styles.boxIcon}>
        <FontAwesome name={icon} style={styles.icon} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}