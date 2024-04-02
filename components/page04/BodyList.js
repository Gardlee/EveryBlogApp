import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function List1(props) {
    const navigation = useNavigation();
    //return (
    <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 25,
            paddingVertical: 10,
        }}>
        <View>
            <Text style={{ fontSize: 20, color: "black" }}>Information</Text>
        </View>
        <View style={{ flex: 12 }}>
            <TextInput value={props.item.title} placeholder="What's in your mind? " onChangeText={(new_title) => props.onUpdate(new_title, props.item.id)} />
        </View>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => props.onDelete(props.item.id)} >
            <FontAwesome name="trash" size={23} />
        </TouchableOpacity>
    </View>
    //);
    //}
    return (
        <View style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: "row", padding: 10 }} >
                <Text style={{ fontSize: 22, color: "black", shadowColor:"#F7418F" }}>Your Email</Text>
            </View>
            <View style={{ marginLeft: 20 , marginTop:10 ,borderBottomWidth:1.5, borderColor:"pink" ,marginEnd:70}}>
                <TextInput value={props.item.title} placeholder="Please Enter Your Email " onChangeText={(new_title) => props.onUpdate(new_title, props.item.id)} />
            </View>
            {/* <TouchableOpacity style={{ flex: 1 }} onPress={() => props.onDelete(props.item.id)} > 
                <FontAwesome name="trash" size={23} />
              </TouchableOpacity>  */}
            <View style={{ width: 150, height: 50, borderRadius: 5 ,marginHorizontal:20,marginVertical:30 }} >
                <Button title="send" onPress={() => navigation.navigate("Page03") } color="#F7418F"  />
            </View>
        </View>
    );
}
