import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import {
    Header,
    Drawer,
    Icon,
    Button,
    Content,
    Left,
    Right,
    Body,
    Title
} from 'native-base';
import { SettingsView } from './SettingsView';

interface HeaderViewProps {
    title: string;
    toggleSettings: () => void;
    isSettingsOpen: boolean;
}

export const HeaderView = (props: HeaderViewProps) => {
    return (
        <Header style={styles.div}>
            <Body style={styles.title}>
                <Text style={styles.text}>{props.title}</Text>
            </Body>
            <Right style={styles.leftItems}>
                <Button
                    iconLeft
                    transparent
                    style={{ elevation: props.isSettingsOpen ? 14 : 0 }}
                    onPress={() => props.toggleSettings()}>
                    <Icon name="settings" />
                </Button>
            </Right>
        </Header>

        // <View style={styles.div}>
        //     <Text style={styles.text}>{props.title}</Text>
        // </View>
    );
};

const styles = StyleSheet.create({
    title: {
        // display: 'flex',
        // flex: 1,
        // justifyContent: 'center'
    },

    text: {
        fontSize: 30,
        color: '#FFF'
        // marginLeft: 20
        // textAlign: 'left'
    },

    div: {
        // display: 'flex'
        // paddingLeft: 20,
        // backgroundColor: '#000',
        // paddingTop: 10,
        // paddingBottom: 10,
        // marginBottom: 20
    },

    menu: {
        // left: 10
    },

    leftItems: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'flex-start'
    },

    settingsActive: {
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 5 },
        // shadowOpacity: 0,
        // shadowRadius: 10,
        elevation: 14,
        // transform: 'rotate(20deg)'
    }
});
