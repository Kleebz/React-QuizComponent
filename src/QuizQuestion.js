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
            {this.props.quiz_question.answer_options.forEach(answer_option => {
              index++;
              console.log(answer_option + ' ' + index );
              <QuizQuestionButton key={index} button_text={index + '.' + answer_option} clickHandler={this.handleClick.bind(this)}></QuizQuestionButton>;})}
              {/* <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]}></QuizQuestionButton> */}
          </ul>
        </section>
      </main>
    }

    handleClick(buttonText){
      buttonText == this.props.quiz_question.answer ? this.props.showNextQuestionHandler() : console.log('still going');
    }
}

export default QuizQuestion;