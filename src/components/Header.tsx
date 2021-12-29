import React from "react"
import {
  Ionicons,
  Feather,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons"
import { Text, TouchableWithoutFeedback, View } from "react-native"
import { theme } from "../styles/theme"
import { RowView } from "./RowView"

interface IProps {
  isVisible: boolean
  toggleVisible: () => void
}

export const Header = ({ isVisible, toggleVisible }: IProps): JSX.Element => {
  return (
    <View style={{ backgroundColor: theme.primary }}>
      <RowView
        style={{
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            backgroundColor: theme.secondaryBg,
            padding: 16,
            borderRadius: 100,
          }}
        >
          <Ionicons name="person-outline" size={28} color="white" />
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableWithoutFeedback onPress={toggleVisible}>
            <Feather
              name={isVisible ? "eye" : "eye-off"}
              size={28}
              color="white"
            />
          </TouchableWithoutFeedback>
          <AntDesign
            name="questioncircleo"
            size={32}
            color="white"
            style={{ marginLeft: 28 }}
          />
          <MaterialCommunityIcons
            name="email-plus-outline"
            size={32}
            color="white"
            style={{ marginLeft: 24 }}
          />
        </View>
      </RowView>

      <Text
        style={{
          fontSize: 24,
          color: "white",
          fontWeight: "600",
          paddingHorizontal: 16,
          marginVertical: 32,
        }}
      >
        Olá, Enzo
      </Text>
    </View>
  )
}
