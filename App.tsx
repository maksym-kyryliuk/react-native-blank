import React from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, useColorScheme } from 'react-native';
import { NativeBaseProvider, Text, Box } from 'native-base';

import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
   const isDarkMode = useColorScheme() === 'dark';

   const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   return (
      <NativeBaseProvider>
         <SafeAreaView style={backgroundStyle}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
               <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
                  <Text>Open up App.js to start working on your app!</Text>
               </Box>
            </ScrollView>
         </SafeAreaView>
      </NativeBaseProvider>
   );
}

const styles = StyleSheet.create({});

export default App;
