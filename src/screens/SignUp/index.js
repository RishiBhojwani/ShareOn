import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = (props) => {
    


    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../../../assets/logofinal.jpg')}
        style={{marginLeft:0,height: '100%',width: '100%',}}>
         <View style={{ height: '100%', width: '100%'}}>
        <Pressable onPress={() => navigation.navigate("Sign Up")}
                        style={{marginTop: 700, marginLeft: 20}}>
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
                </ImageBackground>
    );
};

export default HomeScreen;