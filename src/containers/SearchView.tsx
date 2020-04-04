import * as React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import {
    Header,
    Item,
    Input,
    Icon,
    Button,
    Text,
    List,
    ListItem,
    Right,
    Left,
    Card,
    CardItem
} from 'native-base';

interface SearchViewProps {}

export const SearchView = (props: SearchViewProps) => {
    const [searchInput, setSearchInput] = React.useState('');
    const [searchedNotebooks, setSearchedNotebooks] = React.useState<string[] | undefined>();
    const [searchedPages, setSearchedPages] = React.useState<string[] | undefined>();
    const [searchedNotes, setSearchedNotes] = React.useState<string[] | undefined>();

    const doSearch = () => {
        console.log(`seachInput: ${searchInput}`);
    };

    const cancelSearch = () => {
        setSearchedNotebooks(undefined);
        setSearchedPages(undefined);
        setSearchedNotes(undefined);
    };

    const getContent = () => {
        if (!searchedNotebooks && !searchedPages && !searchedNotes) {
            return (
                <Button block style={styles.blockElement} onPress={doSearch}>
                    <Text style={styles.buttonText}>Search</Text>
                </Button>
            );
        } else {
            return (
                <>
                    <Button block danger style={styles.blockElement} onPress={cancelSearch}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </Button>

                    <Card style={styles.blockElement}>
                    </Card>
                </>
            );
        }
    };

    return (
        <>
        {/* <Container> */}
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input
                        placeholder="Search notebooks, pages, notes"
                        value={searchInput}
                        onChangeText={(text: string) => setSearchInput(text)}
                    />
                    {searchInput !== '' && <Icon name="close" onPress={() => setSearchInput('')} />}
                </Item>
            </Header>
            {/* <Content> */}
                {getContent()}
            {/* </Content> */}
        {/* </Container> */}
        </>
    );
};

const styles = StyleSheet.create({
    blockElement: {
        marginTop: 10
    },

    buttonText: {
        textTransform: 'capitalize',
        fontSize: 18
    }
});
