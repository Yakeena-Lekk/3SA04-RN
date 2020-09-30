import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.cover}>
                <Text>Zip Code</Text>
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
