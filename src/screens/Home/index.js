import { View, Text, ImageBackground, Pressable, FlatList, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import data from "../../../assets/data/users";
import stocks from "../../../assets/data/stocks"
import RNSpeedometer from 'react-native-speedometer'

const commerce2021URL = "https://api.usaspending.gov/api/v2/financial_balances/agencies?funding_agency_id=200&fiscal_year=2021";
const commerce2022URL = "https://api.usaspending.gov/api/v2/financial_balances/agencies?funding_agency_id=200&fiscal_year=2022";

const interestURL = "https://data.nasdaq.com/api/v3/datasets/FRED/DTB3.csv?api_key=FkSVhPygAq9xm5moAXJq";


const HomeScreen = ({ route, navigation }) => {

    const { paramKey } = route.params;
    const [isLoading, setLoading] = useState(true);

    const [commerce2021Data, setCommerce2021Amount] = useState(0);
    const [commerce2022Data, setCommerce2022Amount] = useState(0);

    const [interestData, setInterestData] = useState("0,0\n0,0\n0,0\n0,0\n0,0\n0,0\n0,0\n0,0\n0,0\n0,0");

    const [govNum, setGovNum] = useState(50);
    const [interestNum, setInterestNum] = useState(50);
    const [incomeNum, setIncomeNum] = useState(50);
    const [overallNum, setOverallNum] = useState(50);

    useEffect(() => {
        fetch(commerce2021URL)
            .then((response) => response.json()) // get response, convert to json
            .then((json) => {
                setCommerce2021Amount(json.results[0].obligated_amount);
            })
            .catch((error) => alert(error)) // display errors
            .finally(() => setLoading(false)); // change loading state
    }, []);

    useEffect(() => {
        fetch(commerce2022URL)
            .then((response) => response.json()) // get response, convert to json
            .then((json) => {
                setCommerce2022Amount(json.results[0].obligated_amount);
                if (commerce2022Data - commerce2021Data > 0) {
                    setGovNum(75);
                }
                else
                    setGovNum(12);
            })
            .catch((error) => alert(error)) // display errors
            .finally(() => setLoading(false)); // change loading state
    }, []);

    useEffect(() => {
        fetch(interestURL)
            .then((response) => response.text()) // get response, convert to text
            .then((json) => {
                setInterestData(json);

                if (parseFloat(interestData.split(",")[2].split("\n")[0]) - parseFloat(interestData.split(",")[7].split("\n")[0]) < 0) {
                    setInterestNum(75);
                }
                else
                    setInterestNum(40);

                var incomeNumber = (paramKey / 100000.0) * 100;
                setIncomeNum(incomeNumber);
                setOverallNum((govNum + interestNum + incomeNumber) / 3)
            })
            .catch((error) => alert(error)) // display errors
            .finally(() => setLoading(false)); // change loading state
    }, []);


    return (
        <View style={{ height: "100%" }}>
            <View style={{ backgroundColor: '#0a0442', height: '100%', width: '100%' }}>


                <Text style={{ color: 'white', marginLeft: 120, marginTop: 30, fontSize: 40 }}>${paramKey}</Text>
                <View style={{ backgroundColor: "white", borderRadius: 20, }}>
                    <Text style={{ marginLeft: 100, marginTop: 1, fontSize: 30, color: "black" }}>Risk Tolerance:</Text>
                    <View style={{ marginTop: 10, backgroundColor: "white", height: "23%" }}>
                        <RNSpeedometer value={overallNum} size={200} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: "white", borderRadius: 20, marginTop: 40, height: "115%", width: "45%" }}>
                        <Text style={{ color: 'black', marginLeft: 20, marginTop: 1, fontSize: 20 }}>Gov Spending:</Text>
                        {commerce2022Data - commerce2021Data > 0 ? (
                            <Text style={{ marginLeft: 20 }}>
                                +{formatMoney(commerce2022Data - commerce2021Data)} YTD
                            </Text>
                        ) : (
                            <Text style={{ marginLeft: 20 }}>
                                -{formatMoney(commerce2022Data - commerce2021Data)} YTD
                            </Text>
                        )}
                        <View style={{ marginTop: 10 }}>
                            <RNSpeedometer value={govNum} size={100} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", borderRadius: 20, marginTop: 40, marginLeft: 20, height: "115%", width: "45%" }}>
                        <Text style={{ color: 'black', marginLeft: 30, marginTop: 2, fontSize: 20 }}>Interest Rates:</Text>
                        {parseFloat(interestData.split(",")[2].split("\n")[0]) - parseFloat(interestData.split(",")[7].split("\n")[0]) < 0 ? (
                            <Text style={{ marginLeft: 10 }}>
                                {Math.round((parseFloat(interestData.split(",")[2].split("\n")[0]) - parseFloat(interestData.split(",")[7].split("\n")[0])) * 100) / 100}% change this week
                            </Text>
                        ) : (
                            <Text style={{ marginLeft: 10 }}>
                                +{Math.round((parseFloat(interestData.split(",")[2].split("\n")[0]) - parseFloat(interestData.split(",")[7].split("\n")[0])) * 100) / 100}% change this week
                            </Text>
                        )}
                        <View style={{ marginTop: 10 }}>
                            <RNSpeedometer value={interestNum} size={100} />
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: "white", borderRadius: 20, marginTop: 40, marginLeft: 80, height: "25%", width: "60%" }}>
                    <Text style={{ color: 'black', marginLeft: 40, marginTop: 2, fontSize: 20 }}>Amount to Invest:</Text>
                    <View style={{ marginTop: 10, height: 135 }}>
                        <RNSpeedometer value={incomeNum} size={100} />
                    </View>
                </View>

                <View style={{ backgroundColor: '#0a0442', height: '100%', width: '100%' }}>
                    <Pressable onPress={() => navigation.navigate("Sign Up")}
                        style={{ marginTop: 20, marginLeft: 20 }}>
                        <AntDesign name={"login"} size={30} color='white' />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Recommendation", { paramKey: paramKey, overallNum: overallNum })}
                        style={{ marginTop: -30, marginLeft: 100 }}>
                        <AntDesign name={"bulb1"} size={30} color='white' />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Home")}
                        style={{ marginTop: -35, marginLeft: 180 }}>
                        <AntDesign name={"home"} size={30} color='white' />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Risk")}
                        style={{ marginTop: -29, marginLeft: 270 }}>
                        <AntDesign name={"exclamation"} size={30} color='white' />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Projection", { paramKey: paramKey })}
                        style={{ marginTop: -35, marginLeft: 350 }}>
                        <AntDesign name={"areachart"} size={30} color='white' />
                    </Pressable>

                </View>
            </View>
        </View>
    );
};

function formatMoney(x) {
    return "$" + Math.abs(parseInt(x)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default HomeScreen;