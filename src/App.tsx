import Header from "./assets/components/TransactionsList/header/Header.tsx";
import TransactionList from "./assets/components/TransactionsList/TransactionSection/TransactionList/TransactionList.tsx";
import {transactions} from "./assets/Data/Data.ts";
import {Outlet, Route, Routes} from "react-router-dom";
import TransactionDetails from "./assets/components/TransactionsList/TransactionSection/TransactionList/TransactionDetails/TransactionDetails.tsx";

const App = () => {



  return (
    <>

        <Routes>
            <Route path="/" element={<div><Header /><TransactionList transactions={transactions} /><Outlet /></div>} />

            <Route path="/transaction-details/:id" element={<TransactionDetails transactions={transactions} />} />
        </Routes>
    </>
  )
}

export default App;
