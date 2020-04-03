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
import { ACTIVE_VIEW_COLOR, INACTIVE_VIEW_COLOR } from '../constants/colors';

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
                                    style={
                                        name === props.selectedView
                                            ? styles.activeViewIcon
                                            : styles.inactiveViewIcon
                                    }
                                />
                                <Text
                                    style={
                                        name === props.selectedView
                                            ? styles.activeViewText
                                            : styles.inactiveViewText
                                    }>
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
    activeViewIcon: {
        color: ACTIVE_VIEW_COLOR
    },

    inactiveViewIcon: {
        color: INACTIVE_VIEW_COLOR
    },

    activeViewText: {
        textTransform: 'capitalize',
        color: ACTIVE_VIEW_COLOR
    },

    inactiveViewText: {
        textTransform: 'capitalize',
        color: INACTIVE_VIEW_COLOR
    }
});
