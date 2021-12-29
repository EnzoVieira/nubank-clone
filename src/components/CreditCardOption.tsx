import React from "react"
import { Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"
import { RowView } from "./RowView"

export const CreditCardOption = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}
    >
      <Feather name="credit-card" size={24} color="black" />

      <RowView style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "500" }}>
          Cartão de crédito
        </Text>
        <Feather name="chevron-right" size={24} />
      </RowView>

      <Text
        style={{ marginTop: 16, fontSize: 20, fontWeight: "500", opacity: 0.4 }}
      >
        Fatura atual
      </Text>

      <Text style={{ marginTop: 16, fontSize: 28, fontWeight: "600" }}>
        R$ 0,00
      </Text>

      <Text
        style={{ marginTop: 12, fontSize: 20, fontWeight: "500", opacity: 0.4 }}
      >
        Limite disponível de R$ 2.000,00
      </Text>
    </View>
  )
}
