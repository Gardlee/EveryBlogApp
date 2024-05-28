import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Bottom from '../../components/page01/Bottom01';

const AUTHOR_USERNAME = "PrettyKitten";
const AUTHOR_IMAGE_URL = "https://i.pinimg.com/564x/c5/3b/5b/c53b5b3465aa45fcf3d2ee1d3132fd51.jpg";

export default function AddPost({ navigation }) {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [likes, setLikes] = useState('');

  const handleSubmit = async () => {
    const newPost = {
      name: title,
      imageUrl: imageUrl,
      username: AUTHOR_USERNAME,
      likes: Number(likes),
      authorImage: AUTHOR_IMAGE_URL,
    };

    try {
      const response = await fetch('http://192.168.1.16:8081/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        alert('Post added successfully');
        navigation.goBack(); // กลับไปยังหน้าที่แล้วหลังจากเพิ่มข้อมูล
      } else {
        alert('Failed to add post');
      }
    } catch (error) {
      console.error(error);
      alert('Error adding post');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={imageUrl}
        onChangeText={setImageUrl}
      />
      <TextInput
        style={styles.input}
        placeholder="Likes"
        value={likes}
        onChangeText={setLikes}
        keyboardType="numeric"
      />
      <Button
        title="Add Post"
        onPress={handleSubmit}
        color="#F7418F" // กำหนดสีของปุ่ม
        style={styles.button} // กำหนดสไตล์เพิ่มเติมให้กับปุ่ม
      />
      <Bottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginTop: 20
  },
  button: {
    marginTop: 20,
    marginLeft: 20,
    //backgroundColor: "#F7418F",
    paddingHorizontal: 20,
    paddingVertical: 10, 
    borderRadius: 5, 
  }
});








