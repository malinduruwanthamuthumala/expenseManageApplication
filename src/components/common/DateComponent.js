import React, { useState, useEffect } from 'react';
import "./DateComponent.css"
const DateComponent = (props) =>{

      const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

       const newDate = new Date(props.date)
       const year = newDate.getFullYear();
       const month = months[newDate.getMonth()];
       const day = newDate.getDate();


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