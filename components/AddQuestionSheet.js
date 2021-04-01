import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'

import { StyleSheet, View } from 'react-native'
import { Button, HelperText, TextInput, Title } from 'react-native-paper'
import DropDown from 'react-native-paper-dropdown'

import { addQuestion } from '../libs/redux'
import BottomSheetBehavior from 'reanimated-bottom-sheet'

function AddQuestionSheet({ sheetRef }) {
  const dispatch = useDispatch()
  const [type, setType] = useState('text')

  const [showDropDown, setShowDropDown] = useState(false)

  const { control, handleSubmit, errors, setValue } = useForm()

  const questionTypeList = [
    { label: 'Text', value: 'text' },
    { label: 'Number', value: 'number' },
    { label: 'Boolean', value: 'boolean' },
    { label: 'Checkbox', value: 'checkbox' },
  ]

  const onAddQuestion = ({ text }) => {
    // Close botton sheet
    sheetRef.current.snapTo(1)

    // Reset form
    setValue('text', '')
    setType('text')

    dispatch(addQuestion({ type, text }))
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

      <Controller
        control={control}
        name='text'
        rules={{ required: true }}
        defaultValue=''
        render={({ onChange, onBlur, value }) => (
          <TextInput
            label='Question'
            mode='outlined'
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            error={Boolean(errors.text)}
          />
        )}
      />
      <HelperText type='error' visible={Boolean(errors.text)}>
        Question is required
      </HelperText>
      <DropDown
        label='Type'
        mode='outlined'
        value={type}
        setValue={setType}
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
        style={{ marginTop: 20 }}
        onPress={handleSubmit(onAddQuestion)}
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
