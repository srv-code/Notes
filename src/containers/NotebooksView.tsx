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

interface NotebooksProps {
}

export const NotebooksView = (props: NotebooksProps) => {
    const [searchInput, setSearchInput] = React.useState('');

    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search a notebook" />
                    {searchInput !== '' && <Icon name="close" />}
                </Item>
            </Header>
            <Content>
                <List>
                    <ListItem>
                        <Left>
                            <Text>Personal</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Work</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Coding</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({});
