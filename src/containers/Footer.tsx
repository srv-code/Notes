import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
    TabBarIOS
} from 'react-native';
import { views } from '../../App';

interface FooterProps {
    onViewChange: (viewName: string) => void;
}

export const Footer = (props: FooterProps) => {
    return (
        <View style={styles.div}>
            {views.map((name: string, idx: number) => {
                return (
                    <Button
                        key={idx}
                        title={name}
                        onPress={() => props.onViewChange(name)}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        marginTop: 20,
        backgroundColor: '#000'
    },

    viewSwitcher: {
        backgroundColor: '#000'
    }
});
