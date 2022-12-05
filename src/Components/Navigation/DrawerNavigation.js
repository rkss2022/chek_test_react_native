import React from "react";
import Home from "../../screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NewBooking from "../../screens/NewBooking";
import Claim from "../../screens/Claim";
import BookingLists from "../../screens/BookingLists";
import UpdateSettings from "../../screens/UpdateSettings";
import GetOldBooking from "../../screens/GetOldBooking";
import { Text } from "react-native-paper";
import CustomDrawer from "../CustomDrawer";

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          drawerStyle: {
            width: "60%",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerActiveTintColor: "red",
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          options={{ drawerLabel: "Home" }}
          component={Home}
        />
        <Drawer.Screen name="New Booking" component={NewBooking} />
        <Drawer.Screen name="Claim" component={Claim} />
        <Drawer.Screen name="Booking list" component={BookingLists} />
        <Drawer.Screen name="Update setting" component={UpdateSettings} />
        <Drawer.Screen name="Get Old Booking" component={GetOldBooking} />
      </Drawer.Navigator>
    </>
  );
}
