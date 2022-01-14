import { useState } from 'react'
import Report from './Report'
import FilterBar from './FilterBar'
import Pagination from './Pagination'
import TransactionList from './TransactionList'


function TransactionContent({transactions,deleteTransaction,selectTransaction}){

    const [searchTerm,setSearchTerm] = useState('')
    const [searchMonth,setSearchMonth] = useState('')
    const [searchYear,setSearchYear] = useState('')
    const [pageLimit,setPageLimit] = useState(10)
    const [currentPage,setCurrentPage] = useState(1)

    const onChangeSearchTerm = value => {
        setSearchTerm(value)
        setCurrentPage(1)
    }

    const onChangeSearchMonth = value => {
        setSearchMonth(value)
        setCurrentPage(1)
    }

    const onChangeSearchYear = value => {
        setSearchYear(value)
        setCurrentPage(1)
    }

    const onChangePageLimit = value => {
        setPageLimit(value)

    }

    const onChangeCurrentPage = value => {
        setCurrentPage(value)
    }


    const filterTransaction = searchTerm === '' && searchMonth === '' && searchYear === '' ? 
    transactions
    : transactions.filter(
        item =>
            (
                item.payee.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.category.type.toLowerCase().includes(searchTerm.toLowerCase())
            ) && (
                new Date(item.date).getMonth() === searchMonth || 
                searchMonth === ''
            ) && (
                item => new Date(item.date).getFullYear() === searchYear || 
                searchYear === ''
            )
    )

    const shownTransactions = filterTransaction.slice(
        (currentPage - 1) * pageLimit,
        currentPage * pageLimit
    )


    return (
        <>
            <Report
            transactions={transactions}
            />
            <FilterBar
            searchTerm={searchTerm}
            searchMonth={searchMonth}
            searchYear={searchYear}
            onChangeSearchTerm={onChangeSearchTerm}
            onChangeSearchMonth={onChangeSearchMonth}
            onChangeSearchYear={onChangeSearchYear}
            />
            <Pagination
            numTransaction={filterTransaction.length}
            onChangePageLimit={onChangePageLimit}
            onChangeCurrentPage={onChangeCurrentPage}
            pageLimit={pageLimit}
            currentPage={currentPage}
            />
            <TransactionList
            transactions={shownTransactions}
            deleteTransaction={deleteTransaction}
            selectTransaction={selectTransaction}
            />
        </>
    )
}

export default TransactionContent