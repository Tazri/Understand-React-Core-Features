import React from 'react'



class App extends React.Component{

    myHeader = {
        color: 'crimson',
        textAlign : 'center',
        margin: '20px auto'
    }

    render(){
        return(
            <div>
                <h1 style={this.myHeader}>I am Md Tazri</h1>
                <h2 style={{
                            color: 'crimson',
                            textAlign : 'center',
                            margin: '20px auto',
                            textDecoration: 'underline solid crimson',
                            textDecorationWidth: '15px',
                            textDecorationThickness: '20px'
                        }}>I am programmer</h2>
            </div>
        )
    }
}


export default App