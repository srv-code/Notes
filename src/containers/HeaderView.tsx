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

interface HeaderViewProps {
    title: string;
}

export const HeaderView = (props: HeaderViewProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    return (
        <Header style={styles.div}>
            <Left style={styles.leftItems}>
                <Button iconLeft transparent>
                    <Icon
                        name="menu"
                        style={styles.menu}
                        onPress={() => console.log('menu clicked')}
                    />
                </Button>
                <Text style={styles.text}>{props.title}</Text>
            </Left>
        </Header>

        // <View style={styles.div}>
        //     <Text style={styles.text}>{props.title}</Text>
        // </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 20
        // textAlign: 'left'
    },

    div: {
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
});
