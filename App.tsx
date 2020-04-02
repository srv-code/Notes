import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar
} from 'react-native';

import {
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';
import { Footer } from './src/containers/Footer';
import { RecentPagesView } from './src/containers/RecentPagesView';
import { NotebooksView } from './src/containers/NotebooksView';
import { SearchView } from './src/containers/SearchView';
import { Header } from './src/components/Header';

export const views = ['Recents', 'Notebooks', 'Search'];

const App = () => {
    const [currentView, setCurrentView] = useState(views[0]);

    return (
        <>
            <Header title={currentView} />
            {currentView === 'Recents' && <RecentPagesView />}
            {currentView === 'Notebooks' && <NotebooksView />}
            {currentView === 'Search' && <SearchView />}

            <Footer
                onViewChange={(viewName: string) => setCurrentView(viewName)}
            />
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter
    },
    engine: {
        position: 'absolute',
        right: 0
    },
    body: {
        backgroundColor: Colors.white
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark
    },
    highlight: {
        fontWeight: '700'
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right'
    }
});

export default App;
