import React from 'react';


class Dojo extends React.Component {

    constructor(){
        super()
        this.updatesScore = this.updatesScore.bind(this) 
    }

    // updatesScore = () => (scores, name, number){} // bond short version//
    updatesScore(scores, name, number){
        console.log(scores.filter(user => user.player === name).map(user => user.score += number));
        
    }

    render() {
        const scores = [
            {
                player: "Maggie",
                score: 762
            },
            {
                player: "Annie",
                score: 102
            },
            {
                player: "Sanchez",
                score: 882
            },
            {
                player: "Dee",
                score: 609
            }
        ];
        
        return (
            <div>
                <button onClick={() => this.updatesScore(scores, "Sanchez", 100)}>Sanchez score + 100</button>
            </div>
            
        )
    }
}

export default Dojo;