import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Bottom from '../../components/page01/Bottom01';


export default function PostDetail({ route }) {
  const { postId } = route.params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://192.168.1.16:8080/api/home/${postId}/?format=json`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));
  }, [postId]);

  const navigation = useNavigation();

  if (!post) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: "row", padding: 10, marginLeft: -10, justifyContent: "space-between" }}>
          <MaterialIcons name="arrow-back-ios-new" size={24} color="black" onPress={() => navigation.navigate("Page01")} />
          <Text style={{ fontSize: 18, color: "black", marginRight: 10 }}>@{post.username}</Text>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>
        <Image style={styles.image} source={{ uri: post.imageUrl }} />
        <Text style={styles.title}>{post.name}</Text>
        <Text style={styles.username}>Posted by: {post.username}</Text>
        <Text style={styles.detail}>{post.detail}</Text>
        <Text style={styles.likes}>{post.likes} likes</Text>
      </ScrollView>
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

