import '../global.css'
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {Stack} from "expo-router";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function RootLayout() {

    const queryClient = new QueryClient()

  return (
      <SafeAreaProvider>
          <QueryClientProvider client={queryClient}>
              <Stack screenOptions={{headerShown: false}}/>
          </QueryClientProvider>
      </SafeAreaProvider>
  );
}
