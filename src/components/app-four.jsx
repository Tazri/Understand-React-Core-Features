import React from 'react'
import { assertTSParenthesizedType } from '@babel/types';

import Timer from './timer'

class App extends React.Component{
    render(){
        return(
            <div>
                <Timer/>
            </div>
        )
    }
}

export default App