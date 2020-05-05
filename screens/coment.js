
import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions,
    TouchableHighlight,
    Button
} from 'react-native';

import { Icon, Avatar, Divider } from 'react-native-elements';


let screenWidth = Dimensions.get('window').width;

const coment = () => {
    return(
            <View style={styles.comentPanel}>
                <View style={styles.headerPost}>

                    <Avatar
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold" }}>Jose Casas</Text>
                        <Text style={{ fontSize: 11 }}>27/06/2019 15:42</Text>
                    </View>

                </View>

                <View style={styles.centerPost}>
                    <Text style={{marginLeft:40, marginRight:20}}>Muy buen viaje</Text>
                </View>

                <Divider style={styles.divider}/>

                <View style={styles.footerPost}>
                    <TouchableOpacity>
                    <View style={{ marginLeft:5 }}>
                        <Icon type="material-community" name="star-outline" size={23} color="#566573" />
                    </View>
                    </TouchableOpacity>
                    <Text style={{color:"#4ccfe0", fontSize:15, marginLeft:4}}>8</Text>
                    <TouchableOpacity>
                    <View style={{ marginLeft: 10 }}>
                        <Icon type="material-community" name="dots-horizontal" size={18} color="#566573" />
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
    );
}
const styles = StyleSheet.create({


    comentPanel: {
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f9f9",
        borderRadius: 10,
        marginTop: 10,
    },
    headerPost: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        marginTop:5
    },
    centerPost: {
        width: "90%",
    },
    footerPost: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        marginTop:5,
        marginBottom:5
    },
    divider:{
        backgroundColor:"#d5d8dc",
        width:"85%",
        marginTop:5
    }


});

export default coment;