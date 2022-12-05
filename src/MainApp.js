import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./Components/features/auth/authSlice";
import DrawerNavigation from "./Components/Navigation/DrawerNavigation";

const Stack = createNativeStackNavigator();

export default function MainApp() {
  // const isLoggedIn = false;
  const { isAuthenticated } = useSelector(selectUser);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="HomeDrawer" component={DrawerNavigation} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  );
}
