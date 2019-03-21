import React from 'react';
import { Text, TextInput } from 'react-native';
import { Button, Container, Content, Header, Item, Textarea, Form } from 'native-base';

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
            location: '',
            tradeType: '',
            error: ''
        };
    }

    onSubmit = (e) => {
        e.preventDefault();

        const error =
            !this.state.body ? 'Please include a Post body' :
                !this.validateTradeType() ? 'Please include a valid Trade Type (donate/trade/sell)' : '';

        this.setState({ error });

        if (!error) {
            const transaction = {
                body: this.state.body,
                location: '123',
                tradeType: this.state.tradeType
            };

            this.setState({
                body: '',
                tradeType: ''
            });
            this.props.onSubmit(transaction);
        }
    }

    validateTradeType = () => {
        const tradeType = this.state.tradeType;

        if (tradeType === 'donate' || tradeType === 'trade' || tradeType === 'sell') {
            return true;
        }
        return false;
    }

    render() {
        return (
            <Content padder>

                {!!this.state.error && <Text>{this.state.error}</Text>}
                <Form>
                    <Textarea
                        bordered placeholder="Trade Type"
                        onChangeText={(tradeType) => this.setState({ tradeType })}
                        value={this.state.tradeType}
                    />


                    <Textarea
                        rowSpan={5}
                        bordered placeholder="Post body"
                        onChangeText={(body) => this.setState({ body })}
                        value={this.state.body}
                    />

                    <Button
                        block
                        onPress={this.onSubmit}
                    >

                        <Text>Create Post</Text>
                    </Button>

                </Form>






            </Content>
        )
    }
}

export default PostForm;