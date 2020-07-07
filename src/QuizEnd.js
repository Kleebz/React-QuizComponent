// const { Component } = require("react")

import React, { Component } from 'react'

class QuizEnd extends Component{
  //Jacob ToDo: Remember, This syntax will be used a lot. Remember how to bind!
    render(){
        return <div>
        <p>Thanks for playing!</p>
        <a href='' onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
      </div>
    }

    handleResetClick(){
      this.props.resetClickHandler();
    }
}

export default QuizEnd