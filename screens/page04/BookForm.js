import React, { useEffect,  useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, TextInput, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import BookStorage from "../../storages/BookStorage";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage from the new package
import BookService from "../../service/BookService";

export default function BookForm() {  
  const navigation = useNavigation();
  const route = useRoute();
  const [id, setId] = useState(route.params.id);
  const [key, setKey] = useState("_" + Math.random().toString(36).substring(2, 9));
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  
  const onLoad = async () => {
    const { id } = route.params;
    if (id) {
      //let book = await BookStorage.readItemDetail(id);  
      let book = await BookService.getItemDetail({"id":id});
      setKey(book.id);
      setName(book.name);
      setPrice(book.price.toString());
      setImage(book.image);
    }
    navigation.setOptions({ title: (id ? "edit" : "create") });    
  };

  useEffect(() => { onLoad(); }, []);

  const saveBook = async () => {
    let new_data = { id: key, name: name, price: price, image: image };
    // Save data to AsyncStorage
    try {
      await AsyncStorage.setItem('bookData', JSON.stringify(new_data));
      navigation.navigate("Book");
    } catch (error) {
      console.error('Error saving data: ', error);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        <Text>ชื่อหนังสือ</Text>
        <TextInput placeholder="Enter name ..." value={name} onChangeText={(text) => setName(text)} />
        <Text>ราคา</Text>
        <TextInput placeholder="Enter price ..." value={price} onChangeText={(text) => setPrice(text)} />
        <Text>ลิงค์รูปภาพ</Text>
        <TextInput placeholder="Enter image URL ..." value={image} onChangeText={(text) => setImage(text)} />
      </ScrollView>
      <Button title="SAVE" color="tomato" onPress={saveBook} />
    </KeyboardAvoidingView>
  );
}
