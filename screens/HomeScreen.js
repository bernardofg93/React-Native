import React from 'react';

import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.touch}>
        <TouchableOpacity onPress={() => navigation.navigate('Rating')}>
            <Text style={styles.txt}>Go to the RatingScreen -></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Graphics')}>
            <Text style={styles.txt}>go to the graphic -></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Perfil')}>
        <Text style={styles.txt}>go to the profile -></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Coment')}>
        <Text style={styles.txt}>go to the Coments -></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Islide')}>
            <Text style={styles.txt} >Go to the images slide</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.txt} >Go to profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Box')}>
        <Text style={styles.txt} >Go to BoxScreen</Text>
        </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    txt:{
        fontSize: 20,
        fontWeight: "bold",
        color: "blue"
    },
    touch:{
        alignItems: 'center',
        marginVertical: 50,
        backgroundColor: 50
    }
});

export default HomeScreen;