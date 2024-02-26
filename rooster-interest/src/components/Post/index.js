import { View, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../theme';
import { useEffect, useState } from 'react';

export function Post({ post }) {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    if (post.image) {
      Image.getSize(post.image, (width, height) => {
        setAspectRatio(width / height);
      });
    }
  }, [])

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: post.image }}
        style={[styles.image, {aspectRatio}]}
      />

      <View style={styles.footer}>
        <Text style={styles.title}>{post.title}</Text>
        <Feather name='more-horizontal' size={16} color={theme.colors.white} />
      </View>
    </View>
  );
}