import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View, } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation,useRoute  } from "@react-navigation/native";
import BookStorage from "../../storages/BookStorage";
import BookService from "../../service/BookService";


export default function BookDetail() {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;

    const [book, setBook] = useState(id
        // "id": "xxxx",
        // "name": "Example Book",
        // "price": "100",
        // "image": "https://picsum.photos/300",
    );

    //DELETE POPUP    
    const deleteBook = async () => {
        const { id } = route.params;
        //REMOVE BOOK
        await BookService.destroyItem({"id":id});
        //REDIRECT TO
        navigation.navigate("Book");
    };

    useEffect(() => { onLoad(); }, []);
    const confirmDelete = () => {
        return Alert.alert(
            "ยืนยันการลบ?",
            "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?",
            [
                { text: "ยกเลิก", },
                { text: "ยืนยัน", onPress: () => { deleteBook(); }, },
            ]
        );
    };

    // TOP RIGHT MENU
    const TopRightMenu = ({b}) => (
        <View style={{ flexDirection: "row", width: 100, justifyContent: "space-around" }}>
            <TouchableOpacity
                onPress={() => { navigation.navigate("BookForm", { "id": b.id  }); }}
            >
                <FontAwesome name="edit" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { confirmDelete(); }}
            >
                <FontAwesome name="trash" size={30} />
            </TouchableOpacity>
        </View>
    );
    const onLoad = async () => {
        let b = await BookService.getItemDetail({"id":id});
        setBook(b);
        //navigation.setOptions({ headerRight: () => (<TopRightMenu id={id} />) });
        navigation.setOptions({ headerRight: () => ( <TopRightMenu b={b} /> ) });
    };
    useEffect(() => { onLoad(); }, []);
    // CONDITIONAL RENDERING
    if (Object.keys(book).length == 0) { return <View></View> }

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <TouchableOpacity onPress={() => { setModalVisible(true); }} >
                <View style={{ flexDirection: "row" }}>
                    <Image style={{ flex: 1, resizeMode: "contain", aspectRatio: 1 / 1 }} source={{ uri: book.image }} />
                </View>
            </TouchableOpacity>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, marginVertical: 10 }}> {book.name} </Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "green", fontSize: 20 }}>{book.price}</Text>
                    <Text style={{ paddingTop: 6 }}> บาท</Text>
                </View>
            </View>
        </View>
    );
}
