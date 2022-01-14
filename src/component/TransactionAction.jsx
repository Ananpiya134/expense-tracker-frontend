import { useState } from 'react'
import TransactionForm from './TransactionForm'

function TransactionAction({addTransaction}){

    const [isShowForm,setIsShowForm] = useState(false)
    const closeForm = () => {
        setIsShowForm(false)
    }


    return (
        <>
            <div className="d-grid mt-3">
                <button 
                className="btn btn-outline-warning"
                onClick={() => setIsShowForm(prev => !prev)}>
                    {isShowForm === false ? 'Create Transaction':'Cancel'}
                </button>
            </div>
            { isShowForm && <TransactionForm
            addTransaction={addTransaction}
            closeForm={closeForm}
            />
            }

        </>
    )
}

export default TransactionAction