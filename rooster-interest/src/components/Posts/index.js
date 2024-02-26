import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';

import { Post } from '../Post';

export function Posts({ posts }) {

  function postsByColumn(column) {
    const rest = column === "left" ? 0 : 1;
    return posts.filter((_, index) => index % 2 === rest).map((post) =>
      <Post
        key={post.id}
        post={post}
      />);
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      <View style={styles.container}>
        <View style={styles.column}>{postsByColumn("left")}</View>
        <View style={styles.column}>{postsByColumn("right")}</View>
      </View>
    </ScrollView>
  );
}