import React from "react";

import { View, Text, StyleSheet, TextInput } from "react-native";

import { Avatar } from "react-native-elements";

import Icon from "react-native-vector-icons/AntDesign";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.avatar}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          }}
        />
      </View>
      <View style={styles.containerOne}>
        <Icon
          raised
          name="pluscircleo"
          size={100}
          onPress={() => console.log("hello")}
        />
      </View>
      <View style={styles.parthree}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#f2f2f2",
    height: "100%",
    alignItems: "center"
    
  },
  containerOne: {
    height: 100,
    width: 100,
    alignSelf: "flex-start",
    backgroundColor: "red"
  },
  parthree: {

  }
});

export default BoxScreen;
