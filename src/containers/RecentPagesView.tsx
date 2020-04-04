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

interface RecentPagesViewProps {}

export const RecentPagesView = (props: RecentPagesViewProps) => {
    const [searchInput, setSearchInput] = React.useState('');

    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search a recent page" />
                    {searchInput !== '' && <Icon name="close" />}
                </Item>
            </Header>
            <Content>
                <List>
                    <ListItem>
                        <Left>
                            <Text>To Dos</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>HashedIn Project</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>College</Text>
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
