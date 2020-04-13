import React from 'react'
import Todo from './Todo'

function Main(){

    const name = "Grégory";
    const lastname = "Chamekh";

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const style = {fontSize: "12px"}
    
    if(hours < 12){
        timeOfDay = "Good morning"
        style.color = "#0072e6"
    }else if(hours >= 12 && hours < 17){
        timeOfDay = "Good afternoon"
        style.color = "#fff1e8"
    }else{
        timeOfDay = "Good evening"
        style.color = "#cc0100"
    };

    return(
        <main className="main">
            <iframe width="auto" height="auto" src="https://www.youtube.com/embed/DLX62G4lc44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <section>
                <p style={style}>
                    {timeOfDay} {name} {lastname}
                </p>
            </section>
            <Todo
                postIt = {
                    {
                        labelId: "td1", 
                        inputId: "td1", 
                        label: "Todo 1", 
                        inputType: "checkbox"
                    }
                }
      
            />
            <Todo
                postIt = {
                    {
                        labelId: "td2", 
                        inputId: "td2", 
                        label: "Todo 2", 
                        inputType: "checkbox"
                    }
                }
      
            />
            <Todo
                postIt = {
                    {
                        labelId: "td3", 
                        inputId: "td3", 
                        label: "Todo 3", 
                        inputType: "checkbox"
                    }
                }
      
            />
            
            
            
        </main>
    )
}

export default Main;