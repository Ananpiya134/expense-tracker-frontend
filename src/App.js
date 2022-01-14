import {useState, useEffect} from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import TransactionAction from './component/TransactionAction';
import TransactionContent from './component/TransactionContent';
import TransactionList from './component/TransactionList'
import Footer from './component/Footer';

function App() {
  const [transactions,setTransactions] = useState([])
  const [editingTransaction, setEditingTransaction] = useState(null)

  useEffect(()=> {
    axios.get('http://localhost:8080/transactions').then(res => {
      console.log(res.data.transactions)
      setTransactions(res.data.transactions)
    })
  },[])


  const addTransaction = obj => {
    axios.post('http://localhost:8080/transactions',  obj).then(res => {
      const newTransactions = [...transactions]
      newTransactions.unshift(res.data.transaction)
      newTransactions.sort((a,b) => (a.date < b.date ?  1 : -1))
      setTransactions(newTransactions)
    })
  }

  const deleteTransaction = id => {
    axios.delete('http://localhost:8080/transactions/'+id).then(() => {
      const idx = transactions.findIndex(item => item.id === id)
      if(idx !== -1){
        const newTransactions = [...transactions]
        newTransactions.splice(idx,1)
        setTransactions(newTransactions)
      }
    }).catch(err => console.log(err))
  }

  return (
    <div className="container mw-md">
      <TransactionAction
      addTransaction={addTransaction}
      />
      <TransactionContent
      transactions={transactions}
      deleteTransaction={deleteTransaction}/>
      
      <Footer/>
    </div>
  );
}

export default App;
