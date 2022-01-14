import TransactionCard from './TransactionCard'


function TransactionList(props){
    const {transactions, deleteTransaction,selectTransaction} = props
    
    return (
        <ul className="list-group">
            {transactions.map(item => (
                <TransactionCard 
                key={item.id} 
                item={item} 
                deleteTransaction={deleteTransaction}
                selectTransaction={selectTransaction}
                />
            ))}
      </ul>
    )
}

export default TransactionList