import React from 'react';
import { Body, Button, Content, Container, Drawer, Header, Item, Input, Icon, Left, Right, Text, Title } from 'native-base';
import SideBar from './SideBar';

export default class FeedDrawer extends React.Component {
    constructor(props) {
        super(props);
    }

    closeDrawer() {
        this._drawer._root.close()
    };
    openDrawer() {
        this._drawer._root.open()
    };

    render() {
        return ( 
            <Drawer
            ref={(ref) => { this._drawer = ref }}
            content={
                <SideBar
                    navigation={this.props.navigation}
                    onNavigate={() => {this.closeDrawer()}}
                />
            }
            onClose={() => this.closeDrawer()}>
                <Container padder>
                    <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.openDrawer()}
                        >
                        <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>inFridge</Title>
                    </Body>
                    <Right>
                        <Button
                        transparent
                        >
                        <Icon name='add' />
                        </Button>
                    </Right>
                    </Header>
                    
                    {
                        this.props.children
                    }

                </Container>
            </Drawer>
        )
    }
}