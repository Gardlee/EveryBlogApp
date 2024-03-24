import React from 'react';
import { ScrollView, View } from 'react-native';
import Head03 from '../../components/page03/Head03';
import Body03 from '../../components/page03/Body03';
import Bottom from '../../components/page01/Bottom01';



export default function Page03() {
    return (
        <View>
            <ScrollView>
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <Head03 />
                    <Body03 />
                    <Bottom />
                </View>
            </ScrollView>
        </View>
    );
}