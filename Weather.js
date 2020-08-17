import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm:{
        iconName:"weather-lightning-rainy",
        gradient:['#373B44','#4286f4']
    },
    Drizzle:{
        iconName:"weather-rainy",
        gradient:['#005AA7', '#FFFDE4']
    }, 
    Rain:{
        iconName:"weather-pouring",
        gradient:['#373B44','#4286f4']
    }, 
    Snow:{
        iconName:"snowflake",
        gradient:['#005AA7', '#FFFDE4']
    }, 
    Atmosphere:{
        iconName:"weather-pouring",
        gradient:['#89F7FE', '#66A6FF']
    }, 
    Clear:{
        iconName:"weather-sunny",
        gradient:['#F09819', '#edde5d',]
    }, 
    Clouds:{
        iconName:"weather-cloudy",
        gradient:['#2980B9', '#6DD5FA']
    },
}

export default function Weather({temp, condition}){
    return(
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp} °C</Text>
            </View>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name="weather-lightning-rainy" size={86}></MaterialCommunityIcons>
                <Text>{temp}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
     ]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red"
    },
    temp:{
        fontSize:36,
        color:"white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
