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

interface HeaderProps {
    title: string;
}

export const Header = (props: HeaderProps) => {
    return (
        <View style={styles.div}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: '#FFF'
    },

    div: {
        paddingLeft: 20,
        backgroundColor: '#000',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20
    }
});