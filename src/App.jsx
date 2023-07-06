import { GlobalProvider } from "./context/GlobalState"
import { Header } from "./components/Header"
import { Balance } from "./components/Balance"
import { TransactionForm } from "./components/transactions/TransactionForm"
import { TransactionList } from "./components/transactions/TransactionList"




export const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <TransactionList />
      <h1>Hello World</h1>
    </GlobalProvider>
  )
}
