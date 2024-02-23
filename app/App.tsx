/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'

import {
  SafeAreaView
} from 'react-native'
import AppNavigator from './navigators/AppNavigator'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App (): JSX.Element {
  const config = {
    dependencies: {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      'linear-gradient': require('react-native-linear-gradient').default
    }
  }

  const client = new QueryClient()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <AuthProvider projectId="P2cMROBGYbcmPL9LAcILYtMOHYHD"> */}
      <QueryClientProvider client={client}>
      <NativeBaseProvider config={config}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
      </QueryClientProvider>
      {/* </AuthProvider> */}
    </SafeAreaView>
  )
}

export default App
