import React from 'react'

import './timer.style.css'
class Timer extends React.Component{

    intervalId = null;

    state = {
        count : 0
    }

    increament = ()=>{
        this.setState({count:this.state.count +1})
    }

    decreament = () =>{
        if(this.state.count != 0 && this.state.count >0){
            this.setState({count:this.state.count -1});
        }
    }
    
    counterStart = ()=>{
        if(this.state.count != 0){
            this.intervalId = setInterval(()=>{
                this.setState({count: this.state.count - 1},()=>{
                    if(this.state.count <= 0){
                        alert('CountDown Is Finish');
                        clearInterval(this.intervalId);
                        this.intervalId = null;
                        this.setState({count : 0})
                    }
                })
            },1000)
        }
    }


    counterStop = ()=>{
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    counterReset = ()=>{
        this.counterStop();
        this.setState({count: 0});
    }

    render(){
        return(
            <div className='container'>
                <h2 className="title">Counter</h2>
                <div className="set-timer-box">
                    <button onClick = {this.decreament} className='set-btn'>-</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.increament} className='set-btn'>+</button>
                </div>

                <div className="option-btn">
                    <button onClick = {this.counterStart} className="opt-btn">Start</button>
                    <button onClick = {this.counterStop} className="opt-btn">Stop</button>
                    <button onClick = {this.counterReset} className="opt-btn">Reset</button>
                </div>
            </div>
        )
    }
}


export default Timer