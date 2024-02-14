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

function App (): JSX.Element {
  const config = {
    dependencies: {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      'linear-gradient': require('react-native-linear-gradient').default
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider config={config}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  )
}

export default App
