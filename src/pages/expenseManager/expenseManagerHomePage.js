import React from "react";
import ExpensesList from "../../components/main/expensesListComponent/expensesList";
import Header from "../../components/shared/header";
import "./ExpenseManagerHomePage.css"
const ExpenseManagerHomePage = () => {
    return(
        <div className="container-fluid">
            
                <div className="">
                    <Header></Header>
                </div>
                <div className="expense_list">
                   <ExpensesList></ExpensesList>
                </div>
     
        </div>
    );    
}

export default ExpenseManagerHomePage;