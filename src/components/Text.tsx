import React from "react"
import { Text as Txt, TextProps, TextStyle } from "react-native"

interface IProps extends TextProps {
  children: React.ReactNode
  variant?:
    | "optionTitle"
    | "optionTitle2"
    | "description"
    | "description2"
    | "button"
}

export const Text = ({ variant = "optionTitle", children, style }: IProps) => {
  const switchVariant = (): TextStyle => {
    switch (variant) {
      case "description":
        return { fontSize: 20, fontWeight: "500", opacity: 0.4 }
      case "description2":
        return { fontSize: 16, fontWeight: "500", opacity: 0.4 }
      case "optionTitle":
        return { fontSize: 24, fontWeight: "500" }
      case "optionTitle2":
        return { fontSize: 20, fontWeight: "500" }
      case "button":
        return { fontSize: 18, fontWeight: "500", color: "white" }
    }
  }
  return <Txt style={[style, switchVariant()]}>{children}</Txt>
}
