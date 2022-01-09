import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  ImageBackground,
  Image,
} from "react-native";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import db from "../config";
import firebase from "firebase";

export default class CreateWorkout extends React.Component {
  constructor() {
    super();
    this.state = {
      calendar: [],
      selected: "0",
      modalVisible: false,
      name: "",
      category: "",
      duration: "",
      description: "",
      date: "",
      exercises: [],
    };
  }
  deleteWorkout = (id) => {
    db.collection("workouts")
      .doc(id)
      .delete()
      .then(() => {
        alert("Deleted Successfully");
      })
      .catch(() => {
        alert("Something went wrong. Try again later.");
      });
    this.getWorkout();
  };
  getDates = () => {
    this.setState({ calendar: [] });
    var temp = [];
    for (var i = 0; i < 7; i++) {
      var data = moment().add(i, "days").format("llll");
      var date = data.slice(5, 11);
      var t = data.slice(8, 11);
      var day = data.slice(0, 3);
      var year = data.slice(13, 17);
      var final = { date: date, day: day, year: year, complete: data, t: t };
      temp.push(final);
    }
    this.setState({ calendar: temp, selected: 0 });
  };
  addWorkout = () => {
    db.collection("workouts").add({
      email: firebase.auth().currentUser.email,
      name: this.state.name,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
      category: this.state.category,
    });
    this.setState({ modalVisible: false });
    alert("Saved Successfully!");
    this.getWorkout();
  };
  getWorkout = async () => {
    this.setState({
      exercises: [],
    });
    var response = await db
      .collection("workouts")
      .where("email", "==", firebase.auth().currentUser.email)
      .where(
        "date",
        "==",
        this.state.calendar[this.state.selected].complete.slice(0, 17)
      )
      .get();
    response.docs.map((a) => {
      var temp = this.state.exercises;
      var data = a.data();
      data.id = a.id;
      temp.push(data);
      this.setState({ exercises: temp });
    });
  };
  componentDidMount() {
    this.getDates();
    this.getWorkout();
  }
  render() {
    if (this.state.calendar.length === 0) {
      return (
        <View>
          <Text>Fetching workout details! Hang in there!</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{ flex: 1, marginTop: "10%", backgroundColor: "lavender" }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            {this.state.calendar.map((item, index) => {
              return (
                <TouchableOpacity
                key={index}
                  style={{
                    borderWidth: 0.5,
                    borderColor:
                      this.state.selected === index ? "#4700b3" : "white",
                    padding: 5,
                    backgroundColor: "white",
                    width: "13%",
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 10,
                    shadowOffset: {
                      width: 0.5,
                      height: 0.5,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    shadowColor: "#4700b3",
                  }}
                  onPress={() => {
                    this.setState({ selected: index, exercises:[] });
                    this.getWorkout();
                  }}
                >
                  <Text
                    style={{
                      color:
                        this.state.selected === index ? "#4700b3" : "black",
                      fontSize: this.state.selected === index ? 14 : 12,
                    }}
                  >
                    {item.day}
                  </Text>
                  <Text
                    style={{
                      color:
                        this.state.selected === index ? "#4700b3" : "black",
                      fontSize: this.state.selected === index ? 14 : 12,
                    }}
                  >
                    {item.t}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text
            style={{
              fontSize: 18,
              alignSelf: "center",
              marginTop: 30,
              fontWeight: "bold",
            }}
          >
            {this.state.calendar[this.state.selected]
              ? this.state.calendar[this.state.selected].complete.slice(0, 17)
              : ""}
          </Text>

          <ScrollView>
            {this.state.exercises.length === 0 ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center", 
                  marginTop:'50%'
                }}
              >
                <Text style={{fontFamily:'Verdana', fontSize:15}}>Your workouts will appear here</Text>
              </View>
            ) : (
              this.state.exercises.map((d) => {
                return (
                  <View
                  key={d.id}
                    style={{
                      marginTop: 10,
                      backgroundColor: "white",
                      width: "90%",
                      paddingVertical: 10,
                      alignSelf: "center",
                      borderRadius: 10,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: "5%",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                        {d.name}
                      </Text>
                      <Text style={{ color: "grey", fontSize: 16 }}>
                        {d.duration}
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        marginHorizontal: "5%",
                        color: "grey",
                      }}
                    >
                      {d.category}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: "5%",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>{d.description}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          this.deleteWorkout(d.id);
                        }}
                      >
                        <FontAwesome name="trash-o" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })
            )}
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                modalVisible: true,
                date: this.state.calendar[this.state.selected].complete.slice(
                  0,
                  17
                ),
              });
            }}
            style={{
              backgroundColor: "white",
              width: 50,
              height: 50,
              alignSelf: "center",
              borderRadius: 25,
              marginVertical: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
          >
            <View
              style={{
                backgroundColor: "lavender",
                width: "100%",
                height: 800,
                alignSelf: "center",
                marginTop: 30,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.setState({ modalVisible: false });
                }}
              >
                <Entypo name="cross" size={24} color="black" />
              </TouchableOpacity>
              <View style={styles.textInputView}>
                <MaterialCommunityIcons
                  name="weight-lifter"
                  size={24}
                  color="black"
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Name of Workout"
                  placeholderTextColor="#4700b3"
                  onChangeText={(text) => {
                    this.setState({ name: text });
                  }}
                />
              </View>
              <View style={styles.textInputView}>
                <MaterialIcons name="category" size={24} color="black" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Category of Workout"
                  placeholderTextColor="#4700b3"
                  onChangeText={(text) => {
                    this.setState({ category: text });
                  }}
                />
              </View>
              <View style={styles.textInputView}>
                <Ionicons name="timer" size={24} color="black" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Duration of Workout"
                  placeholderTextColor="#4700b3"
                  onChangeText={(text) => {
                    this.setState({ duration: text });
                  }}
                />
              </View>
              <View style={styles.textInputView}>
                <FontAwesome5 name="calendar" size={24} color="black" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Date"
                  placeholderTextColor="#4700b3"
                  value={this.state.calendar[
                    this.state.selected
                  ].complete.slice(0, 17)}
                />
              </View>
              <View style={styles.textInputView}>
                <MaterialIcons name="description" size={24} color="black" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Description of Workout"
                  placeholderTextColor="#4700b3"
                  multiline={true}
                  onChangeText={(text) => {
                    this.setState({ description: text });
                  }}
                />
              </View>

              <TouchableOpacity
                onPress={() => {
                  this.addWorkout();
                }}
                style={{
                  borderWidth: 2,
                  width: "50%",
                  height: 40,
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                  borderColor: "#4700b3",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Verdana",
                    color: "#4700b3",
                    fontWeight: "bold",
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: "90%",
    height: 40,
    paddingLeft: 20,
    fontFamily: "Verdana",
  },
  textInputView: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#4700b3",
    width: "80%",
    alignSelf: "center",
    height: 40,
    alignItems: "center",
    marginTop: 20,
  },
});
