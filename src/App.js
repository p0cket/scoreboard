import React from 'react';
import Scoreboard from './components/Scoreboard';
import BoardButtons from './components/BoardButtons';
import TextField from "./components/TextField";
import Posts from "./components/Posts";

class App extends React.Component {
  state = {
    score: 0,
    text: "Sample",
    posts: [],
  }

  changeScore = (num) => {
    this.setState({score: this.state.score + num});
  }

  increaseScore = () => {
    this.setState({score: this.state.score + 1});
  }

  decreaseScore = () => {
    this.setState({score: this.state.score - 1});
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
    console.log(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({posts: [...this.state.posts, e.target.value]})
  }


  render(){

    return(
        <div>
          <Scoreboard score={this.state.score} />
          <BoardButtons
              changeScore={this.changeScore}
          />
          <TextField
              text={this.state.text}
              handleChange={this.handleChange}
          />
          <Posts posts={this.state.posts}/>
        </div>
    )

  }
}


export default App;
