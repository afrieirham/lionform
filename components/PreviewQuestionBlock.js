import React, { useState } from 'react'

import { StyleSheet, View } from 'react-native'
import { Checkbox, Surface, Switch, Text, TextInput, Title } from 'react-native-paper'

function PreviewQuestionBlock({ id, text, type }) {
  const [checked, setChecked] = useState(false)

  const renderInput = () => {
    if (type === 'text') {
      return (
        <View style={{ padding: 10 }}>
          <Text style={{ marginBottom: 10 }}>{text}</Text>
          <TextInput />
        </View>
      )
    }

    if (type === 'number') {
      return (
        <View style={{ padding: 10 }}>
          <Text style={{ marginBottom: 10 }}>{text}</Text>
          <TextInput keyboardType='numeric' />
        </View>
      )
    }

    if (type === 'boolean') {
      return (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}
        >
          <Text style={{ marginRight: 10, width: '80%' }}>{text}</Text>
          <Switch value={checked} onValueChange={setChecked} />
        </View>
      )
    }

    if (type === 'checkbox') {
      return (
        <Checkbox.Item
          label={text}
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
      <View>{renderInput()}</View>
    </Surface>
  )
}

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    width: '100%',
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
})

export default PreviewQuestionBlock
