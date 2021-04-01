import React, { useState } from 'react'

import { StyleSheet, View } from 'react-native'
import { IconButton, List, Menu, Surface, Text } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { removeQuestion } from '../libs/redux'

function QuestionBlock({ id, type, text }) {
  const dispatch = useDispatch()

  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  const getTypeIcon = () => {
    if (type === 'text') {
      return <List.Icon icon='text' />
    }
    if (type === 'number') {
      return <List.Icon icon='numeric' />
    }
    if (type === 'boolean') {
      return <List.Icon icon='toggle-switch-outline' />
    }
    if (type === 'checkbox') {
      return <List.Icon icon='checkbox-marked-outline' />
    }

    return <Text>N/A</Text>
  }

  return (
    <Surface style={styles.surface}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {getTypeIcon()}
        <Text numberOfLines={2} style={{ maxWidth: '73%' }}>
          {text}
        </Text>
      </View>
      <View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<IconButton icon='dots-vertical' size={20} onPress={openMenu} />}
        >
          <Menu.Item
            title='Delete'
            icon='delete'
            onPress={() => dispatch(removeQuestion({ id }))}
          />
        </Menu>
      </View>
    </Surface>
  )
}

const styles = StyleSheet.create({
  surface: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: '100%',
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default QuestionBlock
