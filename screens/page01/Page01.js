import React from 'react';
import { ScrollView, View } from 'react-native';
import Head from '../../components/page01/Head01';
import Body from '../../components/page01/Body01';
import Bottom from '../../components/page01/Bottom01';


export default function Page01() {
    return (
        <View>
            <ScrollView>
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <Head />
                    <Body />
                    <Bottom />
                </View>
            </ScrollView>
        </View>
    );
}