import React from "react";

import { Icon, AirbnbRating } from "react-native-elements";

import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";

const Profile = () => {
  return (
    <ScrollView>
      
      <View style={styles.container}>
      <ScrollView
      style={styles.scrollImg}
      pagingEnabled
      horizontal

    >
      
      <Image source={require("../assets/trailer2.jpg")} resizeMode="cover"
       resizeMode = 'cover'
       style={{height: 260, alignItems: 'center'}}
       
      />


    </ScrollView>

          <Image
            source={require("../assets/Profile.jpeg")}
            style={styles.avatar}
          />
          <View style={styles.rating}>
            <Text style={styles.name}>Miguel Angel Melo</Text>
            <AirbnbRating
              count={5}
              defaultRating={3}
              size={25}
              showRating={false}
              readonly={true}
              startingValue={3}
            />
            <View style={styles.editbotom}>
            <TouchableOpacity>
              <Icon
                type="material-community"
                name="account-edit"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          </View>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollcart}
        >
          <View style={styles.cardganancias}>
            <Text View style={styles.txtganancias}>
              GANANCIAS
            </Text>
            <Text style={styles.title}>Generales</Text>
            <Text style={styles.totalganancia}>$250,500.00</Text>
          </View>
          <View style={styles.cardganancias}>
            <Text View style={styles.txtganancias}>
              GANANCIAS
            </Text>
            <Text style={styles.title}>Generales</Text>
            <Text style={styles.totalganancia}>$250,500.00</Text>
          </View>
        </ScrollView>
        <ScrollView
          horizontal={true}
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollcart}
        >
          <View style={styles.card}>
            <Text style={styles.cardTittle}>Fletes hechos</Text>
            <Text style={styles.cartdato}> 24</Text>
            <Text style={styles.cardgenerales}>Generales</Text>
            <Text></Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Fletes aceptados</Text>
            <Text style={styles.cartdato}> 24</Text>
            <Text style={styles.cardgenerales}>Generales</Text>
            <Text></Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Fletes cancelados</Text>
            <Text style={styles.cartdato}> 24</Text>
            <Text style={styles.cardgenerales}>Generales</Text>
            <Text></Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Fletes hechos</Text>
            <Text style={styles.cartdato}> 24</Text>
            <Text style={styles.cardgenerales}>Semanales</Text>
            <Text></Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Fletes aceptados</Text>
            <Text style={styles.cartdato}> 24</Text>
            <Text style={styles.cardgenerales}>Semanales</Text>
            <Text></Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Fletes cancelados</Text>
            <Text style={styles.cartdato}> 24</Text>
            <Text style={styles.cardgenerales}>Semanales</Text>
            <Text></Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Fletes hechos</Text>
            <Text style={styles.cartdato}> 24</Text>
            <Text style={styles.cardgenerales}>Mensuales</Text>
            <Text></Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Fletes aceptados</Text>
            <Text style={styles.cartdato}> 24</Text>
            <Text style={styles.cardgenerales}>Mensuales</Text>
            <Text></Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Fletes cancelados</Text>
            <Text style={styles.cartdato}> 24</Text>
            <Text style={styles.cardgenerales}>Mensuales</Text>
            <Text></Text>
          </View>
        </ScrollView>
   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f9f9"
  },
  scrollImg:{
    height:260,
  },
  header: {
    backgroundColor: "#4ccfe0",
    height: 260
  },
  editbotom: {
    alignItems: "flex-end"
  },
  rating: {
    marginTop: 130
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:199
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  Calificacion: {
    textAlign: "center"
  },
  totalganancia: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#52be80",
    textAlign: "center",
    marginTop: -5
  },
  txtganancias: {
    textAlign: "center",
    fontWeight: "bold"
  },
  title: {
    textAlign: "center"
  },
  iconleft: {
    alignItems: "flex-start",
    marginTop: 100
  },
  iconright: {
    alignItems: "flex-end",
    marginBottom: 100
  },
  scrollcart: {
    margin: 5
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 30,
    height: 100,
    margin: 5,
    marginLeft: 20,
    marginRight: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  cardTittle: {
    fontWeight: "bold"
  },
  cartdato: {
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold"
  },
  cardgenerales: {
    textAlign: "center",
    color: "#CD5C5C",
    fontWeight: "bold"
  },
  cardganancias: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 60,
    margin: 5,
    marginLeft: 40,
    marginRight: 40,
    height: 100,
    justifyContent: "center"
  },

  profileCard: {
    height: 200,
    alignItems: "center",
    marginTop: 20
  }
});

export default Profile;
