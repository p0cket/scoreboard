import React from 'react';

const TextField = (props) => {
    return (
        <div>
            <form >
                <input value={props.text} onChange={props.handleChange} onSubmit={props.handleSubmit}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TextField;
