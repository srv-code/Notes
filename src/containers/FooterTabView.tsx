import * as React from 'react';
import {
    Container,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Text,
    Badge
} from 'native-base';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    TabBarIOS
} from 'react-native';
import { views } from '../../App';

interface FooterTabViewProps {
    selectedView: string;
    onViewChange: (viewName: string) => void;
}

export const FooterTabView = (props: FooterTabViewProps) => {
    const getTabIcon = (tabName: string) => {
        switch (tabName) {
            case 'Recents':
                return 'clockcircle';
            case 'Notebooks':
                return 'book';
            case 'Search':
                return 'search1';
        }
    };

    return (
        <Container>
            <Content />
            <Footer>
                <FooterTab>
                    {views.map((name: string, idx: number) => {
                        return (
                            <Button
                                key={idx}
                                vertical
                                onPress={() => props.onViewChange(name)}>
                                {/* <Badge>
                                    <Text>2</Text>
                                </Badge> */}
                                <Icon
                                    name={getTabIcon(name)}
                                    type="AntDesign"
                                    active={name === props.selectedView}
                                />
                                <Text>{name}</Text>
                            </Button>

                            // <Button
                            //     key={idx}
                            //     title={name}
                            //     onPress={() => props.onViewChange(name)}
                            // />
                        );
                    })}
                </FooterTab>
            </Footer>
        </Container>

        // <View style={styles.div}>
        //     {views.map((name: string, idx: number) => {
        //         return (
        //             <Button
        //                 key={idx}
        //                 title={name}
        //                 onPress={() => props.onViewChange(name)}
        //             />
        //         );
        //     })}
        // </View>
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
