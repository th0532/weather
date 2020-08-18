import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm:{
        iconName:"weather-lightning-rainy",
        gradient:['#373B44','#4286f4'],
        title:"Thunderstorm",
        subtitle:"It's thundering. Don't go out."
    },
    Drizzle:{
        iconName:"weather-rainy",
        gradient:['#005AA7', '#FFFDE4'],
        title:"Drizzle",
        subtitle:"It's drizzling. Take your umbrella."
    }, 
    Rain:{
        iconName:"weather-pouring",
        gradient:['#373B44','#4286f4'],
        title:"Rain",
        subtitle:"It's raining. Be careful."
    }, 
    Snow:{
        iconName:"snowflake",
        gradient:['#005AA7', '#66A6FF'],
        title:"Snow",
        subtitle:"It's snowing. Be careful."
    }, 
    Atmosphere:{
        iconName:"weather-pouring",
        gradient:['#66A6FF', '#89F7FE'],
        title:"Atmosphere",
        subtitle:"Atmosphere"
    }, 
    Clear:{
        iconName:"weather-sunny",
        gradient:['#F09819', '#edde5d',],
        title:"Sunny",
        subtitle:"It's sunny. Enjoy your outing."
    }, 
    Clouds:{
        iconName:"weather-cloudy",
        gradient:['#2980B9', '#6DD5FA'],
        title:"Clouds",
        subtitle:"It's a good day to go out."
    },
}

export default function Weather({temp, condition, areaname}){
    return(
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"></MaterialCommunityIcons>
                <Text style={styles.temp}>{parseInt(temp)}°C</Text>
                <Text style={styles.Title}>{areaname}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.Title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.Subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
            
        </LinearGradient>
    )
}

Weather.propTypes = {
    condition: propTypes.oneOf([
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
    },
    Title:{
        color:"white",
        fontSize:38,
        fontWeight:"600",
        marginBottom:10
    },
    Subtitle:{
        color:"white",
        fontWeight:"300",
        fontSize:28
    },
    textContainer:{
        paddingHorizontal:50,
        alignItems:"flex-start"
    }
})
