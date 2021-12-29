import React from "react"
import { TouchableOpacity, View, ViewProps } from "react-native"
import { theme } from "../styles/theme"
import { Text } from "./Text"

interface IProps extends ViewProps {
  label: string
  description: string
  buttonLabel: string
}

export const FindOutMoreCard = ({
  label,
  description,
  buttonLabel,
  style,
}: IProps) => {
  return (
    <View
      style={[
        {
          backgroundColor: theme.grey,
          padding: 16,
          width: 320,
          borderRadius: 16,
          marginLeft: 16,
        },
        style,
      ]}
    >
      <Text>{label}</Text>
      <Text variant="description2" style={{ marginTop: 8 }}>
        {description}
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: theme.primary,
          width: 160,
          paddingVertical: 8,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 32,
        }}
      >
        <Text variant="button">{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  )
}
