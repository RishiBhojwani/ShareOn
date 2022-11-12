import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
//import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = (props) => {
    


    const navigation = useNavigation();
    return (
        <View>
        <Pressable
                    style={{backgroundColor: '#93A8E1',marginTop: 30, borderRadius: 30, width: 300, height: 65, alignItems: 'center', justifyContent: 'center',}}
                    onPress={() => navigation.navigate('Sign Up')}
                >
                    <Text style={{ color: 'black', fontSize: 30, margin: 10 }}>signup</Text>
                </Pressable>
                <Pressable
                    style={{backgroundColor: '#93A8E1',marginTop: 30, borderRadius: 30, width: 300, height: 65, alignItems: 'center', justifyContent: 'center',}}
                    onPress={() => navigation.navigate('Recommendation')}
                >
                    <Text style={{ color: 'black', fontSize: 30, margin: 10 }}>Recommendation</Text>
                </Pressable>
                <Pressable
                    style={{backgroundColor: '#93A8E1',marginTop: 30, borderRadius: 30, width: 300, height: 65, alignItems: 'center', justifyContent: 'center',}}
                    onPress={() => navigation.navigate('Risk')}
                >
                    <Text style={{ color: 'black', fontSize: 30, margin: 10 }}>Risk</Text>
                </Pressable>
                <Pressable
                    style={{backgroundColor: '#93A8E1',marginTop: 30, borderRadius: 30, width: 300, height: 65, alignItems: 'center', justifyContent: 'center',}}
                    onPress={() => navigation.navigate('Projection')}
                >
                    <Text style={{ color: 'black', fontSize: 30, margin: 10 }}>Projection</Text>
                </Pressable>


                
                </View>
    );
};

export default HomeScreen;