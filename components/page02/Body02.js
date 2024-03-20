import { FlatList, Image, Text, TextInput, View } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Body02() {
    return (
        <View>
            <View style={{ flexDirection: 'row' }} >
                <View style={{ justifyContent: "center", alignItems: "center", padding: 10, marginHorizontal: 10, width: 45, height: 45, borderRadius: 50 / 2, backgroundColor: "lightgray" }} >
                    <FontAwesome name="hashtag" size={18} />
                </View>
                <View style={{ flexDirection: "column", margin: 5 }}>
                    <Text style={{ fontSize: 16 }}>Fashoin Trend</Text>
                    <Text style={{ fontSize: 12, color: "gray" }}>7.5K Views</Text>
                </View>
            </View>
            <FlatList horizontal={true}>
                <View style={{ flexDirection: 'row', marginTop: 10, padding: 10 }}>
                    <Image style={{ width: 200, height: 200, borderRadius: 5 }} source={{ uri: "https://i.pinimg.com/564x/8d/03/61/8d0361fc1add0c9340c1053181236b19.jpg" }} />
                </View>
            </FlatList>
        </View>
    );
}