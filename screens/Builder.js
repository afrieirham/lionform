import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, FAB, Portal, Surface, Text } from 'react-native-paper'
import FormBlock from '../components/FormBlock'

function Builder({ navigation }) {
  const [open, setOpen] = useState(false)
  const [questions, setQuestions] = useState([])

  const removeQuestion = (id) => {
    const newQuestionSet = questions.filter((question) => question.id !== id)
    setQuestions(newQuestionSet)
  }

  return (
    <ScrollView>
      {questions.map((question) => (
        <FormBlock key={question.id} {...question} removeQuestion={removeQuestion} />
      ))}

      <Button
        style={{ padding: 10, marginHorizontal: 10, marginVertical: 10 }}
        mode='contained'
        onPress={() =>
          setQuestions([...questions, { id: Math.random(), type: 'text', question: '' }])
        }
      >
        Add Question
      </Button>

      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'close' : 'pencil'}
          actions={[
            {
              icon: 'delete',
              label: 'Clear',
              onPress: () => setQuestions([]),
            },
            {
              icon: 'check',
              label: 'Confirm',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={({ open }) => setOpen(open)}
        />
      </Portal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#fefefe',
  },
})

export default Builder
