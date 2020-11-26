import React, { Component } from 'react'

//Costum component in ract 
// let MyComponent = ()=><h1>Hello World,My name is Md Tazri</h1>

//import profile
import Profile from './profile'

//import css file from profile for container class style
import './profile/profile.style.css'

//Import Bio from profile
import Bio from './profile/bio'

//Import skill from profile
import Skills from './profile/skills'

//import socialLinks from profile
import SocialLinks from './profile/socialLinks'

//import MyProps for understand Props 
// import MyProps from './props'

class App extends Component{
    
    //Data for user two for profile card
    userTwo = {
        name : 'Pentm Focasa',
        title : 'I am will be hacker.I will created by Md Tazri in future',
        skills : {
            skillOne : 'Python',
            skillTwo : 'Kali Linux',
            skillThree : 'Black Hacker',
            skillFour : 'White Hacker'
        }
    }
    //End User two data for profile

    //Data for user Three for profile card
    userThree = {
        name : 'Unknow',
        title : 'He/She is unknow person.No one know about him/her.',
        skills: {
            skillOne : 'Unknow',
            skillTwo : 'Unknow',
            skillThree : 'Unknow',
            skillFour : 'Unknow'
        }
    }

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
                {/* <MyProps name='Md Tazri'/>
                <MyProps name='Md Meraz'/>
                <MyProps name='Pentm Focasa'/> */}
                
                {/* profile two for secound user */}
                <div className="container">
                    {/* userTwo Bio */}
                    <Bio name={this.userTwo.name} title={this.userTwo.title}/>
                    {/* end user Two bio */}

                    {/* userTwo skills */}
                    <Skills
                        skillA={this.userTwo.skills.skillOne}
                        skillB={this.userTwo.skills.skillTwo}
                        skillC={this.userTwo.skills.skillThree}
                        skillD={this.userTwo.skills.skillFour}
                    />
                    {/* End userTwo Skills */}

                    {/* user two social links */}
                    <SocialLinks/>
                    {/* end user two social links */}
                </div>
                {/* end profile two for secound user */}

                {/* profile three for unknow person */}
                <div className="container">
                    {/* unknow person bio */}
                    <Bio name={this.userThree.name} title={this.userThree.title}/>
                    {/* end unknow person bio */}

                    {/* unknow person skills */}
                    <Skills
                        skillA={this.userThree.skills.skillOne}
                        skillB={this.userThree.skills.skillTwo}
                        skillC={this.userThree.skills.skillThree}
                        skillD={this.userThree.skills.skillFour}
                    />
                    {/* end unknow person skills */}

                    {/* social link for unknow person */}
                    <SocialLinks/>
                    {/* end social link for unknow person */}
                </div>

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