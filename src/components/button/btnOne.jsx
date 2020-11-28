import React from 'react'

// import style here
import nameOfClasses from './btnOne.style.module.css'

class Btn extends React.Component{
    render(){
        return(
            <div>
                <h1>This is btnOne component here</h1>
                <button className={nameOfClasses.button} {...this.props}>{this.props.children}</button>
            </div>
        )
    }
}


export default Btn