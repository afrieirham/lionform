import React from 'react'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native'

import PreviewQuestionBlock from '../components/PreviewQuestionBlock'

function Preview() {
  const questions = useSelector((state) => state)
  return (
    <ScrollView>
      {questions.map((question) => (
        <PreviewQuestionBlock key={question.id} {...question} />
      ))}
    </ScrollView>
  )
}

export default Preview
