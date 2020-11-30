import React from 'react'

//import text template in here
import TextInput from './components/textInput'

//radio template here
import RadioInput from './components/radioInput'

//check tamplate here
import CheckInput from './components/checkInput'

//firstDataObject
const firstDataObject ={
    value: {
        name : '',
        email:'',
        password:'',
        birthDate:'',
        gender:''
    },
    agreement: false
} 

class SingUp extends React.Component{

    state = {
        ...firstDataObject
    }

    //onChangeHandaler
    onChangeHandaler = event =>{
        this.setState({
            value : {
                ...this.state.value,
                [event.target.name]:event.target.value
            }
        })
    }

    //onSubmitHandaler
    onSubmitHandaler = event =>{
        event.preventDefault();
        console.log(this.state);
        this.setState({...firstDataObject})
    }

    //onChangeHandaler For CheckBox
    onChagneHandalerForCheckBox = event =>{
        this.setState({
            agreement : event.target.checked
        })
    }

    render(){
        const {name,email,password,birthDate,gender} = this.state.value;
        return(
            <form onSubmit={this.onSubmitHandaler} className="container bg-primary my-3 py-3 text-light">
                {/* name field */}
                <TextInput 
                    name="name"
                    label="Enter Your Name"
                    type="text"
                    value={name}
                    placeholder="Enter Your Name"
                    onChange={this.onChangeHandaler}/>
                {/* end name field */}

                {/* email field */}
                <TextInput
                    name="email"
                    label="Enter Your Email"
                    type="email"
                    value={email}
                    placeholder="example@gmail.com"
                    onChange={this.onChangeHandaler}/>
                {/* end email field */}

                {/* password field */}
                <TextInput
                    name="password"
                    label="Enter New Password"
                    type="password"
                    value={password}
                    placeholder="************"
                    onChange={this.onChangeHandaler}/>
                {/* end password field */}

                {/* birthDate field */}
                <TextInput
                    name="birthDate"
                    label="Enter Your Birth Date"
                    type="date"
                    value={birthDate}
                    onChange={this.onChangeHandaler}/>
                {/* end birthDate Field */}

                {/* gender field */}
                <label htmlFor="gender" className="mr-3">Gender:</label>
                <RadioInput
                    name="gender"
                    value="male"
                    onChange={this.onChangeHandaler}
                    label="Male"/>
                <RadioInput
                    name="gender"
                    value="famale"
                    onChange={this.onChangeHandaler}
                    label="Female"/>
                <RadioInput
                    name="gender"
                    value="other"
                    onChange={this.onChangeHandaler}
                    label="Other"/>
                <br/>
                {/* end gender field */}

                {/* agree field */}
                <CheckInput 
                    name="agreement"
                    value={this.state.agreement}
                    checked={this.state.agreement}
                    onChange = {this.onChagneHandalerForCheckBox}
                    label="Are you Agree our Conditional and logic?"/>
                <br/>
                {/* end agree field */}

                {/* submit field */}
                <button className="btn btn-success my-3" disabled={!this.state.agreement}>Create User</button>
                
            </form>
        )
    }
}


export default SingUp