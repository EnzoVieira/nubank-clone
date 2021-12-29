import React from "react"
import { FlatList, Image, Text, View } from "react-native"
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons"
import { OptionButton } from "./OptionButton"
import { CardsButton } from "./CardsButton"
import { theme } from "../styles/theme"

interface IProps {
  isVisible: boolean
}

const options = [
  {
    label: "Área Pix",
    node: (
      <Image
        source={require("../assets/logo-pix.png")}
        style={{ height: 24, width: 24 }}
      />
    ),
  },
  {
    label: "Pagar",
    node: <MaterialCommunityIcons name="barcode" size={24} color="black" />,
  },
  {
    label: "Tranferir",
    node: <Feather name="arrow-up" size={24} color="black" />,
  },
  {
    label: "Depositar",
    node: <Feather name="arrow-down" size={24} color="black" />,
  },
  {
    label: "Recarga de Celular",
    node: <MaterialCommunityIcons name="cellphone" size={24} color="black" />,
  },
  {
    label: "Cobrar",
    node: <FontAwesome5 name="comment-dollar" size={24} color="black" />,
  },
  {
    label: "Doação",
    node: (
      <MaterialCommunityIcons name="heart-outline" size={24} color="black" />
    ),
  },
  {
    label: "Transferir Internac.",
    node: <Feather name="globe" size={24} color="black" />,
  },
]

export const OptionsList = ({ isVisible }: IProps): JSX.Element => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          marginTop: 32,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "500" }}>Conta</Text>
        <Feather name="chevron-right" size={24} />
      </View>

      <View
        style={{
          marginLeft: 16,
          marginTop: 20,
          backgroundColor: isVisible ? "white" : theme.grey,
          width: "70%",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "600",
            color: isVisible ? "black" : theme.grey,
          }}
        >
          R$ 50.000,00
        </Text>
      </View>

      <FlatList
        data={options}
        style={{ marginTop: 32 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <OptionButton label={item.label}>{item.node}</OptionButton>
        )}
      />

      <CardsButton />
    </View>
  )
}
