import React from 'react';

class Todo extends React.Component{

    constructor(props){
        super(props)
    }


    myMethod(){
        
        const test = 1 + 2

        return(
            test
        )
        
    }

    render(){
        return(
            <p>
                paragraph
                {this.myMethod}
            </p>
        )
    }
}

export default Todo;