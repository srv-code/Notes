import * as React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, List, ListItem, Right, Left, Card } from 'native-base';

interface NotebooksProps {}

export const NotebooksView = (props: NotebooksProps) => {
    const [searchInput, setSearchInput] = React.useState('');

    return (
        <>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search a notebook" />
                    {searchInput !== '' && <Icon name="close" />}
                </Item>
            </Header>
            <Card>
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
            </Card>
        </>
    );
};

const styles = StyleSheet.create({});
