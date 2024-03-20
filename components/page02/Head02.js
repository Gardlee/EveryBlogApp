import { Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Head02() {
    return (
        <View >
            <View style={{ flexDirection: "row",padding: 10 ,marginHorizontal:10,backgroundColor:"pink",borderRadius:20,shadowColor:20}} >
                <Ionicons name="search" size={24} color="gray"/>
                <TextInput style={{marginLeft:10 , color:"#F7418F"}}>search...</TextInput>
            </View>
            <View style={{marginHorizontal:15,padding: 15,flexDirection: "row"}}>
                <Text style={{fontSize:20}}>Trending</Text>
                <Feather style={{padding:5}} name="trending-up" size={20} color="black" />
            </View>

        </View>
    );
}