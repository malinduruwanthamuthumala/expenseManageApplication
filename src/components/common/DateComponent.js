import React, { useState, useEffect } from 'react';
import "./DateComponent.css"
const DateComponent = (props) =>{

      const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

      debugger
       const year = props.date.getFullYear();
       const month = months[props.date.getMonth()];
       const day = props.date.getDate()


    return(
        <div className="date">
            <div className="row">
                <div className="col-md-4 date_text">
                    <h5>{day}</h5>
                </div>
                <div className="col-md-4 date_text">
                    <h5>{month}</h5>
                </div>
                <div className="col-md-4 date_text">
                    <h5>{year}</h5>
                </div>
                
                
            </div>
           
        </div>
    )
}
export default DateComponent;