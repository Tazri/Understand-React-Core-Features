import React from 'react'

const RadioInput = props =>{
    return(
        <div className="form-group d-inline-block">
            <input 
                type="radio"
                name={props.name}
                id={props.value}
                value={props.value}
                onChange={props.onChange}
                className="mr-2"/>
                <label htmlFor={props.value} className="mr-2">{props.label}</label>
        </div>
    )
}

//Props Requeird In This Components
//name
//onChange
//label


export default RadioInput