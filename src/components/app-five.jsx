import React from 'react'

//import new button
import Btn from './button/btnOne'

//import style in here
import './button/app.style.css'
import { ConsoleWriter } from 'istanbul-lib-report';

class App extends React.Component{

    myHeader = {
        color: 'crimson',
        textAlign : 'center',
        margin: '20px auto'
    }

    //function for button in here
    clicked = (event)=>{
        console.log('I have clicked');
        console.log(event);
        console.log(event.target);
    }


    render(){
        return(
            <div>
                {/* <h1 style={this.myHeader}>I am Md Tazri</h1>
                <h2 style={{
                            color: 'crimson',
                            textAlign : 'center',
                            margin: '20px auto',
                            textDecoration: 'underline solid crimson',
                            textDecorationWidth: '15px',
                            textDecorationThickness: '20px'
                        }}>I am programmer</h2> */}

                {/* Now started File css */}
                <h1>This is simpe button in App</h1>
                <button onClick = {this.clicked} className="button">Hover Me</button>
                <Btn>Touch Me</Btn>
            </div>
        )
    }
}


export default App