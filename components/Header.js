import React, { useState } from 'react'
import { Appbar, Menu } from 'react-native-paper'

function Header({ title, subtitle, previous, navigation }) {
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)
  return (
    <Appbar.Header>
      {previous && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title={title} subtitle={subtitle} />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon='dots-vertical' color='white' onPress={openMenu} />}
      >
        <Menu.Item
          onPress={() => {
            console.log('Option 1 was pressed')
          }}
          title='Builder'
        />
        <Menu.Item
          onPress={() => {
            console.log('Option 2 was pressed')
          }}
          title='Preview'
        />
      </Menu>
    </Appbar.Header>
  )
}

export default Header
