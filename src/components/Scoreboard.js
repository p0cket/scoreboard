import React from 'react';

const Scoreboard = (props) => {
    return(
        <div>The score is {props.score}</div>
    )
}

//--- Deprecated Class version
//
// class Scoreboard extends React.Component {
//     render(){
//         return <div>The score is {this.props.score}</div>
//     }
// }

export default Scoreboard;
