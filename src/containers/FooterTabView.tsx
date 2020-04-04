import * as React from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar, TabBarIOS } from 'react-native';
import { views } from '../../App';
import {
    ACTIVE_VIEW_BGCOLOR,
    INACTIVE_VIEW_BGCOLOR,
    INACTIVE_VIEW_FGCOLOR,
    ACTIVE_VIEW_FGCOLOR
} from '../constants/colors';

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
        <Footer>
            <FooterTab>
                {views.map((name: string, idx: number) => {
                    return (
                        <Button key={idx} vertical onPress={() => props.onViewChange(name)}>
                            <Icon
                                type="AntDesign"
                                name={getTabIcon(name)}
                                active={name === props.selectedView}
                                style={name === props.selectedView ? styles.activeViewIcon : styles.inactiveViewIcon}
                            />
                            <Text style={name === props.selectedView ? styles.activeViewText : styles.inactiveViewText}>
                                {name}
                            </Text>
                        </Button>
                    );
                })}
            </FooterTab>
        </Footer>
    );
};

const styles = StyleSheet.create({
    activeViewButton: {
        backgroundColor: ACTIVE_VIEW_BGCOLOR
    },

    inactiveViewButton: {
        backgroundColor: INACTIVE_VIEW_BGCOLOR
    },

    activeViewIcon: {
        color: ACTIVE_VIEW_FGCOLOR
    },

    inactiveViewIcon: {
        color: INACTIVE_VIEW_FGCOLOR
    },

    activeViewText: {
        textTransform: 'capitalize',
        color: ACTIVE_VIEW_FGCOLOR
    },

    inactiveViewText: {
        textTransform: 'capitalize',
        color: INACTIVE_VIEW_FGCOLOR
    }
});
