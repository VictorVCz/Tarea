import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import PinterestStyleImageGrid from "./PinterestStyleImageGrid";
import SearchImageGrid from "./SearchImageGrid";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          labelStyle: {
            fontSize: 18,
          },
          tabStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Tab.Screen
          name="Imagenes random - Unsplash API"
          component={PinterestStyleImageGrid}
          options={{
            tabBarIcon: () => {
              return (
                <View>
                  <FontAwesome5 name="dice" size={24} color="black" />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Busqueda de imagenes - Unsplash API"
          component={SearchImageGrid}
          options={{
            tabBarIcon: () => {
              return (
                <View>
                  <Fontisto name="zoom" size={24} color="black" />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
