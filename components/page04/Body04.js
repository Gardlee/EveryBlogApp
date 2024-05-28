import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import NameStorage from "../../storages/NameStorage";
import EmailStorage from "../../storages/EmailStorage";
import NumberStorage from "../../storages/NumberStorage";

export default function Body04(props) {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [number, setNumber] = useState([]);


    const onLoad = async () => {
        console.log("load");
        let name = await NameStorage.readItems();
        setName(name);
        let email = await EmailStorage.readItems();
        setEmail(email);
        let number = await NumberStorage.readItems();
        setNumber(number);

        console.log(name, email, number);
    };

    useEffect(() => { onLoad(); }, []);

    const save = async () => {
        console.log("save");
        NameStorage.writeItem(name)
        EmailStorage.writeItem(email)
        NumberStorage.writeItem(number);

    };

    return (
        <View style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: "row", padding: 10 }} >
                <Text style={{ fontSize: 22, color: "black", shadowColor: "#F7418F" }}>Information</Text>
            </View>
            <View style={{ marginLeft: 20, marginTop: 20 }}>
                <Text style={{ fontSize: 18, color: "black" }}>Your Name</Text>
            </View>
            <View style={{ marginLeft: 20, marginTop: 10, borderBottomWidth: 1.5, borderColor: "pink", marginEnd: 70 }}>
                <TextInput
                    renderItem={({ item }) => (
                        // <Text>{item.title}</Text>
                        <Body04 item={item} onUpdate1={onUpdate1} save={save} />)}
                    keyboardType="numeric"
                    onChangeText={(text) => setName(parseFloat(text))}
                    value={name.toString()}
                />
            </View>
            <View style={{ marginLeft: 20, marginTop: 20 }}>
                <Text style={{ fontSize: 18, color: "black" }}>Your Email</Text>
            </View>
            <View style={{ marginLeft: 20, marginTop: 10, borderBottomWidth: 1.5, borderColor: "pink", marginEnd: 70 }}>
                <TextInput
                    renderItem={({ item }) => (
                    // <Text>{item.title}</Text>
                    <Body04 item={item} onUpdate2={onUpdate2} save={save} />)}
                    onChangeText={(text) => setName(parseFloat(text))}
                    value={email.toString()}
                />
            </View>
            <View style={{ marginLeft: 20, marginTop: 20 }}>
                <Text style={{ fontSize: 18, color: "black" }}>Your PhoneNumber</Text>
            </View>
            <View style={{ marginLeft: 20, marginTop: 10, borderBottomWidth: 1.5, borderColor: "pink", marginEnd: 70 }}>
                <TextInput
                    onChangeText={(text) => setName(parseFloat(text))}
                    value={number.toString()}
                />
            </View>
            {/* <Text style={styles.title}>Enter Your Details</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Height (cm):</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={(text) => setName(parseFloat(text))}
                    value={name.toString()}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Age:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={(text) => setEmail(parseInt(text))}
                    value={email.toString()}
                />
            </View> */}

            <View style={{ width: 150, height: 50, borderRadius: 5 ,marginHorizontal:20,marginVertical:50 }} >
                <Button title="Save" onPress={ save } color="#F7418F"  />
            </View>

        </View>
    );
}

