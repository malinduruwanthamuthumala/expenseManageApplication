import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import DateComponent from "../../common/DateComponent";

const ExpenseItem = (props) => {
    return(
       <li className="center list-item">
        <Card border="primary" style={{ width: '100%' }}>
        
        <Card.Body>
            <div className="container-fluid ">
                <div className="row center">
                    <div className="col-md-3">
                        <DateComponent
                            date={props.date}
                        ></DateComponent>
                    </div>
                    <div className="col-md-3 expense_item_title" >
                    <h6 className="expense_item_title">{props.title}</h6>
                    </div>
                    <div className="col-md-4">
                    <p className="expense_item_price">Rs:{props.amount} </p>
                    </div>
                    <div className="col-md-2">
                    <Button variant="danger">Delete</Button>
                    </div>
                </div>
            </div>
          
        </Card.Body>
      </Card>
       </li>
    )
}
export default ExpenseItem;