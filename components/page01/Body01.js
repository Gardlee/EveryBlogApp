import { Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

export default function Body() {
    
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={{ padding: 10 }}>
                    {/* View ก้อนที่ 1 */}
                    <View style={{ flex: 1, flexDirection: "columns" }}>
                        <Image style={{ width: 200, height: 250, borderRadius: 10 }} source={require("../../assets/page01/Outfit01.jpg")} />
                    </View>
                    {/* View ก้อนที่ 3 */}
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 20 }}>Outfit Idea!</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: 40, height: 40, borderRadius: 50 / 2, marginTop: 5 }} source={require("../../assets/page01/Profile01.jpg")} />
                        <Text style={{ padding: 5, marginTop: 20 }}>Haerin Kang</Text>
                        <FontAwesome name="heart" size={15} color="red" marginTop={27} marginLeft={15} />
                        <Text style={{ padding: 5, marginTop: 20 }}>999</Text>
                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    {/* View ก้อนที่ 1 */}
                    <View style={{ flex: 1, flexDirection: "columns" }}>
                        <Image style={{ width: 200, height: 250, borderRadius: 10 }} source={require("../../assets/page01/Cosmetic01.jpg")} />
                    </View>
                    {/* View ก้อนที่ 3 */}
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 20 }}>My Fav K-Cosmetics</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: 40, height: 40, borderRadius: 50 / 2, marginTop: 5 }} source={require("../../assets/page01/Profile02.jpg")} />
                        <Text style={{ padding: 5, marginTop: 20 }}>Hanni Pham</Text>
                        <FontAwesome name="heart" size={15} color="red" marginTop={27} marginLeft={15} />
                        <Text style={{ padding: 5, marginTop: 20 }}>1001</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={{ padding: 10 }}>
                    {/* View ก้อนที่ 1 */}
                    <View style={{ flex: 1, flexDirection: "columns" }}>
                        <Image style={{ width: 200, height: 250, borderRadius: 10 }} source={require("../../assets/page01/Skincare01.jpg")} />
                    </View>
                    {/* View ก้อนที่ 3 */}
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 20 }}>Skincare Routine</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: 40, height: 40, borderRadius: 50 / 2, marginTop: 5 }} source={require("../../assets/page01/Profile03.jpg")} />
                        <Text style={{ padding: 5, marginTop: 20 }}>Minji Kim</Text>
                        <FontAwesome name="heart" size={15} color="red" marginTop={27} marginLeft={15} />
                        <Text style={{ padding: 5, marginTop: 20 }}>895</Text>
                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    {/* View ก้อนที่ 1 */}
                    <View style={{ flex: 1, flexDirection: "columns" }}>
                        <Image style={{ width: 200, height: 250, borderRadius: 10 }} source={require("../../assets/page01/Korea01.jpg")} />
                    </View>
                    {/* View ก้อนที่ 3 */}
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 20 }}>Go Go Go</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: 40, height: 40, borderRadius: 50 / 2, marginTop: 5 }} source={require("../../assets/page01/Profile04.jpg")} />
                        <Text style={{ padding: 5, marginTop: 20 }}>Baby Hyein</Text>
                        <FontAwesome name="heart" size={15} color="red" marginTop={27} marginLeft={15} />
                        <Text style={{ padding: 5, marginTop: 20 }}>1500</Text>
                    </View>
                </View>
            </View>
        </View>


    );
}

