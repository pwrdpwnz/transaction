import Header from "./assets/components/TransactionsList/header/Header.tsx";
import TransactionList from "./assets/components/TransactionsList/TransactionSection/TransactionList/TransactionList.tsx";
import {faAppleAlt} from "@fortawesome/free-solid-svg-icons";
import {Route, Routes} from "react-router-dom";
import TransactionDetails from "./assets/components/TransactionsList/TransactionSection/TransactionList/TransactionDetails/TransactionDetails.tsx";

const App = () => {
    const transactions = [
        {
            id: '1',
            icon: faAppleAlt,
            company: 'Company A',
            operation: 'Operation A',
            date: '2023-01-01',
            amount: 10.0
        },
        {
            id: '2',
            icon: faAppleAlt,
            company: 'Company B',
            operation: 'Operation B',
            date: '2023-01-02',
            amount: -5.0
        },
        // Остальные транзакции...
    ];


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
