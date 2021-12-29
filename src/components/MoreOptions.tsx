import React from "react"
import { View } from "react-native"
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons"
import { OptionSection } from "./OptionSection"
import { Text } from "./Text"
import { RowView } from "./RowView"

export const MoreOptions = () => {
  return (
    <View>
      <OptionSection>
        <MaterialCommunityIcons name="signal" size={24} color="black" />

        <RowView>
          <Text style={{ marginTop: 16 }}>Investimentos</Text>
          <Feather name="chevron-right" size={24} />
        </RowView>

        <Text variant="description" style={{ marginTop: 16 }}>
          O jeito Nu de investir: sem asteriscos, linguagem fácil e a partir de
          R$1. Saiba mais.
        </Text>
      </OptionSection>

      <OptionSection>
        <MaterialCommunityIcons
          name="shopping-outline"
          size={24}
          color="black"
        />

        <RowView>
          <Text style={{ marginTop: 16 }}>Shopping</Text>
          <Feather name="chevron-right" size={24} />
        </RowView>

        <Text variant="description" style={{ marginTop: 16 }}>
          Vantagens exclusivas das nossas marcas preferidas
        </Text>
      </OptionSection>
    </View>
  )
}
