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
    Title,
    Card,
    CardItem,
    Right,
    Switch
} from 'native-base';

interface SettingsViewProps {
    isDarkModeEnabled: boolean;
    setDarkMode: (val: boolean) => void;
}

export const SettingsView = (props: SettingsViewProps) => {
    return (
        <View>
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <Icon active name="moon" style={styles.itemIcon} />
                            <Text>Dark mode</Text>
                        </Left>

                        <Right>
                            <Switch
                                value={props.isDarkModeEnabled}
                                onValueChange={(val) => props.setDarkMode(val)}
                            />
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        </View>
    );
};

const styles = StyleSheet.create({
    itemIcon: {
        marginRight: 15
    },

    darkCard: {
        backgroundColor: 'black'
    },

    lightCard: {
        backgroundColor: 'black'
    }
});
