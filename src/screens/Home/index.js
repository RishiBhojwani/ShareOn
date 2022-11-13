import { View, Text, ImageBackground, Pressable,FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import data from "../../../assets/data/users";
import stocks from "../../../assets/data/stocks"


const HomeScreen = (props) => {
    
    const ItemSeperatorView = () => {
        return (
            <View
                style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8' }}
            />
        )
    }
    

      
    const navigation = useNavigation();
    return (
        
        <View style={{ backgroundColor: '#0a0442', height: '100%', width: '100%'}}>
            <Text style={{color: 'white',fontSize: 40,marginLeft:50, marginTop:40}}>$</Text>
            <Text style={{color: 'white',marginLeft:100, marginTop:-53,fontSize: 40}}>{data[1].income}</Text>
            <Text style={{color: 'white',marginLeft:10, marginTop:100,fontSize: 20}}>Income:</Text>
            <Text style={{color: 'white',marginLeft:10, marginTop:1,fontSize: 20}}>Unemployment:</Text>
            <Text style={{color: 'white',marginLeft:10, marginTop:1,fontSize: 20}}>S&P:</Text>
            <FlatList
            data={stocks}
            renderItem={({item}) => {
                return (
                    <Text style={{fontSize:50, color:"white"}}>{item.name}</Text>
                );
            }}
            keyExtractor={item => item.id}
            />

        <View style={{ backgroundColor: '#0a0442', height: '100%', width: '100%'}}>
        <Pressable onPress={() => navigation.navigate("Sign Up")}
                        style={{marginTop: 490, marginLeft: 20}}>
                        <AntDesign name={"login"} size={30} color='white' />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Recommendation")}
                        style={{marginTop: -30, marginLeft: 100}}>
                        <AntDesign name={"bulb1"} size={30} color='white' />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Home")}
                        style={{marginTop: -35, marginLeft: 180}}>
                        <AntDesign name={"home"} size={30} color='white' />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Risk")}
                        style={{marginTop: -29, marginLeft: 270}}>
                        <AntDesign name={"exclamation"} size={30} color='white' />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Projection")}
                        style={{marginTop: -35, marginLeft: 350}}>
                        <AntDesign name={"areachart"} size={30} color='white' />
                    </Pressable>

                    </View>
                </View>
    );
};

export default HomeScreen;