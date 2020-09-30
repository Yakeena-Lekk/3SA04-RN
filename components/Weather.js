import React, { useState ,useEffect} from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';

const apiKey = 'ae2b10c1fab1416e7d5a5ffa25fa45f4'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {              
   
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=${apiKey}`)
                   .then((response) => response.json())
                   .then((json) => {
                       setForecastInfo({
                           main: json.weather[0].main,
                           description: json.weather[0].description,
                           temp: json.main.temp
                       });
                   })
                   .catch((error) => {
                       console.warn(error);
                   });
           }
       }, [props.zipCode])   

    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.cover}>
                <Text style= {styles.small}> zipCode is {props.zipCode}</Text>
                <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>

        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        marginTop : 20,
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    cover:{
        backgroundColor : 'black',
        width :'100%',
        height :'45%',
        opacity : 0.5,
        justifyContent :'center',
        alignItems:'center',
    },
    small : {
        fontSize: 20,
        color : 'white',
    },
});
