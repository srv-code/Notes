import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar
} from 'react-native';
import {
    Container,
    Header,
    Item,
    Input,
    Icon,
    Button,
    Text,
    Content,
    List,
    ListItem,
    Right,
    Left
} from 'native-base';

interface SearchViewProps {}

export const SearchView = (props: SearchViewProps) => {
    const [searchInput, setSearchInput] = React.useState('');

    const searchAll = (text: string) => {
        console.log(`Seached: ${searchInput}`);
    };

    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input
                        placeholder="Search notebooks, pages, notes"
                        value={searchInput}
                        onChangeText={(text: string) => setSearchInput(text)}
                    />
                    {searchInput !== '' && (
                        <Icon name="close" onPress={() => setSearchInput('')} />
                    )}
                </Item>
            </Header>
            <Button
                block
                style={styles.searchButton}
                onPress={() => searchAll(searchInput)}>
                <Text style={styles.searchButtonText}>Search</Text>
            </Button>
        </Container>
    );
};

const styles = StyleSheet.create({
    searchButton: {
        marginTop: 10
    },

    searchButtonText: {
        textTransform: 'capitalize',
        fontSize: 18
    }
});
