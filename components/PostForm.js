import React from "react";
import { TextInput, StyleSheet, Image } from "react-native";
import { Button, Container, Content, Header, Icon, Item, ListItem, Text, Textarea, Form, View } from "native-base";
import { List } from "react-native-paper";
import ImagePicker from "react-native-image-picker";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      location: "",
      tradeType: "",
      error: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();

    const error = !this.state.body
      ? "Please include a Post body"
      : !this.validateTradeType()
      ? "Please include a valid Trade Type (donate/trade/sell)"
      : "";

    this.setState({ error });

    if (!error) {
      const transaction = {
        body: this.state.body,
        longitude: "123",
        latitude: "123",
        tradeType: this.state.tradeType,
        comments: []
      };

      this.setState({
        body: "",
        tradeType: ""
      });
      this.props.onSubmit(transaction);
    }
  };

  validateTradeType = () => {
    const tradeType = this.state.tradeType;

    if (
      tradeType === "Donate" ||
      tradeType === "Trade" ||
      tradeType === "Sell"
    ) {
      return true;
    }
    return false;
  };

  uploadImage = () => {
    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: "Select a Photo",
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
      console.log("Response = ", response);

      // if (response.uri) {
      //     this.setState({ photo: response })
      // }
      // console.log("####################################################" + this.state.photo)
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

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

        <View>
          <Button
            transparent
            onPress={() => this.props.onClose()}
          >
            <Icon name='arrow-back' />
          </Button>
        </View>
        
        <Form 
            bordered
        >
          <Textarea
            rowSpan={1}
            bordered
            placeholder="Trade Type"
            onChangeText={tradeType => this.setState({ tradeType })}
            value={this.state.tradeType}
          />

          <Textarea
            rowSpan={2}
            bordered
            placeholder="Post body"
            onChangeText={body => this.setState({ body })}
            value={this.state.body}
          />

          {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
                    </View> */}
          <View
                style={{ alignItems: "center", }}
          >
            {photo && (
              <Image
                boardered
                source={{ uri: photo.uri }}
                style={{ width: 133, height: 100, alignItems: "center", }}
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
              <Icon name="image" />
              <Text>Pictures</Text>
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button small onPress={this.onSubmit}>
              <Icon name="md-create" />
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  buttonContainer: {}
});

export default PostForm;
