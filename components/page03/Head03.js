import { Button, Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Head03() {
    const navigation = useNavigation();
    return (
        <View >
            <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-between" }} >
                <MaterialIcons name="arrow-back-ios-new" size={24} color="black" onPress={() => { navigation.navigate("Page01"); }} />
                <Text style={{ fontSize: 18, color: "black", marginRight: 10 }}>@PrettyKitten</Text>
                <Entypo name="dots-three-horizontal" size={24} color="black" />
            </View>
            <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-around" }}>
                <Image style={{ width: 100, height: 100, borderRadius: 100 / 2, marginTop: 5, marginLeft: -10 }} source={{ uri: "https://i.pinimg.com/564x/c5/3b/5b/c53b5b3465aa45fcf3d2ee1d3132fd51.jpg" }} />
                <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontSize: 18, color: "black", marginTop: 30 }}>20</Text>
                    <Text style={{ fontSize: 12, color: "gray", marginTop: 10, marginLeft: -15 }}>following</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontSize: 18, color: "black", marginTop: 30 }}>100k</Text>
                    <Text style={{ fontSize: 12, color: "gray", marginTop: 10, marginLeft: -1 }}>follower</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontSize: 18, color: "black", marginTop: 30 }}>220.5k</Text>
                    <Text style={{ fontSize: 12, color: "gray", marginTop: 10, marginLeft: -15 }}>Like and Saves</Text>
                </View>
            </View>
            <View style={{ flexDirection: "column", padding: 10, justifyContent: "space-around", marginLeft: 20 }}>
                <Text style={{ fontSize: 20, color: "black", marginTop: -10 }}>PrettyKitten</Text>
                <Text style={{ fontSize: 14, color: "black" }}>แอคน้องใหม่ ฝากติดตามด้วยค่ะ</Text>
                <Text style={{ fontSize: 14, color: "black" }}>อัปเดต Content ทุกวันเสาร์-อาทิตย์</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10, justifyContent: 'space-around' }}>
                <View style={{ width: 150, height: 50, borderRadius: 5 }} >
                    <Button title="Follow" color="#F7418F" />
                </View>
                <View style={{ width: 150, height: 50, borderRadius: 5 }} >
                    <Button title="Edit Profile" color="#F7418F"  />
                </View>
                <AntDesign name="mail" size={24} color="black" marginTop={7} onPress={()=>{ navigation.navigate("Page04"); }} />
            </View>
            <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-around", borderBottomWidth: 0.3, marginTop: -5 }}>
                <Ionicons name="grid" size={24} color="black" />
                <FontAwesome name="bookmark-o" size={24} color="black" />
                <FontAwesome name="heart" size={24} color="black" />
            </View>
        </View>
    );
}