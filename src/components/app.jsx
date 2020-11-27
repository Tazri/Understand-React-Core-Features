import React from 'react'


class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.count = 0;
    // }

    count = 0;

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
            </div>
        )
    }
}

export default App;