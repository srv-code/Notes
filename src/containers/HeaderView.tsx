import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';
import { Header, Left } from 'native-base';

interface HeaderViewProps {
    title: string;
}

export const HeaderView = (props: HeaderViewProps) => {
    return (
        <Header style={styles.div}>
            <Text style={styles.text}>{props.title}</Text>
        </Header>
        
        // <View style={styles.div}>
        //     <Text style={styles.text}>{props.title}</Text>
        // </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: '#FFF'
        // textAlign: 'left'
    },

    div: {
        // paddingLeft: 20,
        // backgroundColor: '#000',
        // paddingTop: 10,
        // paddingBottom: 10,
        // marginBottom: 20
    }
});
