import React from 'react'

class Form extends React.Component{

    onSubmit = event=>{
        event.preventDefault();
        const data = {};
        data.name = event.target.Name.value;
        data.email = event.target.Email.value;
        data.password = event.target.Password.value;
        console.log(data);
    }

    render(){
        return(
            <form className="container bg-primary text-light py-5" onSubmit={this.onSubmit}>
                {/* name field */}
                <label htmlFor="Name">Name</label>
                <input 
                    type="text"
                    name="Name"
                    id="Name"
                    placeholder="Enter Your Name"
                    className="form-control my-2"/>
                {/* end name field */}

                {/* email field */}
                <label htmlFor="Email">Email</label>
                <input 
                    type="email"
                    name="Email"
                    id="Email"
                    placeholder="example@gmail.com"
                    className="form-control my-2"/>
                {/* end email field */}

                {/* password field */}
                <label htmlFor="Password">Password</label>
                <input 
                    type="password"
                    name="Password"
                    id="Password"
                    placeholder="Password"
                    className="form-control my-2"/>
                {/* end password field */}
                
                <button type="submit" className="btn btn-success my-3">Submit</button>

            </form>
        )
    }
}

export default Form