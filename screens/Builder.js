import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, FAB, Portal, Text } from 'react-native-paper'

import AddQuestionSheet from '../components/AddQuestionSheet'

function Builder({ navigation }) {
  const sheetRef = useRef(null)

  const questions = useSelector((state) => state)

  return (
    <>
      <ScrollView>
        <View style={{ marginHorizontal: 10 }}>
          {questions.map((question) => (
            <Text key={question.id}>{question.text}</Text>
          ))}
        </View>

        <Button
          contentStyle={{ padding: 10 }}
          style={{ margin: 10 }}
          mode='contained'
          onPress={() => navigation.navigate('Preview')}
        >
          Preview
        </Button>
      </ScrollView>
      <Portal>
        <FAB style={styles.fab} icon='plus' onPress={() => sheetRef.current.snapTo(0)} />
      </Portal>
      <AddQuestionSheet sheetRef={sheetRef} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#fefefe',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default Builder
