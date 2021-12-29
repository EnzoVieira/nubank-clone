import React from "react"
import { View } from "react-native"
import { Divider } from "./Divider"

interface IProps {
  children: React.ReactNode
}

export const OptionSection = ({ children }: IProps) => {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          padding: 16,
        }}
      >
        {children}
      </View>
      <Divider />
    </>
  )
}
