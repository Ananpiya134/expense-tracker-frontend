import TransactionCard from './TransactionCard'


function TransactionList(props){
    const {transactions} = props
    
    return (
        <ul className="list-group">
            {transactions.map(item => {
                return <TransactionCard 
                key={item.id}
                item={item} />
            })}
            
            {/* <TransactionCard />
            <TransactionCard />
            <TransactionCard /> */}
      </ul>
    )
}

export default TransactionList