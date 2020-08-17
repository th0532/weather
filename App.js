import React, {useState, useEffect} from 'react';
import {Alert, View, Text} from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios'

const API_KEY = "3a6f877860fbbef341884a58bbf6251b";
export default function App(){
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState();
  const [condition, setCondition] = useState("Clear");

  const getWeather = async(latitude, longitude) =>{
    const {data:{
      main:{temp},
      weather
    }} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      setIsLoading(false);
      setTemp(temp);
      setCondition(weather[0].main);
    }
   getLocation = async() =>{
     try {
        await Location.requestPermissionsAsync();
        const {
          coords:{latitude, longitude}
        } = await Location.getCurrentPositionAsync()

        getWeather(latitude, longitude)
        
     } catch (error) {
        Alert.alert("can't find you", "So sad");
     }
    
  } 

  useEffect(() => {
    getLocation();
  });

    return (
      <>
      {isLoading ? <Loading /> : <Weather temp={temp} condition={condition}/>}
      </>
    );
}
