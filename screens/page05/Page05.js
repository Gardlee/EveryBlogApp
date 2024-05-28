import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";
import DataStorage from "../../storages/DataStorage";

export default function Page05() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const load = async () => {
        console.log("load");
        // อ่านข้อมูลจาก AsyncStorage
        const storedData = await DataStorage.readItem();
        // อัปเดตค่าใน useState ด้วยข้อมูลที่อ่านมาจาก AsyncStorage
        setName(storedData.name || '');
        setPhone(storedData.phone || '');
        setEmail(storedData.email || '');
    };

    useEffect(() => { load(); }, []);

    const save = async () => {
        console.log("save");
        // บันทึกข้อมูลที่กรอกลงใน AsyncStorage
        await DataStorage.writeItem({ name, phone, email });
        // อัปเดตค่าใน useState เพื่อให้ข้อมูลที่แสดงอยู่ในช่องที่กรอกข้อมูลอัปเดตด้วย
        setName(name);
        setPhone(phone);
        setEmail(email);
    };
  
    pic = "https://i.pinimg.com/564x/c5/3b/5b/c53b5b3465aa45fcf3d2ee1d3132fd51.jpg"
    

    return (
        <View style={{ marginLeft: 20 , marginTop:20}}>
            <View style={{ flexDirection: "row", padding: 10 }} >
                <MaterialIcons name="arrow-back-ios-new" size={24} color="black" marginLeft={-20} onPress={() => { navigation.navigate("Page03"); }} />
                <Text style={{ fontSize: 18, color: "black", marginLeft: 20 }}>Back</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }} >
                <Text style={{ fontSize: 24, color: "black", marginLeft: 20 }}>Edit Your Profile</Text>
                <FontAwesome name="pencil-square-o" size={24} color="black" marginTop={6} marginLeft={5} />
            </View>
            <View style={{ flexDirection: "row", padding: 10, justifyContent: "center" }} >
                <Image style={{ width: 150, height: 150, borderRadius: 80, marginTop: 5, borderWidth: 3, borderColor: "#F7418F" }} source={{ uri: pic }} />
            </View>
            <View style={{ marginLeft: 20, marginTop: 20 }}>
                <Text style={{}}>Your Name </Text>
            </View>
            <View style={{ marginLeft: 20, marginTop: 10, borderBottomWidth: 1.5, borderColor: "pink", marginEnd: 70 }}>
                <TextInput
                    style={{}}
                    //keyboardType="numeric"
                    onChangeText={(text) => setName((text))}
                    value={name}
                    placeholder= "What's in your name?"
                />
            </View>
            <View style={{ marginLeft: 20, marginTop: 20 }}>
                <Text style={{}}>Your PhoneNumber </Text>
            </View>
            <View style={{ marginLeft: 20, marginTop: 10, borderBottomWidth: 1.5, borderColor: "pink", marginEnd: 70 }}>
                <TextInput
                    style={{}}
                    //keyboardType="numeric"
                    onChangeText={(text) => setPhone((text))}
                    value={phone}
                    placeholder= "What's in your phonenumber?"
                />
            </View>
            <View style={{ marginLeft: 20, marginTop: 20 }}>
                <Text style={{}}>Email : </Text>
            </View>
            <View style={{ marginLeft: 20, marginTop: 10, borderBottomWidth: 1.5, borderColor: "pink", marginEnd: 70 }}>
                <TextInput
                    //keyboardType="numeric"
                    onChangeText={(text) => setEmail((text))}
                    value={email}
                    placeholder= "What's in your email?"
                />
            </View>

            {/* <Text style={{}}>Edit Your Profile </Text>
            <View style={{}}>
                <Text style={{}}>Name : </Text>
                <TextInput
                    style={{}}
                    //keyboardType="numeric"
                    onChangeText={(text) => setName((text))}
                    value={name}
                />
            </View>
            <View style={{}}>
                <Text style={{}}>Age :</Text>
                <TextInput
                    style={{}}
                    //keyboardType="numeric"
                    onChangeText={(text) => setAge((text))}
                    value={age}
                />
            </View>
            <View style={{}}>
                <Text>Email :</Text>
                <TextInput
                    // style={styles.input}
                    //keyboardType="numeric"
                    onChangeText={(text) => setEmail((text))}
                    value={email}
                />
            </View> */}
            <View style={{ width: 150, height: 50, borderRadius: 5 ,marginHorizontal:20,marginVertical:30 }}>
                <Button title="Save" onPress={save} color="#F7418F" />
            </View>

        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         // fontWeight: "bold",
//         marginBottom: 20,
//     },
//     inputContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//         marginBottom: 10,
//     },
//     label: {
//         marginRight: 10,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: "#ccc",
//         padding: 8,
//         flex: 1,
//         marginLeft: 20 ,
//         marginTop:10 ,
//         borderBottomWidth:1.5,
//         borderColor:"pink" ,
//         marginEnd:70
//     },
//     displayContainer: {
//         marginTop: 20,
//     },
//     displayText: {
//         fontSize: 18,
//         marginBottom: 5,
//     },
// });