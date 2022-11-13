import { View, Text, ImageBackground, Pressable,FlatList,ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import data from "../../../assets/data/users";
import stocks from "../../../assets/data/stocks"
import RNSpeedometer from 'react-native-speedometer'

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
        <View style={{height:"100%"}}>
        <View style={{ backgroundColor: '#0a0442', height: '100%', width: '100%'}}>
            
            
            <Text style={{color: 'white',fontSize: 40,marginLeft:50, marginTop:30}}>$</Text>
            <Text style={{color: 'white',marginLeft:100, marginTop:-53,fontSize: 40}}>{data[1].income}</Text>
            <View style={{backgroundColor:"white",borderRadius: 20, }}>
            <Text style={{marginLeft:110, marginTop:1,fontSize: 30,color:"black"}}>Overall Risk</Text>
            <View style={{marginTop:10,  backgroundColor:"white",height:"23%"}}>
            <RNSpeedometer value={10} size={200}/>
            </View>
            </View>
            <View  style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <View style={{backgroundColor:"white",borderRadius: 20,marginTop:40,height:"115%" ,width:"45%"}}>
            <Text style={{color: 'black',marginLeft:20, marginTop:1,fontSize: 20}}>Gov Spending:</Text>    
            <Text style={{color: 'black',marginLeft:50, marginTop:1,fontSize: 20}}>text</Text>
            <View style={{marginTop:10}}>
            <RNSpeedometer value={30} size={100}/>
            </View>
            </View>
            <View style={{backgroundColor:"white",borderRadius: 20,marginTop:40,marginLeft:20,height:"115%",width:"45%" }}>
            <Text style={{color: 'black',marginLeft:30, marginTop:2,fontSize: 20}}>Interest Rates:</Text>
            <Text style={{color: 'black',marginLeft:60, marginTop:1,fontSize: 20}}>Text</Text>
            <View style={{marginTop:10}}>
            <RNSpeedometer value={50} size={100}/>
            </View>
            </View>
            </View>
            <View style={{backgroundColor:"white",borderRadius: 20,marginTop:40,marginLeft:80,height:"25%",width:"60%" }}>
            <Text style={{color: 'black',marginLeft:90, marginTop:2,fontSize: 20}}>S&P:</Text>
            <Text style={{color: 'black',marginLeft:90, marginTop:2,fontSize: 20}}>text:</Text>
            <View style={{marginTop:10, height: 135}}>
            <RNSpeedometer value={90} size={100}/>
            </View>
            </View>
        
        <View style={{ backgroundColor: '#0a0442', height: '100%', width: '100%'}}>
        <Pressable onPress={() => navigation.navigate("Sign Up")}
                        style={{marginTop: 20, marginLeft: 20}}>
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
                </View>
    );
};

export default HomeScreen;