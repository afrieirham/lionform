import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, FAB, Portal } from 'react-native-paper'

import ChuckNorrisJoke from '../components/ChuckNorrisJoke'
import AddQuestionSheet from '../components/AddQuestionSheet'
import QuestionBlock from '../components/QuestionBlock'
import { clearQuestions } from '../libs/redux'

function Builder({ navigation }) {
  const sheetRef = useRef(null)
  const dispatch = useDispatch()

  const questions = useSelector((state) => state)
  const hasQuestions = Boolean(questions.length)

  return (
    <>
      <ScrollView>
        {hasQuestions ? (
          <View>
            {questions.map((question) => (
              <QuestionBlock key={question.id} {...question} />
            ))}
          </View>
        ) : (
          <ChuckNorrisJoke />
        )}

        <Button
          contentStyle={{ padding: 10 }}
          style={{ margin: 10, marginBottom: 0 }}
          mode='contained'
          onPress={() => sheetRef.current.snapTo(0)}
        >
          Add Question
        </Button>
        {hasQuestions && (
          <Button style={{ margin: 10 }} onPress={() => dispatch(clearQuestions())}>
            Clear
          </Button>
        )}
      </ScrollView>
      {hasQuestions && (
        <Portal>
          <FAB style={styles.fab} icon='eye' onPress={() => navigation.navigate('Preview')} />
        </Portal>
      )}
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
