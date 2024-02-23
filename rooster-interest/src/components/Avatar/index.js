import { Image } from 'react-native';
import { styles } from './styles';

export default function Avatar({ imageUrl }) {
	const imageSource = imageUrl ? { uri: imageUrl } : require('../../../assets/icon.png');
	return (
		<Image style={styles.image} source={imageSource} />
	)
}