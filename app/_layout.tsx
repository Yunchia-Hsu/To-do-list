import { Stack } from "expo-router";
import { ThemeProvider } from '../context/ThemeContext'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";


export default function RootLayout() {
 
  return (
    <ThemeProvider> 
      <SafeAreaProvider> 
        <Stack>
          <Stack.Screen name="index" options={{headerShown: false}}/>  
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>  
  )
}
