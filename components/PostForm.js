import React from 'react';
import { TextInput, StyleSheet, Image } from 'react-native';
import { Button, Container, Content, Header, Icon, Item, ListItem, Right, Left, Text, Textarea, Form, View } from 'native-base';
import { List } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postType: 'transaction',
      body: '',
      location: '',
      tradeType: '',
      photo: '',
      error: ''
    };
  }

  validateTransaction = () => {
    const error = !this.validateTradeType()
    ? 'You must include a Trade Type (Donate/Trade/Sell)'
    : !this.state.body && !this.state.photo
    ? 'Please include a Post body or an Image'
    : '';

    return error;
  }

  validateStatusPost = () => {
    const error = !this.state.body
      ? 'Please include a Status Post body'
      : '';

    return error;
  }

  onSubmit = e => {
    e.preventDefault();

    const error = (this.state.postType === 'transaction') ? this.validateTransaction() : this.validateStatusPost();
    this.setState({ error });

    if (!error) {
      let post;

      if(this.state.postType === 'transaction') {
        post = {
          kind: 'Transaction',
          body: this.state.body,
          imageUrl: this.state.photo.uri,
          longitude: '123',
          latitude: '123',
          tradeType: this.state.tradeType,
          comments: []
        };
        
        // Post Transaction
        this.props.onSubmitTransaction(post, this.state.photo);
      }else {
        post = {
          kind: 'Post',
          body: this.state.body,
          imageUrl: this.state.photo.uri,
          comments: []
        };

        // Post Status Post
        this.props.onSubmitStatusPost(post, this.state.photo);
      }

      // Reset
      this.setState({ body: '', tradeType: '', photo: '' });
    }
  };

  validateTradeType = () => {
    const tradeType = this.state.tradeType;

    if (
      tradeType === 'Donate' ||
      tradeType === 'Trade' ||
      tradeType === 'Sell'
    ) {
      return true;
    }
    return false;
  };

  uploadImage = () => {
    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: 'Select a Photo',
      // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      // storageOptions: {
      //     skipBackup: true,
      //     path: 'images',
      // },
      noData: true
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      // if (response.uri) {
      //     this.setState({ photo: response })
      // }
      // console.log('####################################################' + this.state.photo)
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {
          uri: response.uri,
          name: response.fileName,
          type: response.type
        };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          photo: source
        });
      }
    });
  };

  render() {
    const { photo } = this.state;

    return (
      <Content padder>
        {!!this.state.error && <Text>{this.state.error}</Text>}

        <ListItem>
          <Left>
            <Button
              transparent
              onPress={() => this.props.onClose()}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>

          <Right>
            <Button
                style={{width: 150}}
                onPress={() => this.setState({ postType: 'status' })}
              >
                <Text>Status Update</Text>
              </Button>
            <Button
                style={{width: 150}}
                onPress={() => this.setState({ postType: 'transaction' })}
              >
                <Text>Transaction</Text>
              </Button>
          </Right>
        </ListItem>

        <Form 
            bordered
        >

        {
          this.state.postType === 'transaction' &&
          <Textarea
            rowSpan={2}
            bordered
            placeholder='Trade Type'
            onChangeText={tradeType => this.setState({ tradeType })}
            value={this.state.tradeType}
          />
        }

          <Textarea
            rowSpan={2}
            bordered
            placeholder='Post body'
            onChangeText={body => this.setState({ body })}
            value={this.state.body}
          />

          <View
                style={{ alignItems: 'center', }}
          >
            {!!photo && (
              <Image
                boardered
                source={{ uri: photo.uri }}
                style={{ width: 133, height: 100, alignItems: 'center', }}
              />
            )}
          </View>
        </Form>


        <View style={styles.container}>
          {/* {photo && (
            <Image
              source={{ uri: photo.uri }}
              style={{ width: 200, height: 200, margin: 10 }}
            />
          )} */}
          <View style={styles.buttonContainer}>
            <Button small onPress={this.uploadImage}>
              <Icon name='image' />
              <Text>Pictures</Text>
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button small onPress={this.onSubmit}>
              <Icon name='md-create' />
              <Text>Post</Text>
            </Button>
          </View>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  buttonContainer: {}
});

export default PostForm;
