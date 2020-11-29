import React from 'react'


//this file create for design single input tameplate.
const TypeInput = props=>{
    return(
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
                <input 
                    type={props.type}
                    name={props.name}
                    id={props.name}
                    placeholder={props.placeholder}
                    className="form-control my-2"
                    value = {props.value}
                    onChange={props.onChange}/>
        </div>
    )
}

export default TypeInput