import React from 'react';
import { ScrollView, View } from 'react-native';
// import Head from '../../components/Page01/Head01';
// import Body from '../../components/Page01/Body01';
// import Bottom from '../../components/Page01/Bottom01';
import Head02 from '../../components/page02/Head02';
//import Body02 from '../../components/page02/Body02';
import Body02FlatList from '../../components/page02/Body02FlatList';
import Bottom from '../../components/Page01/Bottom01';


export default function Page02() {
    return (
        <View>
            <ScrollView>
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <Head02 />
                    <Body02FlatList />
                    <Bottom/>
                </View>
            </ScrollView>
        </View>
    );
}