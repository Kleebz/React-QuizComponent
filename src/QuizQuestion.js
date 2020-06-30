import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component{
    
  constructor(props){
    super(props);
    this.state = {incorrectAnswer: false};
}
  
    render(){
      var index = 0;

        return <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : null}
        <section className="buttons">
          <ul>
          {this.props.quiz_question.answer_options.map((answer_option, index) => {
              return <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)} />
            })}
          </ul>
        </section>
      </main>
    }

    handleClick(buttonText){
      buttonText === this.props.quiz_question.answer ? this.props.showNextQuestionHandler() : this.setState({ incorrectAnswer : true })
      buttonText === this.props.quiz_question.answer ? this.setState({ incorrectAnswer : false }) : this.setState({ incorrectAnswer : true })//this.props.showNextQuestionHandler()
    }
}

export default QuizQuestion;

// {this.props.quiz_question.answer_options.forEach(answer_option => {
//   index++;
//   console.log(answer_option + ' ' + index );
//   return <QuizQuestionButton key={index} button_text={index + '.' + answer_option} clickHandler={this.handleClick.bind(this)}></QuizQuestionButton>})}