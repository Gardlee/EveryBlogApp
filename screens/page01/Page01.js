import React from 'react';
import { ScrollView, View } from 'react-native';
import Head from '../../components/Page01/Head';
import Body from '../../components/Page01/Body';

export default function Page01() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 }}>
                <Head />
                <Body />
            </View>
            
        </ScrollView>
    );
}