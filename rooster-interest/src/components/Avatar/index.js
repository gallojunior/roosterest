import { Image } from 'react-native';
import { styles } from './styles';

export default function Avatar({ selected, imageUrl }) {
  const imageSource = imageUrl ? { uri: imageUrl } : require('../../../assets/icon.png');
  return (
    <Image
      style={[styles.image, selected && styles.selected]}
      source={imageSource}
    />
  )
}