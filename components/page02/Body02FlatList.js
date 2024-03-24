import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Page02FlatList(props) {
    const content1 = [
        { "id": "1", "uri": "https://i.pinimg.com/564x/8d/03/61/8d0361fc1add0c9340c1053181236b19.jpg" },
        { "id": "2", "uri": "https://i.pinimg.com/564x/8e/a7/63/8ea7631936024ba39903de2d1630d5ac.jpg" },
        { "id": "3", "uri": "https://i.pinimg.com/564x/22/c1/f3/22c1f30ab7890070028ad0e2c3378088.jpg" },
        { "id": "4", "uri": "https://i.pinimg.com/564x/95/b1/82/95b182bbc01b773d86b8aa469e2621d3.jpg" },
        { "id": "5", "uri": "https://i.pinimg.com/564x/ce/29/a0/ce29a0652e4fdcc6d6c75ba86494eb4e.jpg" },

    ];
    const content2 = [
        { "id": "1", "uri": "https://i.pinimg.com/474x/11/65/79/1165793a719af353fe69dc0ad4a951f7.jpg" },
        { "id": "2", "uri": "https://i.pinimg.com/474x/49/9c/d3/499cd3aa732a0acce908a9523130735a.jpg" },
        { "id": "3", "uri": "https://i.pinimg.com/736x/83/a8/d4/83a8d4cfc821530981b6fe228b73c7fd.jpg" },
        { "id": "4", "uri": "https://i.pinimg.com/736x/e8/81/e5/e881e53c2136e431229797588f751fa7.jpg" },
        { "id": "5", "uri": "https://i.pinimg.com/736x/e0/32/47/e03247046219d9c3ab2893c4b46f0837.jpg" },

    ];
    const content3 = [
        { "id": "1", "uri": "https://i.pinimg.com/736x/f1/69/47/f16947fbbdddaba069be5d8902461e03.jpg" },
        { "id": "2", "uri": "https://i.pinimg.com/564x/11/07/c3/1107c312406df8796dce6676b1c7b62b.jpg" },
        { "id": "3", "uri": "https://i.pinimg.com/564x/a8/db/3d/a8db3d3ebd1f239a0e91922f30d93090.jpg" },
        { "id": "4", "uri": "https://i.pinimg.com/564x/23/f9/fd/23f9fdb1315fc0c1aec85fe15dd50b95.jpg" },
        { "id": "5", "uri": "https://i.pinimg.com/736x/f4/39/e0/f439e0e36adfd56f8aa1169c0629fd30.jpg" },

    ];

    return (
        <View>
            <View style={props.style}>
                <View style={{ flexDirection: 'row' }} >
                    <View style={{ justifyContent: "center", alignItems: "center", padding: 10, marginHorizontal: 10, width: 45, height: 45, borderRadius: 50 / 2, backgroundColor: "lightgray" }} >
                        <FontAwesome name="hashtag" size={18} />
                    </View>
                    <View style={{ flexDirection: "column", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>Fashoin Trend</Text>
                        <Text style={{ fontSize: 12, color: "gray" }}>7.5K Views</Text>
                    </View>
                </View>
                <FlatList
                    style={{ margin: 10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={content1}
                    renderItem={
                        ({ item, index }) => {
                            console.log(item, index, item.uri);
                            return (
                                <View>
                                    <Image style={{ width: 200, height: 250, borderRadius: 5, marginTop: 5, marginLeft: 5 }} source={{ uri: item.uri }} />
                                </View>
                            );
                        }
                    }
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={props.style}>
                <View style={{ flexDirection: 'row',marginTop:10 }} >
                    <View style={{ justifyContent: "center", alignItems: "center", padding: 10, marginHorizontal: 10, width: 45, height: 45, borderRadius: 50 / 2, backgroundColor: "lightgray" }} >
                        <FontAwesome name="hashtag" size={18} />
                    </View>
                    <View style={{ flexDirection: "column", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>Makeup Trend</Text>
                        <Text style={{ fontSize: 12, color: "gray" }}>8.5K Views</Text>
                    </View>
                </View>
                <FlatList
                    style={{ margin: 10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={content2}
                    renderItem={
                        ({ item, index }) => {
                            console.log(item, index, item.uri);
                            return (
                                <View>
                                    <Image style={{ width: 200, height: 250, borderRadius: 5, marginTop: 5, marginLeft: 5 }} source={{ uri: item.uri }} />
                                </View>
                            );
                        }
                    }
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={props.style}>
                <View style={{ flexDirection: 'row',marginTop:10 }} >
                    <View style={{ justifyContent: "center", alignItems: "center", padding: 10, marginHorizontal: 10, width: 45, height: 45, borderRadius: 50 / 2, backgroundColor: "lightgray" }} >
                        <FontAwesome name="hashtag" size={18} />
                    </View>
                    <View style={{ flexDirection: "column", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>Enhypen is Comming...</Text>
                        <Text style={{ fontSize: 12, color: "gray" }}>20.5K Views</Text>
                    </View>
                </View>
                <FlatList
                    style={{ margin: 10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={content3}
                    renderItem={
                        ({ item, index }) => {
                            console.log(item, index, item.uri);
                            return (
                                <View>
                                    <Image style={{ width: 200, height: 250, borderRadius: 5, marginTop: 5, marginLeft: 5 }} source={{ uri: item.uri }} />
                                </View>
                            );
                        }
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}