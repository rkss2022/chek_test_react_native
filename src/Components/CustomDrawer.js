import { View, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text } from "react-native-paper";

const CustomDrawer = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#f4511e" }}>
        <Image
          source={require("../../assets/logo.webp")}
          style={styles.sideMenuProfileIcon}
        />
        <View style={{ marginBottom: 20 }}>
          <Text variant="titleLarge" style={styles.textStyling}>
            User Name
          </Text>
          <Text variant="titleMedium" style={styles.textStyling}>
            Store Name
          </Text>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    marginTop: 40,
    resizeMode: "center",
    width: 300,
    height: 80,
    // borderRadius: 100 / 2,
    alignSelf: "center",
  },
  textStyling: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
