import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const AUTHOR_USERNAME = "PrettyKitten";
const AUTHOR_IMAGE_URL = "https://i.pinimg.com/564x/c5/3b/5b/c53b5b3465aa45fcf3d2ee1d3132fd51.jpg";

export default function AddPost({ navigation }) {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [likes, setLikes] = useState('0');

  const handleSubmit = async () => {
    const newPost = {
      name: title,
      detail: detail,
      imageUrl: imageUrl,
      username: AUTHOR_USERNAME,
      likes: Number(likes),
      authorImage: AUTHOR_IMAGE_URL,
    };

    try {
      const response = await fetch('http://192.168.1.16:8080/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        alert('Post added successfully');
        navigation.goBack();
      } else {
        alert('Failed to add post');
      }
    } catch (error) {
      console.error(error);
      alert('Error adding post');
    }
  };

  return (
    <View style={{ marginLeft: 20 , marginTop:20}}>
      <View style={{ flexDirection: "row", padding: 10 }} >
        <MaterialIcons name="arrow-back-ios-new" size={24} color="black" marginLeft={-20} onPress={() => { navigation.navigate("Page03"); }} />
        <Text style={{ fontSize: 18, color: "black", marginLeft: 20 }}>Back</Text>
      </View>
      <View style={{ flexDirection: "row", padding: 10 }} >
        <Text style={{ fontSize: 24, color: "black", marginLeft: 10 }}>Add Your Post </Text>
      </View>
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <Text style={{}}>Title </Text>
      </View>
      <View style={{ marginLeft: 20, marginTop: 10, borderBottomWidth: 1.5, borderColor: "pink", marginEnd: 70 }}>
        <TextInput
          style={{}}
          onChangeText={(text) => setTitle((text))}
          value={title}
          placeholder= "Enter title"
        />
      </View>
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <Text style={{}}>Detail </Text>
      </View>
      <View style={{ marginLeft: 20, marginTop: 10, borderBottomWidth: 1.5, borderColor: "pink", marginEnd: 70 }}>
        <TextInput
          style={{}}
          onChangeText={(text) => setDetail((text))}
          value={detail}
          placeholder= "Enter detail"
        />
      </View>
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <Text style={{}}>Image URL : </Text>
      </View>
      <View style={{ marginLeft: 20, marginTop: 10, borderBottomWidth: 1.5, borderColor: "pink", marginEnd: 70 }}>
        <TextInput
          onChangeText={(text) => setImageUrl((text))}
          value={imageUrl}
          placeholder= "Enter image URL"
        />
      </View>
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <Text style={{}}>Likes : </Text>
      </View>
      <View style={{ marginLeft: 20, marginTop: 10, borderBottomWidth: 1.5, borderColor: "pink", marginEnd: 70 }}>
        <TextInput
          onChangeText={(text) => setLikes((text))}
          value={likes}
          keyboardType="numeric"
        />
      </View>
      <View style={{ width: 150, height: 50, borderRadius: 5 ,marginHorizontal:20,marginVertical:30 }}>
        <Button title="Add Post" onPress={handleSubmit} color="#F7418F" />
      </View>

    </View>
  );
}
