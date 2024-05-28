import { FlatList, Image, Text, TextInput, View } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Page06() {
    const navigation = useNavigation();
    return (
        <View style = {{marginVertical:160,flexDirection:"column"}}>
            <Image style={{ width: 450, height: 450 ,marginLeft:-10 }}  source={require("../../assets/page06/Logo.jpg")}  />
            <Text onPress={()=>{ navigation.navigate("Page01"); }} style={{fontWeight: 'bold',fontSize: 18 , color: "#FF1BA7",marginLeft:150,marginTop:-80}}>Let's explor the app !</Text>
        </View>
    );
}

