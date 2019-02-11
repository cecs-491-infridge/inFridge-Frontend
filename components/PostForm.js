import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

class PostForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            author: '',
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

        if(!error) {
            const transaction = {
                author: 123,
                body: this.state.body,
                location: '123',
                tradeType: this.state.tradeType
            };
            this.props.onSubmit(transaction);
        }
    }

    validateTradeType = () => {
        const tradeType = this.state.tradeType;

        if(tradeType === 'donate' || tradeType === 'trade' || tradeType === 'sell'){
            return true;
        }
        return false;
    }

    render() {
        return (
            <View>
                { !!this.state.error && <Text>{this.state.error}</Text> }

                <TextInput
                    style={{height: 40}}
                    placeholder='Post body'
                    onChangeText={(body) => this.setState({ body })}
                ></TextInput>

                <TextInput
                    style={{height: 60}}
                    placeholder='Trade Type'
                    onChangeText={(tradeType) => this.setState({ tradeType })}
                ></TextInput>

                <Button
                    onPress={this.onSubmit}
                    title='Create Post'
                />
            </View>
        )
    }
}

export default PostForm;