import React,{useState} from "react";
import ExpenseItem from "./expenseItem";
import AddNewExpense from "../addNewExpense";
import "./expenseItem.css"
const ExpensesList = () => {

    const [expenseItem,setExpenseItemData] = useState({
        title:"new book",
        amount:"450",
        date : new Date("2023-03-25")
    })

    return(
        <div className="container">
            <div className="row">
                <div className="container-fluid add_new_expense">
                    <AddNewExpense></AddNewExpense>
                </div>
                <div className="expense_item">
                    <ul className="center">
                       <ExpenseItem
                        title={expenseItem.title}
                        amount={expenseItem.amount}
                        date={expenseItem.date}
                       ></ExpenseItem>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default ExpensesList;