import React from 'react'



class Input extends React.Component{


    //user data
    state = {
        name : '',
        country: '',
        bio: '',
        birthDay : '',
        gender : '',
        agree : false,
        skills: []
    }

    onChangeForSkills = event =>{
        if(event.target.checked){
            this.setState({
                skills : [...this.state.skills,event.target.value]
            })
        }else{
            const newSkills = this.state.skills.filter(element=>element != event.target.value);
            this.setState({
                skills : newSkills
            })
        }
    }

    userInput = event =>{
        this.setState({[event.target.name]:event.target.value})
    }

    submitThis = event =>{
        console.log(this.state);
    }

    handleCheckBox = event =>{
        this.setState({[event.target.name]: event.target.checked})
    }

    render(){
        const {name,country,bio,birthDay,agree,skills} = this.state;
        return(
            <div className="container bg-primary py-5 text-light">
                <h1 className="my-3 text-center">Form</h1>
                
                {/* nameField */}
                <label htmlFor="name">Name </label>
                <input 
                    type="text" 
                    name='name' 
                    id='name' 
                    className='form-control'
                    onChange={this.userInput}
                    value={name}/>
                {/* end nameField */}

                {/* country field */}
                <label htmlFor="country" className='my-1'>Country</label>
                <select name="country" id="country" value={country} className="form-control" onChange={this.userInput}>
                    <option>Select Your Country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="China">China</option>
                    <option value="Japan">Japan</option>
                </select>
                {/* end country field */}

                {/* bio field */}
                <label htmlFor="bio" className='my-1'>Bio</label>
                <textarea name="bio" 
                id="bio" 
                className="form-control"
                placeholder="Tell Me About Your Self"
                onChange={this.userInput}
                value={bio}></textarea>
                {/* End Bio Field */}

                {/* date of birth field */}
                <label htmlFor="birthDay" className="my-1">Date Of Birth</label>
                <input 
                    type="date"
                    className="form-control"
                    name="birthDay"
                    id="birthDay"
                    onChange={this.userInput}
                    value={birthDay}/>
                {/* end date of birth field */}

                {/* gender field */}
                <label htmlFor="gender" className="my-3">Gender:</label>
                <input 
                    type="radio"
                    name="gender"
                    id="Male"
                    className="mx-2 my-3"
                    value="Male"
                    onChange={this.userInput}/>
                    <label htmlFor="Male" className="my-3">Male</label>
                <input 
                    type="radio"
                    name="gender"
                    id="Female"
                    className="mx-2"
                    value="Female"
                    onChange={this.userInput}/>
                    <label htmlFor="Female">Female</label>
                <br/>
                {/* End gender field */}

                {/* skill field */}
                <br/>
                <div className="my-1">
                    <label htmlFor="skill">Skills:</label>
                    <br/>
                    <input 
                        type="checkbox"
                        name="skill"
                        id="Java"
                        value="Java"
                        checked={skills.includes("Java")}
                        onChange={this.onChangeForSkills}/>
                        <label htmlFor="Java" className='mx-2'>Java</label>
                        <br/>
                    <input 
                        type="checkbox"
                        name="skill"
                        id="JavaScript"
                        value="JavaScript"
                        checked={skills.includes("JavaScript")}
                        onChange={this.onChangeForSkills}/>
                        <label htmlFor="JavaScript" className='mx-2'>JavaScript</label>
                        <br/>

                    <input 
                        type="checkbox"
                        name="skill"
                        id="Golang"
                        value="Golang"
                        checked={skills.includes("Golang")}
                        onChange={this.onChangeForSkills}/>
                        <label htmlFor="Golang" className='mx-2'>Golang</label>
                        <br/>

                    <input 
                        type="checkbox"
                        name="skill"
                        id="Python"
                        value="Python"
                        checked={skills.includes("Python")}
                        onChange={this.onChangeForSkills}/>
                        <label htmlFor="Python" className='mx-2'>Python</label>
                        <br/>
                    


                <br/>
                </div>
                {/* end skill field */}

                {/* check agree or not field */}
                <input 
                    type="checkbox"
                    name="agree"
                    id="agree"
                    value={agree}
                    onChange={this.handleCheckBox}/>
                    <label htmlFor="agree" className="mx-2">I am agre this condition and logic.</label>
                    <br/>
                {/* end check agree or not field */}
                <button className="btn btn-success my-4" onClick={this.submitThis}>Submit</button>

            </div>
        )
    }
}


export default Input