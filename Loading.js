import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading(){
    return <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>날씨를 불러오고 있습니다.</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text :{
        color: "#2C2C2C",
        fontSize: 50
    }
});