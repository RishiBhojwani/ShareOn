import { ScrollView, View, Text, TextInput, ImageBackground, Pressable, DatePickerIOSBase, Dimensions } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import ProjectionsChart from './ProjectionsChart';
import { LineChart } from 'react-native-chart-kit'

const snpVals = [4001.48, 4743.83, 3645.99, 3154.26, 2815.15, 2657.74]

const data = {
	labels: ["present", "1 year", "2 years", "3 years", "4 years", "5 years"],
	datasets: [
		{
			data: new Array(6)
		}
	],
};

const budget = 1000

const font = 'Roboto'

const chartConfig = {
	backgroundGradientFrom: "#1E2923",
	backgroundGradientFromOpacity: 0,
	backgroundGradientTo: "#08130D",
	backgroundGradientToOpacity: 0.5,
	color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
	barPercentage: 0.5,
	useShadowColorFromDataset: false // optional
};

const ProjectionScreen = (props) => {
	const navigation = useNavigation();

	for (let i = 0; i < snpVals.length; i++) {
		data.datasets[0].data[i] = snpVals[0] - snpVals[i];
	}

	function formatMoners(moners) {
		return Math.floor(moners * 100) / 100;
	}

	return (
		<ScrollView style={{ backgroundColor: '#0a0442', height: '100%', width: '100%' }}>
			<View style={{ marginTop: 60 }}>
				<LineChart
					data={data}
					width={Dimensions.get('window').width}
					height={256}
					verticalLabelRotation={30}
					chartConfig={chartConfig}
					bezier
				/>
			</View>
			<Text style={{ color: 'white', fontSize: 20, fontFamily: font, margin: 20 }}>
				If you invested {formatMoners(budget)} dollars 1 year ago, it would be {formatMoners(budget * snpVals[0] / snpVals[1])} dollars today.
			</Text>
			<Text style={{ color: 'white', fontSize: 20, fontFamily: font, margin: 20 }}>
				If you invested {formatMoners(budget)} dollars 2 years ago, it would be {formatMoners(budget * snpVals[0] / snpVals[2])} dollars today.
			</Text>
			<Text style={{ color: 'white', fontSize: 20, fontFamily: font, margin: 20 }}>
				If you invested {formatMoners(budget)} dollars 3 years ago, it would be {formatMoners(budget * snpVals[0] / snpVals[3])} dollars today.
			</Text>
			<Text style={{ color: 'white', fontSize: 20, fontFamily: font, margin: 20 }}>
				If you invested {formatMoners(budget)} dollars 4 years ago, it would be {formatMoners(budget * snpVals[0] / snpVals[4])} dollars today.
			</Text>
			<Text style={{ color: 'white', fontSize: 20, fontFamily: font, margin: 20 }}>
				If you invested {formatMoners(budget)} dollars 5 years ago, it would be {formatMoners(budget * snpVals[0] / snpVals[5])} dollars today.
			</Text>
			<Pressable onPress={() => navigation.navigate("Sign Up")}
				style={{ marginTop: 30, marginLeft: 20 }}>
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
				style={{ marginTop: -35, marginLeft: 350, paddingBottom: 30 }}>
				<AntDesign name={"areachart"} size={30} color='white' />
			</Pressable>
		</ScrollView>
	);
};

export default ProjectionScreen;