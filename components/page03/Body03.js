import { Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

export default function Body03() {
    pic = "https://i.pinimg.com/564x/c5/3b/5b/c53b5b3465aa45fcf3d2ee1d3132fd51.jpg"
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={{ padding: 10 }}>
                    {/* View ก้อนที่ 1 */}
                    <View style={{ flex: 1, flexDirection: "columns" }}>
                        <Image style={{ width: 200, height: 250, borderRadius: 5 }} source={{uri : "https://i.pinimg.com/564x/bd/d6/92/bdd692e59341b678c2e96c06568460c1.jpg"}} />
                    </View>
                    {/* View ก้อนที่ 3 */}
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 20 }}>Ootd!</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: 40, height: 40, borderRadius: 50 / 2, marginTop: 5 }} source={{uri : pic}} />
                        <Text style={{ padding: 5, marginTop: 20 }}>PrettyKitten</Text>
                        <FontAwesome name="heart" size={15} color="red" marginTop={27} marginLeft={15} />
                        <Text style={{ padding: 5, marginTop: 20 }}>999</Text>
                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    {/* View ก้อนที่ 1 */}
                    <View style={{ flex: 1, flexDirection: "columns" }}>
                        <Image style={{ width: 200, height: 250, borderRadius: 5 }} source={{uri : "https://i.pinimg.com/564x/fd/7f/a2/fd7fa21dcc5ff4247f2e9d5b8f462a49.jpg"}} />
                    </View>
                    {/* View ก้อนที่ 3 */}
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 20 }}>Everyday Makeup</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: 40, height: 40, borderRadius: 50 / 2, marginTop: 5 }} source={{uri : pic}} />
                        <Text style={{ padding: 5, marginTop: 20 }}>PrettyKitten</Text>
                        <FontAwesome name="heart" size={15} color="red" marginTop={27} marginLeft={15} />
                        <Text style={{ padding: 5, marginTop: 20 }}>1001</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={{ padding: 10 }}>
                    {/* View ก้อนที่ 1 */}
                    <View style={{ flex: 1, flexDirection: "columns" }}>
                        <Image style={{ width: 200, height: 250, borderRadius: 5 }} source={{uri : "https://i.pinimg.com/736x/ab/b2/2b/abb22bb96e4823c8fe2449d5ac531329.jpg"}} />
                    </View>
                    {/* View ก้อนที่ 3 */}
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 20 }}>Skincare Routine</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: 40, height: 40, borderRadius: 50 / 2, marginTop: 5 }} source={{uri : pic}} />
                        <Text style={{ padding: 5, marginTop: 20 }}>PrettyKitten</Text>
                        <FontAwesome name="heart" size={15} color="red" marginTop={27} marginLeft={15} />
                        <Text style={{ padding: 5, marginTop: 20 }}>895</Text>
                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    {/* View ก้อนที่ 1 */}
                    <View style={{ flex: 1, flexDirection: "columns" }}>
                        <Image style={{ width: 200, height: 250, borderRadius: 5 }} source={{uri : "https://i.pinimg.com/564x/9b/d8/86/9bd8864f07b96a3d6c5653e2c1dd810b.jpg"}} />
                    </View>
                    {/* View ก้อนที่ 3 */}
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 20 }}>Fav Liptint</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: 40, height: 40, borderRadius: 50 / 2, marginTop: 5 }} source={{uri : pic}} />
                        <Text style={{ padding: 5, marginTop: 20 }}>PrettyKitten</Text>
                        <FontAwesome name="heart" size={15} color="red" marginTop={27} marginLeft={15} />
                        <Text style={{ padding: 5, marginTop: 20 }}>1500</Text>
                    </View>
                </View>
            </View>
        </View>


    );
}
