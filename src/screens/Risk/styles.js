import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: '#93A8E1',
        marginTop: 30,
        borderRadius: 30,
        width: 300,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 48,
    },
    movieText: {
        fontSize: 26,
        fontWeight: "200",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
    },
    description: {
        textAlign: "center",
        marginBottom: 18,
        fontWeight: "200",
        color: "green",
    },

});
 export default styles;