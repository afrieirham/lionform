import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { StyleSheet, View } from 'react-native'
import { Button, TextInput, Title } from 'react-native-paper'
import DropDown from 'react-native-paper-dropdown'

import { addQuestion } from '../libs/redux'
import BottomSheetBehavior from 'reanimated-bottom-sheet'

function AddQuestionSheet({ sheetRef }) {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [entryType, setEntryType] = useState('text')

  const [showDropDown, setShowDropDown] = useState(false)

  const questionTypeList = [
    { label: 'Text', value: 'text' },
    { label: 'Number', value: 'number' },
    { label: 'Boolean', value: 'boolean' },
    { label: 'Checkboxes', value: 'checkboxes' },
  ]

  const onAddQuestion = () => {
    sheetRef.current.snapTo(1)
    dispatch(addQuestion({ type: entryType, text }))
  }

  const renderForm = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Title style={{ fontSize: 25, textAlign: 'center', marginBottom: 10 }}>Add Question</Title>
      <TextInput
        label='Question'
        style={{ marginBottom: 10 }}
        mode='outlined'
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <DropDown
        label='Type'
        mode='outlined'
        value={entryType}
        setValue={setEntryType}
        list={questionTypeList}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        inputProps={{
          right: <TextInput.Icon name={'menu-down'} />,
        }}
      />
      <Button
        icon='plus'
        mode='contained'
        contentStyle={{ padding: 10 }}
        style={{ marginTop: 10 }}
        onPress={onAddQuestion}
      >
        Add
      </Button>
    </View>
  )

  return (
    <BottomSheetBehavior
      ref={sheetRef}
      snapPoints={[450, 0]}
      borderRadius={10}
      renderContent={renderForm}
    />
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

export default AddQuestionSheet
