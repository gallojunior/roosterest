import { forwardRef } from 'react';
import { View, Text } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { FontAwesome } from "@expo/vector-icons";

import { styles } from './styles';
import { MenuButton } from '../MenuButton';

export const Menu = forwardRef(function Menu(props, ref) {
  const { onClose, ...otherProps } = props;
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Comece a criar agora</Text>
          <FontAwesome name="close" size={24} onPress={onClose} style={styles.close}/>
        </View>
        <View style={styles.options}>
          <MenuButton title="Pin" icon="thumb-tack" onClick={() => console.info("Pin")} />
          <MenuButton title="Colagem" icon="paste" onClick={() => console.info("Colagem")}/>
          <MenuButton title="Pasta" icon="folder" onClick={() => console.info("Pasta")}/>
        </View>
      </View>
    </BottomSheet>
  )
});