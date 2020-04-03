import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar
} from 'react-native';
import { FooterTabView } from './src/containers/FooterTabView';
import { HeaderView } from './src/containers/HeaderView';
import { RecentPagesView } from './src/containers/RecentPagesView';
import { NotebooksView } from './src/containers/NotebooksView';
import { SearchView } from './src/containers/SearchView';
import { Content } from 'native-base';

export const views = ['Recents', 'Notebooks', 'Search'];

const App = () => {
    const [currentView, setCurrentView] = React.useState(views[0]);

    return (
        <>
            <HeaderView title={currentView} />
            <Content style={styles.content}>
                {currentView === 'Recents' && <RecentPagesView />}
                {currentView === 'Notebooks' && <NotebooksView />}
                {currentView === 'Search' && <SearchView />}
            </Content>

            <FooterTabView
                onViewChange={(viewName: string) => setCurrentView(viewName)}
                selectedView={currentView}
            />
        </>
    );
};

const styles = StyleSheet.create({
    content: {
        padding: 10
    }
});

export default App;
