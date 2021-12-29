import React from "react"
import { Text, View } from "react-native"

interface IProps {
  children: React.ReactNode
  label: string
}

export const OptionButton = ({ children, label }: IProps) => {
  return (
    <View style={{ marginLeft: 20 }}>
      <View
        style={{ backgroundColor: "#f5f5f5", padding: 20, borderRadius: 100 }}
      >
        {children}
      </View>
      <Text
        style={{
          textAlign: "center",
          maxWidth: 72,
          marginTop: 12,
          fontWeight: "500",
        }}
      >
        {label}
      </Text>
    </View>
  )
}
