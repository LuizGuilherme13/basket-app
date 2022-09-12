import React from 'react';
import { Basket } from './src/screens/Basket/';
import { Loading } from "./src/components/Loading";
import mock from './src/mocks/basket'
import { StatusBar, SafeAreaView } from 'react-native';
import { useFonts, Montserrat_400Regular,Montserrat_700Bold } from "@expo-google-fonts/montserrat";

export default function App() {
  const [fontsLoaded] = useFonts({
      "MontserratRegular": Montserrat_400Regular,
      "MontserratBold": Montserrat_700Bold,
  });

  return (
    <SafeAreaView >
      <StatusBar/>
      {fontsLoaded ? <Basket {...mock}/> : <Loading/>}
    </SafeAreaView>
  );
}


