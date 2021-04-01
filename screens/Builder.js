import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, FAB, Portal, Text } from 'react-native-paper'

import AddQuestionSheet from '../components/AddQuestionSheet'
import QuestionBlock from '../components/QuestionBlock'

function Builder({ navigation }) {
  const sheetRef = useRef(null)

  const questions = useSelector((state) => state)

  return (
    <>
      <ScrollView>
        <View>
          {questions.map((question) => (
            <QuestionBlock key={question.id} {...question} />
          ))}
        </View>

        <Button
          contentStyle={{ padding: 10 }}
          style={{ margin: 10 }}
          mode='contained'
          onPress={() => sheetRef.current.snapTo(0)}
        >
          Add Question
        </Button>
      </ScrollView>
      <Portal>
        <FAB style={styles.fab} icon='eye' onPress={() => navigation.navigate('Preview')} />
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
