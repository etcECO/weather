import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#007ADF"],
        title: "뇌우",
        subtitle: "이런 날 밖을 나가시게요...?"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "이슬비",
        subtitle: "창밖에 보슬보슬 내리는 이슬비"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "비",
        subtitle: "나갈 때 우산 꼭 챙기세요!"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "눈",
        subtitle: "창밖을 보라 흰 눈이 내린다♪"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#2C3E50","#BDC3C7"],
        title: "박무",
        subtitle: "어...? 한국에서 이런 날씨가 뜰 리가 없는데...?"
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#2C3E50","#BDC3C7"],
        title: "연무",
        subtitle: "어...? 한국에서 이런 날씨가 뜰 리가 없는데...?"
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#2C3E50","#BDC3C7"],
        title: "황사",
        subtitle: "공기가 안 좋아요... 밖이 누렇네요...?"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#2C3E50","#BDC3C7"],
        title: "안개",
        subtitle: "안개가 껴서 밖이 잘 안보여요. 조심하세요!"
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ["#2C3E50","#4CA1AF"],
        title: "스콜",
        subtitle: "어...? 한국에서 이런 날씨가 뜰 리가 없는데...?"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#00C6FF", "#0072FF"],
        title: "태풍",
        subtitle: "이런 날 밖을 나가면 큰일납니다."
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "맑음",
        subtitle: "매일 똑같지만, 유독 맑은 날"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC","#304352"],
        title: "흐림",
        subtitle: "흐린 날, 축축 쳐저도 힘내세요!"
    }
};

export default function Weather({ temp, condition }){
    return (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
    >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons
                size={120} 
                name={weatherOptions[condition].iconName} 
                color="white"
            />
            <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={[styles.halfContainer, styles.textContainer]}>
            <Text style={styles.title}>
                {weatherOptions[condition].title}
            </Text>
            <Text style={styles.subtitle}>
                {weatherOptions[condition].subtitle}
            </Text>
        </View>
    </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 60,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 64,
        fontWeight: "bold",
        marginBottom: 5
    },
    subtitle: {
        fontWeight: "normal",
        color: "white",
        fontSize: 32
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})