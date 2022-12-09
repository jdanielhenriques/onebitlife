import React from "react";
import { View, StyleSheet } from "react-native";

import Lottie from "lottie-react-native";

export default function LifeStatus() {
  return (
    <View styles={styles.container}>
      <Lottie
        source={require("../../../assets/education/education-100.json")}
        autoPlay={true}
        loop={true}
        style={styles.educacaoAnimacao}
      />
      <Lottie
        source={require("../../../assets/money/money-100.json")}
        autoPlay={true}
        loop={true}
        style={styles.financasAnimacao}
      />
      <Lottie
        source={require("../../../assets/robot/robot-100-100.json")}
        autoPlay={true}
        loop={true}
        style={styles.roboAnimacao}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
  roboAnimacao: {
    width: 190,
    marginTop: 30,
    marginLeft: 0,
  },

  educacaoAnimacao: {
    width: 100,
    marginTop: 50,
    marginLeft: -20,
    position: "absolute",
  },
  financasAnimacao: {
    width: 100,
    marginTop: 50,
    marginLeft: 75,
    position: "absolute",
  },
});
