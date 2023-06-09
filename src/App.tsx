import Header from "./assets/components/TransactionsList/header/Header.tsx";
import TransactionList from "./assets/components/TransactionsList/TransactionSection/TransactionList/TransactionList.tsx";
import {transactions} from "./assets/Data/Data.ts";
import {Route, Routes} from "react-router-dom";
import TransactionDetails from "./assets/components/TransactionsList/TransactionSection/TransactionList/TransactionDetails/TransactionDetails.tsx";

const App = () => {



  return (
    <>
        <Header />
        <Routes>
            <Route
                path="/"
                element={<TransactionList transactions={transactions} />}
            />

            <Route
                path="/transaction-details/:id"
                element={<TransactionDetails transactions={transactions} />}
            />
        </Routes>
    </>
  )
}

export default App;
