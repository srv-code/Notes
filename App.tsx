import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Alert
} from 'react-native';
import { FooterTabView } from './src/containers/FooterTabView';
import { HeaderView } from './src/containers/HeaderView';
import { RecentPagesView } from './src/containers/RecentPagesView';
import { NotebooksView } from './src/containers/NotebooksView';
import { SearchView } from './src/containers/SearchView';
import { SettingsView } from './src/containers/SettingsView';
import { Content } from 'native-base';

export const views = ['Recents', 'Notebooks', 'Search'];

const App = () => {
    React.useEffect(() => {
        
    }, []);

    /* load from local storage */
    //////////////// TEST
    // const doTest = () => {
    //     AsyncStorage.getItem('test1').then((val) =>
    //         console.log(`read test1 val=${val}`)
    //     );
    //     let newVal = new Date().getTime().toString();
    //     console.log('before writing');
    //     AsyncStorage.setItem('test1', newVal);
    //     console.log(`written new test1 val=${newVal}`);
    // };
    // doTest();
    //////////////// TEST

    const getDarkModeValueFromLocalStorage = () => {
        let isEnabled = false;
        // AsyncStorage.getItem('isDarkModeEnabled').then((val) => {
        //     console.log(`read from local storage: ${val}`);
        //     isEnabled = val === 'true';
        // });
        return isEnabled;
    };

    /* views */
    const [currentView, setCurrentView] = React.useState(views[0]);
    const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

    /* settings */
    const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState<boolean>(
        getDarkModeValueFromLocalStorage()
    );

    console.log(`isDarkModeEnabled: ${isDarkModeEnabled}`);

    const setDarkMode = (val: boolean) => {
        let newVal = !isDarkModeEnabled;
        // AsyncStorage.setItem('isDarkModeEnabled', newVal.toString());
        setIsDarkModeEnabled(newVal);
        console.log(`dark mode set to ${newVal.toString()}`);
        // Alert.alert(`dark mode set to ${isDarkModeEnabled.toString()}`);
    };

    const getContent = () => {
        if (isSettingsOpen) {
            return (
                <Content style={styles.content}>
                    <ScrollView>
                        <SettingsView
                            isDarkModeEnabled={isDarkModeEnabled}
                            setDarkMode={(val) => setDarkMode(val)}
                        />
                    </ScrollView>
                </Content>
            );
        } else {
            return (
                <>
                    <Content style={styles.content}>
                        {currentView === 'Recents' && <RecentPagesView />}
                        {currentView === 'Notebooks' && <NotebooksView />}
                        {currentView === 'Search' && <SearchView />}
                    </Content>
                    <FooterTabView
                        onViewChange={(viewName: string) =>
                            setCurrentView(viewName)
                        }
                        selectedView={currentView}
                    />
                </>
            );
        }
    };

    return (
        <>
            <HeaderView
                title={isSettingsOpen ? 'Settings' : currentView}
                toggleSettings={() => setIsSettingsOpen(!isSettingsOpen)}
                isSettingsOpen={isSettingsOpen}
            />
            {getContent()}
        </>
    );
};

const styles = StyleSheet.create({
    content: {
        padding: 10
    }
});

export default App;
