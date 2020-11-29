import React from 'react'

import TypeInput from './typeInput'

//This file create for design form template
const FormTemplate = props=>{
    return(
        <form className="container bg-primary text-light py-5" onSubmit={props.onSubmit}>
                {/* name field */}
                <TypeInput
                    name="name"
                    type="text"
                    label="Enter your Name"
                    placeholder="Enter Your Name"
                    value={props.value.name}
                    onChange={props.onChange}/>
                {/* end name field */}

                {/* email field */}
                <TypeInput
                    name="email"
                    type="email"
                    label="Enter your Email"
                    placeholder="example@email.com"
                    value={props.value.email}
                    onChange={props.onChange}/>
                {/* end email field */}

                {/* password field */}
                <TypeInput
                    name="password"
                    type="password"
                    label="Enter your Password"
                    placeholder="***********"
                    value={props.value.password}
                    onChange={props.onChange}/>
                {/* end password field */}
                
                <button type="submit" className="btn btn-success my-3">Submit</button>

            </form>
    )
}

export default FormTemplate;