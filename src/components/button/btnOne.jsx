import React from 'react'

// import style here
import './btnOne.style.css'

class Btn extends React.Component{
    render(){
        return(
            <div>
                <h1>This is btnOne component here</h1>
                <button className='btn' {...this.props}>{this.props.children}</button>
            </div>
        )
    }
}


export default Btn