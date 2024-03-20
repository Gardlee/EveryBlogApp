import { Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

export default function Head01() {
    return (
        <View >
            <View style={{ flexDirection: "row",padding: 10 ,justifyContent:"space-between",borderBottomWidth:0.5}} >
                <Ionicons name="sparkles" size={24} color="black"/>
                <Text style={{ fontSize: 20, color: "black",marginRight:10 }}>Following</Text>
                <Text style={{ fontSize: 20, color: "black",marginLeft:10 }}>For You</Text>
                <Ionicons name="search" size={24} color="black"/>
            </View>
            <View style={{ flexDirection: "row",padding: 10 ,justifyContent:"space-around"}}>
                <Text style={{ fontSize: 15, color: "gray" }}>All</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>Fashoin</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>Beauty</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>Food</Text>
                <Text style={{ fontSize: 15, color: "gray" }}>Travel</Text>

            </View>
        </View>
    );
}