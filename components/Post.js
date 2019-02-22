import React from 'react';
import { View} from 'react-native';
import { Card, ListItem, Button, Icon, Text, Image } from 'react-native-elements'


class Post extends React.Component {
    constructor(props){
        super(props);
    }

    
    render(){
      // implemented without image with header
      return (<View>
        <Card title="Posts">
            <Text>{this.props.transaction.author}</Text>
            <Text>{this.props.transaction.body}</Text>
            <Text>{this.props.transaction.location}</Text>
            <Text>{this.props.transaction.tradeType}</Text>
                      
            <Button
                title='Complete'
            />
        </Card></View>
      );
    }
    
}

export default Post;