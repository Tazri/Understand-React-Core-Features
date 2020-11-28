import React from 'react'

// import style here
import nameOfClasses from './btnOne.style.module.css'

class Btn extends React.Component{

    //event onChange

    state = {
        name :''
    }

    displayValue = event =>{
        this.setState({name : event.target.value})
    }

    fucusIt = event =>{
        console.log('I am focus');
    }

    blurIt = event =>{
        if(!event.target.value){
            alert('Provide Your Name Please');
        }
        console.log('It blur Now')
    }

    render(){
        return(
            <div>
                <h1>This is btnOne component here</h1>
                <button className={nameOfClasses.button} {...this.props}>{this.props.children}</button>
                <input 
                    onChange={this.displayValue} 
                    type="text" 
                    className={nameOfClasses.inputStyle}
                    value={this.state.name}
                    onFocus = {this.fucusIt}
                    onBlur = {this.blurIt}/>
                <br/><br/>
                {this.state.name && <h3>Wellcome, {this.state.name}</h3>}
            </div>
        )
    }
}


export default Btn