import React from 'react';
import { Button, Text, View } from 'react-native';

class Post extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <Text>{this.props.transaction.author}</Text>
                <Text>{this.props.transaction.body}</Text>
                <Text>{this.props.transaction.location}</Text>
                <Text>{this.props.transaction.tradeType}</Text>
                
                <Button
                    title='Complete'
                />
            </View>
        );
    }
}

export default Post;