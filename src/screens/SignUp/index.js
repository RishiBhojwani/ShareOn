import { View, Button, Text, ImageBackground, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../Home';


const SignUpScreen = (props) => {

    const [text, setText] = useState("0");
    
    const navigation = useNavigation();

    function onPressSubmit() {
        navigation.navigate("Home", {paramKey: parseInt(text)})
    }

    return (
        <ImageBackground source={require('../../../assets/logofinal.jpg')}
            style={{ marginLeft: 0, height: '100%', width: '100%', }}>
            <View style={{ backgroundColor: "white", borderRadius: 15, height: 50, justifyContent: "center", padding: 20, marginTop: 400, marginLeft: 10, width: "85%" }}>
                <TextInput
                    style={{ height: 50, marginLeft: 10, marginTop: 0 }}
                    placeholder="Amount to invest"
                    onChangeText={newText => setText(newText)}
                    placeholderTextColor="black"

                />
            </View>
            <View style={{width: "80%", marginLeft: 10, marginTop: 20, height: 50}}>
                    <Button 
                        onPress={onPressSubmit}
                        title="Submit"
                        color="#FF0000"
                    />
                </View>

        </ImageBackground>
    );
    
};



export default SignUpScreen;