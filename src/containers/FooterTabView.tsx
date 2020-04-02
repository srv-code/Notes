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

    console.log(`props.selectedView=${props.selectedView}`);

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
                                <Icon
                                    type="AntDesign"
                                    name={getTabIcon(name)}
                                    active={name === props.selectedView}
                                    style={{
                                        color:
                                            name === props.selectedView
                                                ? 'white'
                                                : 'lightgray'
                                    }}
                                />
                                <Text
                                    style={{
                                        textTransform: 'capitalize',
                                        color:
                                            name === props.selectedView
                                                ? 'white'
                                                : 'lightgray'
                                    }}>
                                    {name}
                                </Text>
                            </Button>
                        );
                    })}
                </FooterTab>
            </Footer>
        </Container>
    );
};

const styles = StyleSheet.create({
});
