import Report from './Report'
import FilterBar from './FilterBar'
import Pagination from './Pagination'
import TransactionList from './TransactionList'


function TransactionContent(){
    return (
        <>
            <Report/>
            <FilterBar/>
            <Pagination/>
            <TransactionList/>

        </>
    )
}

export default TransactionContent