import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Button, Text, Container, List, ListItem, Content, Icon } from "native-base";
const routes = ["Profile", "Friends", "Find Friends", "Recipes", "Setting"];

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fi.huffpost.com%2Fgen%2F4160780%2Fimages%2Fn-HEALTHY-FOOD-628x314.jpg"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          {/* <Image
            square
            style={{
              height: 80,
              width: 70,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png"
            }}
          /> */}
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={
                    () => {
                      this.props.onNavigate();
                      this.props.navigation.navigate(data);
                    }
                  }
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
          <Button
            full
            danger
          >
            <Text>Logout</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
