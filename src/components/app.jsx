import React, { Component } from 'react'

class App extends Component{
    
    render(){

        // return React.createElement('div',{
        //     className:'App'
        // },[
        //     React.createElement('h1',null,'What is JSX?'),
        //     React.createElement('p',null,'JSX is some javaScript code.It mean javaScript extention.')
        // ])

        return(
            <div className="App">
                <h1>What is JSX?</h1>
                <p>JSX is some javaScript code.It mean javaScript extention.</p>
            </div>
        )
    }
}

export default App;


//functional component
// function myFunctionalComponent(){
//     let name = 'Md Tazri';
//     return <h1>This is functional component</h1>
// }

//arrow functional component
// const myArrowFunctionalComponent = ()=> <h1>This is arrow functional component</h1>



//Element Property and value in React js

const element = {
    type : 'div',
    props : {
        className : 'Test',
        title : 'testMe'
    },
    children: ['p','h1','div'] | 'text' | null
}