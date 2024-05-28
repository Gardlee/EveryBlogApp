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
    const content4 = [
        { "id": "1", "uri": "https://i.pinimg.com/564x/fb/87/47/fb874757f8e716fc632ea6264a56a846.jpg" },
        { "id": "2", "uri": "https://i.pinimg.com/564x/eb/81/61/eb8161bb957eae784d9de385a22c3ba1.jpg" },
        { "id": "3", "uri": "https://i.pinimg.com/564x/33/19/08/33190851a8caea01e4f41f48c2dd6c4d.jpg" },
        { "id": "4", "uri": "https://i.pinimg.com/564x/9a/81/6a/9a816a8f66921c564edf230307af2198.jpg" },
        { "id": "5", "uri": "https://i.pinimg.com/736x/39/71/0f/39710ff6037dd76d9eea11e8fac60ed7.jpg" },

    ];
    const content5 = [
        { "id": "1", "uri": "https://i.pinimg.com/564x/7c/71/48/7c714833f0ea4dc1e3e9e133ebe4ecb5.jpg" },
        { "id": "2", "uri": "https://i.pinimg.com/564x/2e/7a/e0/2e7ae07f9dae48bb98ac4619cba49675.jpg" },
        { "id": "3", "uri": "https://i.pinimg.com/564x/59/bf/8d/59bf8d064d6f781c51f5ca2454df9bd5.jpg" },
        { "id": "4", "uri": "https://i.pinimg.com/564x/3a/b3/c8/3ab3c8b11dea8b8c8af19de30d29d53e.jpg" },
        { "id": "5", "uri": "https://i.pinimg.com/564x/a9/c1/bc/a9c1bc21c56a30d9a6e5ed5c6bf37580.jpg" },

    ];
    const content6 = [
        { "id": "1", "uri": "https://i.pinimg.com/564x/c3/d1/a5/c3d1a5f4248274860ca29a6a910f3491.jpg" },
        { "id": "2", "uri": "https://i.pinimg.com/564x/ca/95/82/ca95823efa9bd5f5ab2f8c66e991474f.jpg" },
        { "id": "3", "uri": "https://i.pinimg.com/564x/f7/cf/69/f7cf694aa6c2671bc4e1c715e3eaab86.jpg" },
        { "id": "4", "uri": "https://i.pinimg.com/564x/96/6f/37/966f37b22958c9b16f66aced32dcd1d5.jpg" },
        { "id": "5", "uri": "https://i.pinimg.com/564x/10/04/be/1004be470f02d4b9e81fb20272ab90ce.jpg" },

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
            <View style={props.style}>
                <View style={{ flexDirection: 'row',marginTop:10 }} >
                    <View style={{ justifyContent: "center", alignItems: "center", padding: 10, marginHorizontal: 10, width: 45, height: 45, borderRadius: 50 / 2, backgroundColor: "lightgray" }} >
                        <FontAwesome name="hashtag" size={18} />
                    </View>
                    <View style={{ flexDirection: "column", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>Cafe</Text>
                        <Text style={{ fontSize: 12, color: "gray" }}>4.5K Views</Text>
                    </View>
                </View>
                <FlatList
                    style={{ margin: 10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={content4}
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
                        <Text style={{ fontSize: 16 }}>Skincare Trend</Text>
                        <Text style={{ fontSize: 12, color: "gray" }}>4.2K Views</Text>
                    </View>
                </View>
                <FlatList
                    style={{ margin: 10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={content5}
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
                        <Text style={{ fontSize: 16 }}>Photoshoot</Text>
                        <Text style={{ fontSize: 12, color: "gray" }}>10.5K Views</Text>
                    </View>
                </View>
                <FlatList
                    style={{ margin: 10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={content6}
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