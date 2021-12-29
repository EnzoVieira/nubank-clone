import React from "react"
import { View, ViewProps } from "react-native"

interface IProps extends ViewProps {
  children: React.ReactNode
}

export const RowView = ({ children, style, ...rest }: IProps) => {
  return (
    <View
      style={[
        style,
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
      ]}
      {...rest}
    >
      {children}
    </View>
  )
}
