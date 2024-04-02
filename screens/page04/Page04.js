import React, { useEffect, useState } from 'react';
import { View, FlatList , TouchableOpacity, Button  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import TodoItem from '../../components/page04/BodyList';
import InfoStorage from '../../storages/InfoStorage';
import Head04 from '../../components/page04/Head04';
// import { useNavigation } from '@react-navigation/native';

export default function Page04(props) {
    // const navigation = useNavigation();
    const [email, setEmail] = useState(
        [
            // { id: '1', completed: false, title: "exercise @ 7.00" },
            // { id: '2', completed: false, title: "meeting @ 9.00" },
            // { id: '3', completed: false, title: "go to cinema @ 19.00" },
        ]
    );

    console.log("Email:", email);

    const onLoad = async () => {
        // READ ITEMS FROM STORAGE
        let data = await InfoStorage.readItems();
        // console.log("data:", data);

        // SET STATE - WRITE CODE HERE
        setEmail(data)

    };

    useEffect(()=>{ onLoad(); },[]);

    const onCreate = async () => {
        let new_data = {
            id : '_' + Math.random().toString(36).substr(2, 9), //RANDOM NUMBER
            title : "", //Empty String
            completed : false,
        };
        //CLONE ARRAY + APPEND NEW DATA INTO ARRAY
        let t = [...todos, new_data];
        //UPDATE STATE
        setEmail(t);               

        // WRITE ITEM TO STORAGE - WRITE CODE HERE
        await InfoStorage.writeItems(t);
    };     
    const onUpdate = async(new_title, id) => {   
        //CLONE ARRAY FIRST
        let t = [...email];
        //Find index of specific object using findIndex method.   
        let index = t.findIndex((item => item.id == id));
        //Update object's name property.
        console.log("t:", t[index],id);
        t[index].title = new_title;
        //UPDATE STATE
        setEmail(t);
        
        // WRITE ITEM TO STORAGE - WRITE CODE HERE
        await InfoStorage.writeItems(t);
    };    
    const onDelete = async(id) => {   
        //CLONE ARRAY FIRST
        let t = [...todos];
        let index = t.findIndex((item => item.id == id));
        [removed_t] = t.splice(index, 1);
        console.log(removed_t);
        setTodos(t);                
        
        // REMOVE AN ITEM FROM STORAGE - WRITE CODE HERE
        await InfoStorage.writeItems(t);

    };


    return (
        <View style={{ flex: 1 }}>
            <Head04 />
            <FlatList
                style={{ marginTop: 15 }}
                data={email}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    // <Text>{item.title}</Text>
                    <TodoItem item={item} onUpdate={onUpdate} onDelete={onDelete} />
                )}
            />
                {/* <TouchableOpacity
                style={{
                    backgroundColor: "lightblue",
                    padding: 10,
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    alignContent: "center",
                    borderRadius: 25,
                    position: 'absolute',
                    right: 10,
                    bottom: 10,
                }}
                onPress={onCreate}
            >
                <FontAwesome name='plus' size={26} />
            </TouchableOpacity> */}
        </View>
    );
}
