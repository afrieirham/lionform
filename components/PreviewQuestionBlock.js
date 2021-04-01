import React, { useState } from 'react'

import { StyleSheet, View } from 'react-native'
import { Checkbox, Surface, Switch, Text, TextInput, Title } from 'react-native-paper'

function PreviewQuestionBlock({ id, text, type }) {
  const [checked, setChecked] = useState(false)

  const renderInput = () => {
    if (type === 'text') {
      return <TextInput />
    }

    if (type === 'number') {
      return <TextInput keyboardType='numeric' />
    }

    if (type === 'boolean') {
      return <Switch value={checked} onValueChange={setChecked} />
    }

    if (type === 'checkboxes') {
      return (
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked)
          }}
        />
      )
    }

    return <Text>Not supported</Text>
  }

  return (
    <Surface style={styles.surface}>
      <Title>{text}</Title>
      <View>{renderInput()}</View>
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
    marginVertical: 10,
  },
})

export default PreviewQuestionBlock
