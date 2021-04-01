import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Surface, TextInput, Text, IconButton, Divider } from 'react-native-paper'
import DropDown from 'react-native-paper-dropdown'

function FormBlock({ type, question, removeQuestion, id }) {
  const [text, setText] = useState('')
  const [entryType, setEntryType] = useState('text')

  const [showDropDown, setShowDropDown] = useState(false)

  const questionTypeList = [
    { label: 'Text', value: 'text' },
    { label: 'Number', value: 'number' },
    { label: 'Boolean', value: 'boolean' },
    { label: 'Checkboxes', value: 'checkboxes' },
  ]

  return (
    <Surface style={styles.card}>
      <View>
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
      </View>
      <Divider style={{ marginTop: 25 }} />
      <View style={{ display: 'flex', alignItems: 'flex-end', paddingVertical: 5 }}>
        <IconButton icon='delete' size={20} onPress={() => removeQuestion(id)} />
      </View>
    </Surface>
  )
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 24,
    paddingTop: 24,
    width: '100%',
    elevation: 1,
    // marginTop: 50,
  },
})

export default FormBlock
