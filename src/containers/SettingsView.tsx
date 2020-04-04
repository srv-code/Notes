import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar
} from 'react-native';
import {
    Header,
    Drawer,
    Icon,
    Button,
    Content,
    Left,
    Body,
    Title
} from 'native-base';

interface SettingsViewProps {
}

export const SettingsView = (props: SettingsViewProps) => {

    return (
        <View>
            <Text>Settings</Text>
        </View>
    );
}