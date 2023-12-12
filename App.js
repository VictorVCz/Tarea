// Importa las bibliotecas necesarias
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importa los componentes de tus pantallas

import PinterestStyleImageGrid from "./PinterestStyleImageGrid";
import SearchImageGrid from "./SearchImageGrid";

// Crea un objeto de pestañas inferiores
const Tab = createBottomTabNavigator();

// Función principal que define la estructura de navegación
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
          options={{ tabBarLabel: "Imagen aleatoria" }}
        />
        <Tab.Screen
          name="Busqueda de imagenes - Unsplash API"
          component={SearchImageGrid}
          options={{ tabBarLabel: "Buscar imagen" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
