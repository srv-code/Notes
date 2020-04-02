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

interface NoteListProps {}

export const NoteList = (props: NoteListProps) => {
    return (
        <View>
            <Text>List</Text>
            <Button title='Press' onPress={() => {console.log('button pressed')}} />
        </View>
    );
};

const styles = StyleSheet.create({});
