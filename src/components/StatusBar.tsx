import React from "react"
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  StatusBarProps,
} from "react-native"

interface IProps extends StatusBarProps {
  backgroundColor: string
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight

export const MyStatusBar = ({ backgroundColor, ...props }: IProps) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        {...props}
        barStyle="light-content"
      />
    </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
})
