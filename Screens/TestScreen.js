import React from 'react';
import { View, Text} from 'native-base';
import {Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
// import console = require('console');

export default class TestScreen extends React.Component{
    state = {
        photo: null,
    }
    handleChoosePhoto = () =>{
        const options = {
            noData:true
        };
        ImagePicker.launchImageLibrary(options, response =>{
            console.log("response", response);
            if(response.uri){
                this.setState({photo:response});
            }
        });
    };

    render(){
        const { photo } = this.state;
        return(
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
                {photo && (
                    <Image
                        source={{uri: photo.uri}}
                        style={{width:300, height:300}}
                    />
                )}
                <Button
                 title="Choose Photo"
                    onPress={this.handleChoosePhoto}
                >
                   <Text>Choose Photo</Text>
                </Button>
                    
                {/* /> */}
            </View>
        );
    }
}