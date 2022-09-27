import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { NativeBaseProvider, StatusBar } from "native-base";
import React from 'react';
import { StyleSheet } from 'react-native';

import { Loading } from "./src/components/Loading";
import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes';
import { THEME } from "./src/styles/theme";

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ?
        <AuthProvider>
          <Routes />
        </AuthProvider> : <Loading />}

    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
