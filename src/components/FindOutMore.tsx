import React from "react"
import { ScrollView, View } from "react-native"
import { FindOutMoreCard } from "./FindOutMoreCard"
import { OptionSection } from "./OptionSection"
import { Text } from "./Text"

export const FindOutMore = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text
        variant="optionTitle2"
        style={{ paddingHorizontal: 16, marginTop: 16 }}
      >
        Descubra mais
      </Text>

      <ScrollView horizontal>
        <FindOutMoreCard
          style={{ marginVertical: 24 }}
          label="Indique seus amigos"
          description="Mostre aos seus amigos como é fácil ter uma vida sem burocracia."
          buttonLabel="Indicar amigos"
        />
        <FindOutMoreCard
          style={{ marginVertical: 24 }}
          label="WhatsApp"
          description="Pagamentos seguros, rápidos e sem tarifa. A experiência Nubank sem nem sair da conversa."
          buttonLabel="Quero conhecer"
        />
      </ScrollView>
    </View>
  )
}
