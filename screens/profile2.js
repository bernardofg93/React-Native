import React from "react";

import { Text, View, StyleSheet, TextInput, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Profile from "./Profile";

const Profile2 = () => {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#051937", "#003455", "#005171", "#006f89", "#008f9d"]}
        style={{ height: "100%" }}
      >
        <View style={styles.header}>
          <Image
            source={require("../assets/SoloLogo-Flet.png")}
            style={styles.imgHeader}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
    header:{
     alignItems: "center"
    },
  imgHeader: {
    height: 200,
    width: 200,
    alignItems: "center"
  }
});

export default Profile2;
