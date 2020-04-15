import React from 'react';
import Dojo from './components/Dojo';

function App(){ // version fonction
    // const scores = [
    //     {
    //         player: "Maggie",
    //         score: 762
    //     },
    //     {
    //         player: "Annie",
    //         score: 102
    //     },
    //     {
    //         player: "Sanchez",
    //         score: 882
    //     },
    //     {
    //         player: "Dee",
    //         score: 609
    //     }
    // ];

    // const updatesScore = (names, number) => {
    //     scores.filter(user => user.player === name).map(user => user.score += number)
    // }

    // updatesScores("Sanchez", 100)

    return(
        <div>
            <Dojo />
            {/* <button onClick={() => updatesScores}></button> */}
        </div>
    )
}

export default App;