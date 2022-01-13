import {useState, useEffect} from 'react'
import axios from 'axios'
import validator from 'validator'
function TransactionForm(){

    const [input,setInput] = useState({
        type:'EXPENSE',
        payee:'',
        category:'',
        amount:'',
        date:'',
        comment:''
    })
    const [error,setError] = useState({})
    const [expenses,setExpenses] = useState([])
    const [incomes,setIncomes] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8080/categories')
        .then(res => {
            const newExpenses = res.data.categories.filter(item => 
                item.type === 'EXPENSE')
            setExpenses(newExpenses)
            setIncomes(res.data.categories.filter(item => item.type === 'INCOME'))
            setInput(prev => ({...prev, category: newExpenses[0].id}))
        })
    },[])

    const option = 
        input.type === 'EXPENSE' 
        ? expenses.map(item => (
            <option key={item.id} value={item.id}> 
                {item.name} 
            </option>
        ))
        : incomes.map(item => (
            <option key={item.id} value={item.id}> 
                {item.name}
            </option>
        ));
    
    const handleSubmitForm = e => {
        e.preventDefault();
        if(validator.isEmpty(input.payee)){
            setError(prev => ({...prev, payee: 'payee is required'}))
        }else{
            setError(prev => ({...prev, payee: ''}))
        }

        if(validator.isEmpty(input.amount)){
            setError(prev => ({...prev, amount: 'amount is required'}))
        }else{
            setError(prev => ({...prev, amount:''}))
        }

        if(validator.isEmpty(input.date)){
            setError(prev => ({...prev, date: 'date is required'}))
        }else{
            setError(prev => ({...prev, date:''}))
        }

    }

    const handleChangeInput = e => {
        setInput(prev => ({...prev, [e.target.name]:e.target.value}))
        if(e.target.name === 'type'){
            setInput(prev => ({...prev, category: e.target.value === 'EXPENSE' ? expenses[0]:incomes[0] }))
        }
     }


    return(
        <div className="border bg-white rounded-2 p-3 mt-3">
            <form 
            className="row g-3"
            onSubmit={handleSubmitForm}
            >
            <div className="col-12">
                <input
                type="radio"
                className="btn-check"
                id="cbx-expense"
                name="type"
                defaultChecked
                value="EXPENSE"
                onChange={handleChangeInput}
                />
                <label
                className="btn btn-outline-danger rounded-0 rounded-start"
                htmlFor="cbx-expense"
                >
                Expense
                </label>
                <input
                type="radio"
                className="btn-check"
                id="cbx-income"
                name="type"
                value="INCOME"
                onChange={handleChangeInput}
                />
                <label
                className="btn btn-outline-success rounded-0 rounded-end"
                htmlFor="cbx-income"
                >
                Income
                </label>
            </div>
            <div className="col-sm-6">
                <label className="form-label">Payee</label>
                <input 
                type="text" 
                className={`form-control ${error.payee ? 'is-invalid': ''}`} 
                value={input.payee} 
                name="payee" 
                onChange={handleChangeInput}
                />
                <div className='invalid-feedback'>{error.payee}</div>
            </div>
            <div className="col-sm-6">
                <label className="form-label">Category</label>
                <select 
                className="form-select" 
                name="category"
                value={input.category}
                onChange={handleChangeInput}
                >
                {option}
                </select>
            </div>
            <div className="col-sm-6">
                <label className="form-label">Amount</label>
                <input 
                type="text" 
                className={`form-control ${error.amount ? 'is-invalid': ''}`} 
                onChange={handleChangeInput} 
                name="amount" 
                value={input.amount} 
                />
                <div className='invalid-feedback'>{error.amount}</div>
            </div>
            <div className="col-sm-6">
                <label className="form-label">Date</label>
                <input 
                type="date" 
                className={`form-control ${error.date ? 'is-invalid': ''}`} 
                onChange={handleChangeInput}
                name="date"
                value={input.date}
                />
                <div className='invalid-feedback'>{error.date}</div>
            </div>
            <div className="col-12">
                <label className="form-label">Comment</label>
                <textarea 
                className="form-control" 
                onChange={handleChangeInput} 
                rows="3"
                name='comment'
                value={input.comment}
                ></textarea>
            </div>
            <div className="col-12">
                <div className="d-grid mt-3">
                <button 
                className="btn btn-primary">Save</button>
                </div>
            </div>
            </form>
    </div>
    )
}

export default TransactionForm