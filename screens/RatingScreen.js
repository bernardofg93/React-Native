import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

const RatingScreen = () => {
  const porcent = "81.9%";

  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
    >
  
      <View style={styles.touchList}>
        <View style={styles.viewTxt}>
          <Text style={styles.txt1}> Total Puntalidad </Text>
          <Text style={styles.txt2}>
            Medicion de entregas
          </Text>
          <Text style={styles.porcent}>{porcent}</Text>
        </View>
        <View style={styles.viewTxt}>
          <Text style={styles.txt1}> Total Puntalidad </Text>
          <Text style={styles.txt2}>
            Medicion de entregas
          </Text>
          <Text style={styles.porcent}>{porcent}</Text>
        </View>
        <View style={styles.viewTxt}>
          <Text style={styles.txt1}> Total Puntalidad </Text>
          <Text style={styles.txt2}>
            Medicion de entregas
          </Text>
          <Text style={styles.porcent}>{porcent}</Text>
        </View>
        <View style={styles.viewTxt}>
          <Text style={styles.txt1}> Total Puntalidad </Text>
          <Text style={styles.txt2}>
            Medicion de entregas
          </Text>
          <Text style={styles.porcent}>{porcent}</Text>
        </View>
        <View style={styles.viewTxt}>
        <Text style={styles.txt1}> Total Puntalidad </Text>
          <Text style={styles.txt2}>
            Medicion de entregas
          </Text>
          <Text style={styles.porcent}>{porcent}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 10
  },
  txtHeader: {
    fontSize: 18,
    fontWeight: "bold"
  },
  txt1: {
    fontSize: 12,
    fontWeight: "bold"
  },
  txt2: {
    fontSize: 11
  },
  touchList: {
    alignItems: "center",
    flexDirection: "row"
  },
  viewTxt: {
    alignItems: "center",
    marginRight: 18
  },
  porcent: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  contenedorPrincipal:{
    flex: 1,
    flexDirection: 'column',
    },
    contenedorComentarios:{
        flex:10,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:10
    },

    contenedorComentario:{
        height:80,
        backgroundColor:"#f0f3f4",
        justifyContent:"center",
        alignItems:"center"
    },
    sendButtonContainer:{
        backgroundColor:"#fff", 
        width:50, 
        height:50, 
        borderRadius:100, 
        marginLeft:5,justifyContent:"center", 
        alignItems:"center",
    },
    comentarioTextboxContainer:{ 
        backgroundColor: "#fff", 
        width: "80%", 
        borderRadius: 50, 
        alignItems: "center" }

});

export default RatingScreen;
