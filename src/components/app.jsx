import React from 'react'

//Uncontrol form import here
import Form from './input'

//Control Form import here
import ControlForm from './input/controlForm'

//import singup form here
import SingUp from './singUp'

class App extends React.Component{
    render(){
        return(
            <>
            {/* <h1 className="text-center bg-primary py-2 text-light">
                Uncontrol form
            </h1> */}
            {/* <Form/> */}
            {/* <h1 className="text-center bg-primary py-2 text-light">
                Control form
            </h1>
            <ControlForm/> */}
            <h1 className="bg-primary text-center py-2 text-light">Sing Up Form</h1>
            <SingUp/>
            </>
        )
    }
}


export default App