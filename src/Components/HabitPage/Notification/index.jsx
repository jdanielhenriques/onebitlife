import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function Notification({
  notificationToggle,
  setNotificationToggle,
}) {
  const toggleSwitch = () => {
    setNotificationToggle((previousState) => !previousState);
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Notificação</Text>
        <Switch
          trackColor={{ false: "#FF0044", true: "#2DBE560" }}
          thumbColor={"FFFFFF"}
          ios_backgroundColor='#3E3E3E'
          onValueChange={toggleSwitch}
          value={notificationToggle}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  titleDisabled: {
    color: "#BBBBBB",
    fontSize: 20,
    marginRight: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    marginRight: 10,
  },
});
