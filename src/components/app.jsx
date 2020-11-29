import React from 'react'

//Uncontrol form import here
import Form from './input'

//Control Form import here
import ControlForm from './input/controlForm'

class App extends React.Component{
    render(){
        return(
            <>
            {/* <h1 className="text-center bg-primary py-2 text-light">
                Uncontrol form
            </h1> */}
            {/* <Form/> */}
            <h1 className="text-center bg-primary py-2 text-light">
                Control form
            </h1>
            <ControlForm/>
            </>
        )
    }
}


export default App