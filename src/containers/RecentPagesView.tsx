import * as React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import {
    Container,
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

interface RecentPagesViewProps {
    openNotePage: (pageName: string) => void;
}

export const RecentPagesView = (props: RecentPagesViewProps) => {
    const [searchInput, setSearchInput] = React.useState('');

    return (
        <>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search a recent page" />
                    {searchInput !== '' && <Icon name="close" />}
                </Item>
            </Header>
            <Card>
                <List>
                    <ListItem
                        onPress={() => {
                            props.openNotePage('Page 1');
                        }}>
                        <Left>
                            <Text>Page 1</Text>
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
