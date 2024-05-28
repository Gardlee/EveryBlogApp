import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Bottom from '../../components/page01/Bottom01';

export default function PostDetail({ route }) {
  const { postId } = route.params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://192.168.1.16:8081/api/${postId}/?format=json`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [postId]);

  if (!post) {
    return <Text>Loading...</Text>;
  }
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", padding: 10, marginLeft: -10, justifyContent: "space-between" }} >
          <MaterialIcons name="arrow-back-ios-new" size={24} color="black" onPress={() => { navigation.navigate("Page03"); }} />
          <Text style={{ fontSize: 18, color: "black", marginRight: 10 }}>@PrettyKitten</Text>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>
        <Image style={styles.image} source={{ uri: post.imageUrl }} />
        <Text style={styles.title}>{post.name}</Text>
        <Text style={styles.username}>Posted by: PrettyKitten</Text>
        <Text style={styles.detail}>{post.detail}</Text>
        <Text style={styles.likes}>{post.likes} likes</Text>
      </View>
      <Bottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 500,
    marginVertical: 15,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  username: {
    fontSize: 18,
    marginBottom: 8,
  },
  detail: {
    fontSize: 16,
    marginBottom: 16,
  },
  likes: {
    fontSize: 14,
    color: 'grey',
  },
});
