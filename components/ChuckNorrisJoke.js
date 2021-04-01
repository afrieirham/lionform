import React from 'react'
import * as Linking from 'expo-linking'
import useSWR from 'swr'

import { View } from 'react-native'
import { Caption, IconButton, Paragraph, Text } from 'react-native-paper'

const API_URL = 'https://api.chucknorris.io/jokes/random?category=dev'

function ChuckNorrisJoke() {
  const { data: joke, mutate } = useSWR(API_URL, (url) => fetch(url).then((r) => r.json()))
  return (
    <View
      style={{
        minHeight: '85%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }}
    >
      {joke ? (
        <>
          <Caption>Ask your first question, becuase...</Caption>
          <Paragraph style={{ textAlign: 'center', marginVertical: 10 }}>{joke.value}</Paragraph>
          <IconButton icon='refresh' size={20} onPress={() => mutate()} />
        </>
      ) : (
        <>
          <Text>Can't fetch a joke 😢</Text>
          <Caption onPress={() => Linking.openURL('https://api.chucknorris.io/jokes/random')}>
            You can go visit https://api.chucknorris.io/jokes/random
          </Caption>
        </>
      )}
    </View>
  )
}

export default ChuckNorrisJoke
