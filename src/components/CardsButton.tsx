import React from "react"
import { Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"

export const CardsButton = () => {
  return (
    <View
      style={{
        backgroundColor: "#f5f5f5",
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 16,
        marginTop: 32,
        marginBottom: 16,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Feather name="credit-card" size={24} color="black" />
        <Text style={{ marginLeft: 20, fontWeight: "500" }}>Meus cartões</Text>
      </View>
    </View>
  )
}
