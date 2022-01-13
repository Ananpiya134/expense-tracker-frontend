import { useState } from 'react'
import TransactionForm from './TransactionForm'

function TransactionAction(){

    const [isShowForm,setIsShowForm] = useState(false)


    return (
        <>
            <div className="d-grid mt-3">
                <button 
                className="btn btn-outline-warning"
                onClick={() => setIsShowForm(prev => !prev)}
                >
                    {isShowForm === false ? 'Create Transaction':'Cancel'}
                </button>
            </div>
            { isShowForm && <TransactionForm />
            }

        </>
    )
}

export default TransactionAction