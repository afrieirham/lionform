import React from 'react'

import { StyleSheet } from 'react-native'
import { Surface, Text, Title } from 'react-native-paper'

function QuestionBlock({ id, type, text }) {
  return (
    <Surface style={styles.surface}>
      <Title>{text}</Title>
      <Text>{type}</Text>
    </Surface>
  )
}

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: '100%',
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
})

export default QuestionBlock
