import React from 'react'


class App extends React.Component{
    //normal propert 
    // constructor(props){
    //     super(props);
    //     this.count = 0;
    // }
    
    count = 0;
    //end normal property

    //state
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         count : 0
    //     }
    // }
     
    state = {
        count : 0
    }
    render(){
        return(
            <div>
                <h1>What is State?</h1>
                <p>State is some code which code contain component data.Why it need for?</p>
                <h3>Example for why need state.</h3>
                <h1>This is Count = {this.count} </h1>
                <button onClick={()=>{
                    console.log('Click.....',this.count++);
                }}>Add One</button>
                <h1>Why use State?</h1>
                <p>Now we see that above.If we use normal property in JSX code.If we update this property in future so property will be update but JSX code where use out property is not update.This why We use State in React.</p>
                <h1>Try to same think again by react state</h1>
                <h2>This is Count and this value is = {this.state.count}</h2>
                <button onClick={()=>{
                    // this.setState({count : this.state.count+1});
                    //it not work for update state
                    // this.state.count = this.state.count + 1;
                     this.setState(prev =>{
                        return {
                            count : this.state.count +1
                        }
                     },()=>{
                        console.log('this is state count clicked....',this.state.count);
                     })

                    //Below this code not update with state because state is asycn.
                    // console.log('this is state count clicked....',this.state.count);
                }}>Add One</button>
            </div>
        )
    }
}

export default App;
