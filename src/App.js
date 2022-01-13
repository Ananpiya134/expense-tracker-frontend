import {useState, useEffect} from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import TransactionAction from './component/TransactionAction';
import TransactionContent from './component/TransactionContent';
import TransactionList from './component/TransactionList'
import Footer from './component/Footer';

function App() {
  const [transactions,setTransactions] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:8080/transactions').then(res => {
      console.log(res.data.transactions)
      setTransactions(res.data.transactions)
    })
  },[])
  return (
    <div className="container mw-md">
      <TransactionAction/>
      <TransactionContent/>
      <TransactionList
      transactions={transactions}/>
      <Footer/>
    </div>
  );
}

export default App;
