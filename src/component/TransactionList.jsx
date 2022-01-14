import TransactionCard from './TransactionCard'


function TransactionList(props){
    const {transactions, deleteTransaction} = props
    
    return (
        <ul className="list-group">
            {transactions.map(item => (
                <TransactionCard key={item.id} item={item} deleteTransaction={deleteTransaction}/>
            ))}
      </ul>
    )
}

export default TransactionList