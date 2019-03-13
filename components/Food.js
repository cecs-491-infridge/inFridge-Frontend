import React from 'react';
import { View} from 'react-native';
import { Card, ListItem, Button, Icon, Text, Image, Header } from 'react-native-elements'


class Food extends React.Component {
    constructor(props){
        super(props);
    }

    deleteFood = (e) => {
        const id = this.props.food._id;

        this.props.onDelete(id);
    }
    
    render(){
      // implemented without image with header
      return (
        <View>
            <Card title="Food">
                <Text>{this.props.food.name}</Text>
                {
                    !!this.props.food.expirationDate &&
                    <Text>{this.props.food.expirationDate}</Text>
                }
                        
                <Button
                    title='Delete'
                    onPress={this.deleteFood}
                />
            </Card>
        </View>
      );
    }
    
}

export default Food;