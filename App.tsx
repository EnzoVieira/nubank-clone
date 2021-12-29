// import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { SafeAreaView, ScrollView } from "react-native"
import { CreditCardOption } from "./src/components/CreditCardOption"
import { Divider } from "./src/components/Divider"
import { FindOutMore } from "./src/components/FindOutMore"
import { Header } from "./src/components/Header"
import { MoreOptions } from "./src/components/MoreOptions"
import { OptionsList } from "./src/components/OptionsList"
import { MyStatusBar } from "./src/components/StatusBar"
import { theme } from "./src/styles/theme"

export default function App() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true)

  const toggleBalanceVisible = () => {
    setIsBalanceVisible(!isBalanceVisible)
  }
  return (
    <>
      <MyStatusBar backgroundColor={theme.primary} />

      <SafeAreaView style={{ backgroundColor: "white" }}>
        <ScrollView style={{ backgroundColor: theme.primary }}>
          <Header
            isVisible={isBalanceVisible}
            toggleVisible={toggleBalanceVisible}
          />

          <OptionsList isVisible={isBalanceVisible} />
          <Divider />

          <CreditCardOption />
          <Divider />

          <MoreOptions />

          <FindOutMore />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
