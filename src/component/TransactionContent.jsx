import Report from './Report'
import FilterBar from './FilterBar'
import Pagination from './Pagination'
import TransactionList from './TransactionList'


function TransactionContent({transactions,deleteTransaction,selectTransaction}){

    return (
        <>
            <Report
            transactions={transactions}
            />
            <FilterBar/>
            <Pagination/>
            <TransactionList
            transactions={transactions}
            deleteTransaction={deleteTransaction}
            selectTransaction={selectTransaction}
            />
        </>
    )
}

export default TransactionContent