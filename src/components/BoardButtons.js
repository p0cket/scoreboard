import React from 'react';

const BoardButtons = (props) => {
    return (
        <div>
            <button  onClick={() => props.changeScore(1)}>Increase</button>
            <button  onClick={() => props.changeScore(-1)}>Decrease</button>


        </div>
    )
}

//--- Deprecated Class version
//
// class BoardButtons extends React.Component {
//     render(){
//         return (
//             <div>
//                 <button  onClick={this.props.increase}>Increase</button>
//                 <button  onClick={this.props.decrease}>Decrease</button>
//
//                 <input value={this.props.text} onChange={this.props.handleChange} />
//             </div>
//         )
//     }
// }

export default BoardButtons;
