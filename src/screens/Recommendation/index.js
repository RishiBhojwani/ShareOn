import { ScrollView, View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const cardHeight = '22%'

const RecommendationScreen = ({ route, navigation }) => {
    const { paramKey, overallNum } = route.params;

    return (
        <View style={{ backgroundColor: '#0a0442', width: '100%', height: '100%' }}>
            <View>
                <Text style={{ color: 'white', marginTop: 50, fontSize: 20, margin: 20 }}>
                    Three Recommended Stocks based on personal and market risk allowance:
                </Text>
                {overallNum > 50 ? (
                    <View>
                    <View style={{ backgroundColor: 'white', borderRadius: 20, margin: 20, height: cardHeight, width: "90%", elevation: 3 }}>
                        <Text style={{ margin: 10, fontSize: 35 }}>
                            TMO - Volatility: 70.9{'\n'}

                        </Text>

                        <Text style={{ marginTop: -60, marginLeft: 50, fontSize: 30 }}>
                            Price: $538.68{'\n'}
                        </Text>

                        <Text style={{ marginTop: -25, marginLeft: 65, fontSize: 25, color: "green" }}>
                            +$18.10
                        </Text>
                    </View>
                    <View style={{ backgroundColor: 'white', borderRadius: 20, margin: 20, height: "25%", width: "90%", elevation: 3 }}>
                        <Text style={{ margin: 10, fontSize: 30 }}>
                            AVGO - Volatility: 88.2{'\n'}

                        </Text>

                        <Text style={{ marginTop: -40, marginLeft: 50, fontSize: 30 }}>
                            Price: $518.09{'\n'}
                        </Text>

                        <Text style={{ marginTop: -25, marginLeft: 65, fontSize: 25, color: "green" }}>
                            +$2.27
                        </Text>


                    </View>
                    <View style={{ backgroundColor: 'white', borderRadius: 20, margin: 20, height: cardHeight, width: "90%", elevation: 3 }}>

                        <Text style={{ margin: 10, fontSize: 30 }}>
                            TSLA - Volatility: 81.3{'\n'}

                        </Text>

                        <Text style={{ marginTop: -50, marginLeft: 50, fontSize: 30 }}>
                            Price: $195.97{'\n'}
                        </Text>

                        <Text style={{ marginTop: -25, marginLeft: 65, fontSize: 25, color: "green" }}>
                            +$5.25
                        </Text>


                    </View>
                </View>
                ) : (
                    <View>
                        <View style={{ backgroundColor: 'white', borderRadius: 20, margin: 20, height: cardHeight, width: "90%", elevation: 3 }}>
                            <Text style={{ margin: 10, fontSize: 35 }}>
                                BAC - Volatility: 0.09{'\n'}

                            </Text>

                            <Text style={{ marginTop: -60, marginLeft: 50, fontSize: 30 }}>
                                Price: $38.41{'\n'}
                            </Text>

                            <Text style={{ marginTop: -25, marginLeft: 65, fontSize: 25, color: "green" }}>
                                +$0.28
                            </Text>
                        </View>
                        <View style={{ backgroundColor: 'white', borderRadius: 20, margin: 20, height: "25%", width: "90%", elevation: 3 }}>
                            <Text style={{ margin: 10, fontSize: 30 }}>
                                PFE - Volatility: 0.06{'\n'}

                            </Text>

                            <Text style={{ marginTop: -50, marginLeft: 50, fontSize: 30 }}>
                                Price: $47.60{'\n'}
                            </Text>

                            <Text style={{ marginTop: -25, marginLeft: 65, fontSize: 25, color: "green" }}>
                                +$0.22
                            </Text>


                        </View>
                        <View style={{ backgroundColor: 'white', borderRadius: 20, margin: 20, height: cardHeight, width: "90%", elevation: 3 }}>

                            <Text style={{ margin: 10, fontSize: 35 }}>
                                KO - Volatility: 0.05{'\n'}

                            </Text>

                            <Text style={{ marginTop: -60, marginLeft: 50, fontSize: 30 }}>
                                Price: $97.96{'\n'}
                            </Text>

                            <Text style={{ marginTop: -25, marginLeft: 65, fontSize: 25, color: "green" }}>
                                +$0.44
                            </Text>


                        </View>
                    </View>
                )}



            </View>
            <Pressable onPress={() => navigation.navigate("Sign Up")}
                style={{ marginTop: -30, marginLeft: 20 }}>
                <AntDesign name={"login"} size={30} color='white' />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Recommendation")}
                style={{ marginTop: -30, marginLeft: 100 }}>
                <AntDesign name={"bulb1"} size={30} color='white' />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Home", { paramKey: paramKey })}
                style={{ marginTop: -35, marginLeft: 180 }}>
                <AntDesign name={"home"} size={30} color='white' />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Risk")}
                style={{ marginTop: -29, marginLeft: 270 }}>
                <AntDesign name={"exclamation"} size={30} color='white' />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Projection")}
                style={{ marginTop: -35, marginLeft: 350 }}>
                <AntDesign name={"areachart"} size={30} color='white' />
            </Pressable>


        </View>
    );
};

export default RecommendationScreen;