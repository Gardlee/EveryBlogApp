import { Image, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Bottom() {
    const navigation = useNavigation();
    return (
        <View style={{ marginTop: 5}}>
            <View style={{ marginTop: 5,padding: 10 , borderTopWidth:0.2,backgroundColor:"pink"}} >
                <View style={{ flexDirection : "row", marginTop : 5,justifyContent:"space-around" }}>
                    <Ionicons  title="home" name="home" size={30} color="black" onPress={()=>{ navigation.navigate("Page01"); }} />
                    <Ionicons  title="search" name="search" size={30} color="black" onPress={()=>{ navigation.navigate("Page02"); }}/>
                    <AntDesign  title="plussquareo" name="plussquareo" size={30} color="black" onPress={()=>{ navigation.navigate("PostForm"); }} />
                    <Feather   title="bell" name="bell" size={30} color="black" />
                    <MaterialCommunityIcons  title="account-outline" name="account-outline" size={30} color="black" onPress={()=>{ navigation.navigate("Page03"); }}/>
                </View>
            </View>
        </View>
    );
}
{/* <AntDesign name="plussquareo" size={24} color="black" /> */}
