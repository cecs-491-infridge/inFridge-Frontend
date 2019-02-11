import React from 'react';
import { Button, Text, View } from 'react-native';

class Post extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <Text>{props.transaction.author}</Text>
                <Text>{props.transaction.body}</Text>
                <Text>{props.transaction.location}</Text>
                <Text>{props.transaction.tradeType}</Text>
                
                <Button
                    title='Complete'
                />
            </View>
        );
    }
}

export default Post;