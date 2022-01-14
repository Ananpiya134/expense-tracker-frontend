import { useState } from 'react'
import TransactionForm from './TransactionForm'

function TransactionAction({addTransaction,editingTransaction,setIsShowForm,isShowForm,toggleForm,updateTransaction}){

    return (
        <>
            <div className="d-grid mt-3">
                <button 
                className="btn btn-outline-warning"
                onClick={toggleForm}
                >
                    {isShowForm === false ? 'Create Transaction':'Cancel'}
                </button>
            </div>
            { isShowForm && <TransactionForm
            addTransaction={addTransaction}
            editingTransaction={editingTransaction}
            updateTransaction={updateTransaction}
            />
            }

        </>
    )
}

export default TransactionAction