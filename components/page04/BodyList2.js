import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function List2(props) {
    const navigation = useNavigation();
    return (
        <View style={{ marginLeft: 20 }}>
            <View style={{ marginLeft: 20 , marginTop:20}}>
                <Text style={{ fontSize: 18, color: "black" }}>Your Email</Text>
            </View>
            <View style={{  marginLeft: 20 , marginTop:10 ,borderBottomWidth:1.5, borderColor:"pink" ,marginEnd:70}}>
                <TextInput value={props.item.title} placeholder="What's in your email? " onChangeText={(new_title2) => props.onUpdate2(new_title2, props.item.id)} />
            </View>
            <View style={{ marginLeft: 20 , marginTop:20}}>
                <Text style={{ fontSize: 18, color: "black" }}>Your PhoneNumber</Text>
            </View>
            <View style={{  marginLeft: 20 , marginTop:10 ,borderBottomWidth:1.5, borderColor:"pink" ,marginEnd:70}}>
                <TextInput value={props.item.title} placeholder="What's in your phonenumber? " onChangeText={(new_title3) => props.onUpdate3(new_title3, props.item.id)} />
            </View>
            {/* <TouchableOpacity style={{ flex: 1 }} onPress={() => props.onDelete(props.item.id)} > */}
                {/* <FontAwesome name="trash" size={23} /> */}
            {/* </TouchableOpacity> */}
            {/* <View style={{ width: 150, height: 50, borderRadius: 5 ,marginHorizontal:20,marginVertical:30 }} >
                <Button title="Save" onPress={() => props.save(props.item.id)} color="#F7418F"  />
            </View> */}
        </View>
    );
}