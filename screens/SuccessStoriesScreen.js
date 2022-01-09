import React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import db from "../config";

export default class SuccessStories extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
    };
  }
  getStories = async () => {
    var response = await db.collection("successStories").get();
    response.docs.map((p) => {
      var temp = this.state.stories;
      temp.push(p.data());
      this.setState({ stories: temp });
    });
  };
  componentDidMount() {
    this.getStories();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "lavender" }}>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontFamily: "Verdana",
              fontSize: 20,
              marginTop: "10%",
              textAlign: "center",
            }}
          >
            Success Stories
          </Text>
        </View>
        <ScrollView>
          <Image
            source={require("../assets/poster.png")}
            style={{
              marginTop: "15%",
              width: "90%",
              height: 200,
              borderRadius: 10,
              alignSelf: "center",
            }}
          />

          <Text style={{ marginTop: 40, marginLeft: "5%", fontWeight: "600" }}>
            Popular Posts
          </Text>

          <ScrollView horizontal={true}>  
            {this.state.stories.length === 0 ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{marginTop:50, textAlign:'center'}}>Loading...</Text>
              </View>
            ) : (
              this.state.stories.map((d,i) => {
                return (
                  <TouchableOpacity
                  key={i}
                    onPress={() => {
                      this.props.navigation.navigate(
                        "Success Stories Details",
                        { story: d }
                      );
                    }}
                  >
                    <ImageBackground
                      source={{ uri: d.image }}
                      style={{
                        width: Dimensions.get("window").width - 150,
                        height: 300,
                        marginHorizontal: 10,
                        borderRadius: 20,
                        overflow: "hidden",
                        marginTop: 20,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "rgba(255,255,255,0.8)",
                          width: "90%",
                          alignSelf: "center",
                          borderRadius: 20,
                          position: "absolute",
                          bottom: 20,
                          padding: 10,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text>{d.highlight}</Text>
                          <Text>{d.time}</Text>
                        </View>
                        <Text
                          style={{ fontWeight: "600", fontSize: 18 }}
                          numberOfLines={3}
                        >
                          {d.title}
                        </Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                );
              })
            )}
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}
