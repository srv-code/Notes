import React, { useState } from 'react';
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

export const views = ['Recents', 'Notebooks', 'Search'];

const App = () => {
    const [currentView, setCurrentView] = useState(views[0]);

    return (
        <>
            <HeaderView title={currentView} />
            {currentView === 'Recents' && <RecentPagesView />}
            {currentView === 'Notebooks' && <NotebooksView />}
            {currentView === 'Search' && <SearchView />}

            <FooterTabView
                onViewChange={(viewName: string) => setCurrentView(viewName)}
                selectedView={currentView}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default App;
