import React, { useState } from "react";
import ExpenseItem from "./expenseItem";
import AddNewExpense from "../addNewExpense";
import "./expenseItem.css";
import FilterByDate from "../filterComponenet/filterByDateComponent";

const ExpensesList = () => {
  const [expenseItems, setExpenseItemData] = useState([
    {
      id: "1",
      title: "new book",
      amount: "450",
      date: new Date("2020-03-25"),
    },

    {
      id: "2",
      title: "Electricity Bill",
      amount: "3450",
      date: new Date("2022-03-24"),
    },
    {
      id: "3",
      title: "Credit card Payment",
      amount: "23450",
      date: new Date("2023-04-15"),
    },
    {
      id: "4",
      title: "new shoes",
      amount: "950",
      date: new Date("2021-08-25"),
    },
  ]);

  const [filteredExpenses, setFilteredExpenses] = useState(expenseItems);
  const [filterDate, setFilterDate] = useState(new Date().getFullYear().toString());

  const onNewExpenseAdditionHandler = (expense) => {
    debugger;
    setExpenseItemData((existingItems) => {
      return [expense, ...existingItems];
    });
  };

  const filterModificationHandler = (filterValue) => {
    setFilterDate(filterValue);
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="container-fluid add_new_expense">
          <AddNewExpense
            newExpenseAdditionHandler={onNewExpenseAdditionHandler}
          ></AddNewExpense>
        </div>
        <div className="expense_item">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              {" "}
              <FilterByDate
                onFIlterModification={filterModificationHandler}
              ></FilterByDate>
            </div>
          </div>
          <ul className="center">
            { expenseItems.filter((item) => {
      const date = new Date(item.date);
      return date.getFullYear().toString() == filterDate ? true : false;
    }).map((expenseItem) => {
              return (
                <ExpenseItem
                  key={expenseItem.id}
                  title={expenseItem.title}
                  amount={expenseItem.amount}
                  date={expenseItem.date}
                ></ExpenseItem>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpensesList;
