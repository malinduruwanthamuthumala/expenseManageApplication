import React from "react";
import {
    BrowserRouter as Router,   
    Route,
    Routes, 
  } from "react-router-dom";
import ExpenseManagerHomePage from "../../../pages/expenseManager/expenseManagerHomePage";

const ExpenseManagerRouter = () => {

    return(
        <Router>
         <Routes>           
            <Route path="/" element={<ExpenseManagerHomePage />}>            
            </Route>
         </Routes>       
        </Router> 
    )
}

export default ExpenseManagerRouter;