import React, { Component } from 'react'

//Costum component in ract 
// let MyComponent = ()=><h1>Hello World,My name is Md Tazri</h1>

//import profile
import Profile from './profile'

//import MyProps for understand Props 
import MyProps from './props'

class App extends Component{
    
    render(){

        //name variable
        // let name = 'Md Tazri'

        //attribute for h1 tag
        // let attribute = {
        //     title : 'I am Md Tazri',
        //     id : 'MdTazri'
        // }
        //end attribute for h1 tag

        //bio for me
        // let bio = (
        //     <div>
        //         <h3>My name is Md Tazri</h3>
        //         <p>One day i will be programmer and web developer</p>
        //     </div>
        // )

        //React Write Code by JavaScript Core
        // return React.createElement('div',{
        //     className:'App'
        // },[
        //     React.createElement('h1',null,'What is JSX?'),
        //     React.createElement('p',null,'JSX is some javaScript code.It mean javaScript extention.')
        // ])
        //End React Write Code by JavaScript Core

        //React Write Code by JSX Sugar Code and Thats is Crazy Easy.
        // return(
        //     <div className="App">
        //         <h1>What is JSX?</h1>
        //         <p>JSX is some javaScript code.It mean javaScript extention.</p>
        //     </div>
        // )
        //End React Write Code by JSX sugar code and thats is crazy easy.

        //code by react fragment
        // return(
        //     <React.Fragment>
        //         <h1>What is JSX?</h1>
        //         <p>JSX is Some JavaScript code.It mean JavaScript extention.</p>
        //     </React.Fragment>
        // )
        // //End code by react fragment

        // //code by react fragment sort hand 
        // return(
        //     <>
        //         <h1>What is JSX?</h1>
        //         <p>JSX is some JavaScript code.It mean JavaScript extention.</p>
        //     </>
        // )
        // //end by react fragment sort hand

        //react JSX simple sugar
        // return(
        //     <div className="App" {...attribute}>
        //         <h1>What is JSX?</h1>
        //         <p>JSX is some JavaScript code.It mean JavaScript extention.</p>
        //         <MyComponent/>
        //         <h2>My name is {name}</h2>
        //         <hr/>
        //         {bio}
        //     </div>
        // )

        //div for Profile costum component
        return (
            <div className="App">
                <Profile/>
                <MyProps name='Md Tazri'/>
                <MyProps name='Md Meraz'/>
                <MyProps name='Pentm Focasa'/>
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
// const element = {
//     type : 'div',
//     props : {
//         className : 'Test',
//         title : 'testMe'
//     },
//     children: ['p','h1','div'] | 'text' | null
// }
//End Element Property and Value in React js