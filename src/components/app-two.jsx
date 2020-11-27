import React from 'react'

class Child extends React.Component{
    render(){
        this.props.func(this);
        return(
            <div>
                <h2>I am Child</h2>
            </div>
        )
    }
}

const ChildComponent = props=>(
    <div>
        <h1>This is child components</h1>
        <h3>I don't know what to do next</h3>
        {props.children}
    </div>
)

class App extends React.Component{
    
    getContext(context){
        console.log(context);
    }

    render(){
        this.getContext(this);
        return(
            <div>
                <h1>It is parent</h1>
                {/* <Child func={this.getContext}/> */}
                <ChildComponent>
                    <h4>Md Tazri</h4>
                    <p>I am programmer</p>
                </ChildComponent>
            </div>
        )
    }
}

export default App