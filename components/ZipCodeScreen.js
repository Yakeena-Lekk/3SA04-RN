import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList ,TouchableHighlight, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
      
        <View style = {styles.list} >
            <Text style = {styles.font}>{place}</Text>
            <Text style = {styles.font}>{code}</Text>
        </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        < ImageBackground source={require('../bg.jpg')} style={styles.back}>
        <View style = {styles.back}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
        </View>
        </ ImageBackground>
    );

}

const styles = StyleSheet.create({
    back:{
        height : '100%',
        width : '100%',
    },
    list:{
        backgroundColor : 'black',
        opacity : 0.5,
        flexDirection : 'row',
        justifyContent: 'space-between',
        padding : 10,
        borderColor : 'black',
        borderWidth: 3,
        borderRadius:10,
        marginLeft: 20,
        marginRight:20,
        marginTop: 20,

    },
    font:{
        fontSize: 30,
        color : 'white',
    }
});