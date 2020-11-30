import React from 'react'

const CheckInput = props =>{
    return(
        <div className="d-inline-block">
            <input 
                type="checkbox"
                name={props.name}
                id={props.name}
                value={props.value}
                checked={props.checked}
                className="mr-2"
                onChange={props.onChange}/>
                <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}

//Props Name In here
//name
//value
//onChange
//label
//checked

export default CheckInput