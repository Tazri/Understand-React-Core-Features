import React from 'react'
import { tsPropertySignature } from '@babel/types';

import FormTemplate from './formTemplate'

class ControlForm extends React.Component{

    state = {
        name: '',
        email : '',
        password: ''
    }


    onChangeHandler = event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = event =>{
        event.preventDefault();
        console.log(this.state);
        event.target.reset();
        this.setState({
            name: '',
            email:'',
            password: ''
        })
    }

    render(){
        return(
            <>
                <FormTemplate
                    onSubmit={this.onSubmit}
                    onChange={this.onChangeHandler}
                    value={this.state}/>
            </>
        )
    }
}

export default ControlForm;