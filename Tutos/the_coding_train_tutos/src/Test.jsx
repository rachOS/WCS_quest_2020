import React, {Component} from 'react'
import TestObject from './TestObject'

class Test extends Component{
    constructor(props){
        super(props)
        this.state = console.log(props)
    }

    render(){
        const testy = new TestObject(5,6,10)
        console.log(this.state)
        return(
            <>TEST

            {testy.add(28,12)}
            </>
        )
    }
}


export default Test