import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ActivityIndicator,
    FlatList,
    ImageBackground,
    Pressable
} from "react-native";

const commerce2021URL = "https://api.usaspending.gov/api/v2/financial_balances/agencies?funding_agency_id=200&fiscal_year=2021";
const commerce2022URL = "https://api.usaspending.gov/api/v2/financial_balances/agencies?funding_agency_id=200&fiscal_year=2022";

const interestURL = "https://data.nasdaq.com/api/v3/datasets/FRED/DTB3.csv?api_key=FkSVhPygAq9xm5moAXJq";

const RiskScreen = (props) => {

    const [isLoading, setLoading] = useState(true);

    const [commerce2021Data, setCommerce2021Amount] = useState(0);
    const [commerce2022Data, setCommerce2022Amount] = useState(0);

    const [interestData, setInterestData] = useState("0,0\n0,0\n0,0\n0,0\n0,0\n0,0\n0,0\n0,0\n0,0\n0,0");

    


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
            })
            .catch((error) => alert(error)) // display errors
            .finally(() => setLoading(false)); // change loading state
    }, []);

    useEffect(() => {
        fetch(interestURL)
            .then((response) => response.text()) // get response, convert to text
            .then((json) => {
                setInterestData(json);
                //setInterestTodayAmount(json[0].Value);
                //setInterestWeekPriorAmount(json[6].Value);
            })
            .catch((error) => alert(error)) // display errors
            .finally(() => setLoading(false)); // change loading state
    }, []);


    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <View>
                    <Text style={styles.title}>Risk Assessment</Text>
                    <View style={{ borderBottomWidth: 1, marginBottom: 12 }}></View>
                    <Text style={styles.movieText}>
                        Government Spending: 
                    </Text>
                        {commerce2022Data - commerce2021Data > 0? (
                            <Text style={styles.movieText}>
                                +{formatMoney(commerce2022Data - commerce2021Data)} year to date. Invest riskier.
                            </Text>
                        ):(
                            <Text style={styles.movieText}>
                                -{formatMoney(commerce2022Data - commerce2021Data)} year to date. Invest safer.
                            </Text>
                        )}
                    <Text style={styles.movieText}>
                        Interest Rate: 
                    </Text>
                        {parseFloat(interestData.split(",")[2].split("\n")[0]) - parseFloat(interestData.split(",")[7].split("\n")[0]) < 0? (
                            <Text style={styles.movieText}>
                                {Math.round((parseFloat(interestData.split(",")[2].split("\n")[0]) - parseFloat(interestData.split(",")[7].split("\n")[0]))*100)/100}% change in week. Invest riskier.
                            </Text>
                        ):(
                            <Text style={styles.movieText}>
                                +{Math.round((parseFloat(interestData.split(",")[2].split("\n")[0]) - parseFloat(interestData.split(",")[7].split("\n")[0]))*100)/100}% change in week. Invest safer.
                            </Text>
                        )}  

                </View>
            )}
            <View style={{ backgroundColor: '#0a0442', height: '100%', width: '100%' }}>
                <Pressable onPress={() => navigation.navigate("Sign Up")}
                    style={{ marginTop: 450, marginLeft: 20 }}>
                    <AntDesign name={"login"} size={30} color='white' />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Recommendation")}
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
                <Pressable onPress={() => navigation.navigate("Projection")}
                    style={{ marginTop: -35, marginLeft: 350 }}>
                    <AntDesign name={"areachart"} size={30} color='white' />
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

function formatMoney(x) {
    return "$"+Math.abs(parseInt(x)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function csvJSON(csv){

    var lines=csv.split("\n");
  
    var result = [];
  
    // NOTE: If your columns contain commas in their values, you'll need
    // to deal with those before doing the next step 
    // (you might convert them to &&& or something, then covert them back later)
    // jsfiddle showing the issue https://jsfiddle.net/
    var headers=lines[0].split(",");
  
    for(var i=1;i<lines.length;i++){
  
        var obj = {};
        var currentline=lines[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
  
    }
  
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }

export default RiskScreen;