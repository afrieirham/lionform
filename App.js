import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as StoreProvider } from 'react-redux'

import { StyleSheet } from 'react-native'
import { BottomNavigation, Provider as PaperProvider } from 'react-native-paper'

import { store } from './libs/redux'
import Builder from './screens/Builder'
import Preview from './screens/Preview'

const Stack = createStackNavigator()

function App() {
  const [index, setIndex] = React.useState(0)
  const [routes] = useState([
    { key: 'builder', title: 'Builder', icon: 'plus' },
    { key: 'preview', title: 'Preview', icon: 'eye-outline' },
  ])

  const renderScene = BottomNavigation.SceneMap({
    builder: Builder,
    preview: Preview,
  })

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Builder' component={Builder} />
            <Stack.Screen name='Preview' component={Preview} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#fefefe',
    marginBottom: 100,
  },
})

export default App
