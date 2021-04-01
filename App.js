import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { StyleSheet } from 'react-native'
import {
  BottomNavigation,
  Portal,
  Provider as PaperProvider,
  Surface,
  Text,
} from 'react-native-paper'

import Header from './components/Header'
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
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            header: (props) => <Header {...props} />,
          }}
        >
          <Stack.Screen name='Builder' component={Builder} />
          <Stack.Screen name='Preview' component={Preview} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
