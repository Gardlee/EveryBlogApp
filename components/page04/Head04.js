import { Button, Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function Head04() {
    const navigation = useNavigation();
    return (
        <View >
            <View style={{ flexDirection: "row", padding: 10 }} >
                <MaterialIcons name="arrow-back-ios-new" size={24} color="black" onPress={() => { navigation.navigate("Page03"); }} />
                <Text style={{ fontSize: 18, color: "black", marginLeft: 5 }}>Back</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }} >
                <Text style={{ fontSize: 24, color: "black", marginLeft: 20 }}>Email Validation</Text>
                <FontAwesome name="pencil-square-o" size={24} color="black" marginTop={6} marginLeft={5}/>
            </View>
            <View style={{ flexDirection: "row", padding: 10 , justifyContent:"center"}} >
                <Image style={{ width: 150, height: 150, borderRadius: 80, marginTop: 5 ,borderWidth:3,borderColor:"#F7418F"}} source={{uri : pic}} />
            </View>
            
        </View>
    );
}