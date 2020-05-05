import React, { Component } from "react";

import { Icon } from "react-native-elements";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";

const Coments = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.cardImage} />
        <View style={styles.cardHeader}>
          <Text style={styles.txtheader}>Comentarios</Text>
          <View>
            <View style={styles.timeContainer}>
              <Image
                style={styles.iconData}
                source={{
                  uri: "https://png.icons8.com/color/96/3498db/calendar.png"
                }}
              />
              <Text style={styles.time}>21/03/2020</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.socialBarContainer}>
            <View style={styles.socialBarSection}>
              <TouchableOpacity style={styles.socialBarButton}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://png.icons8.com/material/96/2ecc71/visible.png"
                  }}
                />

                <Text style={styles.socialBarLabel}>13</Text>
                <View style={styles.socialBarSection}>
                  <TouchableOpacity style={styles.socialBarButton}>
                    <View style={styles.styleimput}>
                      <TextInput placeholder="Ingrese comentario" />
                    </View>
                    <View style={styles.botonsend}>
                      <Icon
                        type="material-community"
                        name="send"
                        size={15}
                        color="#4ccfe0"
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <Image
                  style={styles.icon}
                  source={{
                    uri:
                      "https://png.icons8.com/ios-glyphs/75/2ecc71/comments.png"
                  }}
                />

                <Text style={styles.socialBarLabel}>25</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5
  },
  /******** card **************/

  txtheader: {
    color: "black",
    fontWeight: "bold"
  },

  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 2
    },

    backgroundColor: "white"
  },
  cardHeader: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor: "#EEEEEE"
  },
  styleimput: {
    alignItems: "center"
  },
  botonsend:{
   marginLeft: 5
  },

  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
    color: "black"
  },
  description: {
    fontSize: 15,
    flex: 1,
    marginTop: 5,
    marginBottom: 5
  },
  time: {
    fontSize: 13,
    color: "#808080",
    marginTop: 5,
    fontWeight: "bold"
  },
  icon: {
    width: 25,
    height: 25
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5
  },
  timeContainer: {
    flexDirection: "row"
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  },
  socialBarSection: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-end",
    justifyContent: "center"
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Coments;
