import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component{
    
    render(){
      var index = 0;

        return <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
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
      buttonText === this.props.quiz_question.answer ? this.props.showNextQuestionHandler() : console.log('still going');
    }
}

export default QuizQuestion;

// {this.props.quiz_question.answer_options.forEach(answer_option => {
//   index++;
//   console.log(answer_option + ' ' + index );
//   return <QuizQuestionButton key={index} button_text={index + '.' + answer_option} clickHandler={this.handleClick.bind(this)}></QuizQuestionButton>})}