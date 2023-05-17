import React,{useState}from "react";
import Select from 'react-select'

const FilterByDate = (props) => {

    const [selectedyear,setSelectedYear] = useState("");

    const options = [
        { value: '2022', label: '2022' },
        { value: '2023', label: '2023' },
        { value: '2024', label: '2024' }
      ];
      debugger
    const year = options.findIndex( (option)=> {
     return  option.value === new Date().getFullYear().toString()
    })
    const onYearSelectionHandler = (event) => {
        debugger
        setSelectedYear(event.value);
        props.onFIlterModification(event.value);
    }

    return (<div>

      {      
        
        <Select options={options} defaultValue={options[year]} onChange={onYearSelectionHandler} getOptionValue={(option) => option['id' ]}/>        
      }

    </div>);
}

export default FilterByDate;