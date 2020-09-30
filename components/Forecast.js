import React from 'react';
import { View, Text,  StyleSheet} from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.layout}>
            <Text style={styles.normal} >{props.main}</Text>
            <Text style={styles.small} >{props.description}</Text>
            <View>
                <Text style={styles.normal } >{props.temp} <Text style={styles.small}>°C</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    layout:{
      alignItems :'center',  
    },
    normal :{
        marginTop : 20,
        fontSize: 30,
        color : 'white', 
    },
    small:{
        fontSize:20,
        color: 'white',
        marginTop:20,
    }
})