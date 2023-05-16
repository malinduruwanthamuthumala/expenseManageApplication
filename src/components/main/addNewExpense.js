import React, {useState}from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./expensesListComponent/addNewExpense.css"
import { Button } from "react-bootstrap";
const AddNewExpense = (props) => {
    
    const [expenseData,setExpenseData] = useState({
        id:"",
        titile:"",
        Amount:"",
        date:"",
    });

    const [enteredTitle,setEnteredTititle] = useState("");
    const [enteredAmount,setEnteredAmount] = useState("");
    const [enteredDate,setEnteredDate] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newExpense = {
            id:Math.random().toString(),
            title:enteredTitle,
            amount:enteredAmount,
            date:enteredDate,
        }
        setExpenseData(newExpense);
        props.newExpenseAdditionHandler(newExpense);
        clearEnteredExpenseData();
    }

    const clearEnteredExpenseData = () => {
        setEnteredTititle("");
        setEnteredDate("");
        setEnteredAmount("");
    }

    const onTitleChangeHandler = (event)=>{
        setEnteredTititle(event.target.value)
    }

    const onDateCHangeHandler =(event)=>{
        setEnteredDate(event.target.value);
    }

    const onAmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    return(
        <Form onSubmit={onSubmitHandler}>
            <Row className="addNewExpense_col">
                <Col>
                <Form.Control placeholder="Title" value={enteredTitle} onChange={onTitleChangeHandler}/>
                </Col>
                <Col>
                <Form.Control placeholder="Amount" value={enteredAmount} onChange={onAmountChangeHandler}/>
                </Col>
            </Row>
            <Row className="addNewExpense_col">
                <Col>
                <Form.Control placeholder="date" type="date" value={enteredDate} onChange={onDateCHangeHandler}/>
                </Col>               
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                    <Button variant="outline-success" type="submit">Add New Expense</Button>
                    </div>
                </div>
                
                </Col>
            </Row>
    </Form>
    )
}





export default AddNewExpense;