import Mcq from "../types/Mcq"
import CodeItOut from "../types/CodeItOut"
import {questions, questionType} from './constants'
import { useState } from "react"



export default function Question(props) {
  const {level} = props;

    const question = questions[level]

  // console.log({question})

  const renderContent = () => {
    switch (question.type) {
      case questionType.mcq:
        return <Mcq question={question} />;
      case questionType.codeItOut:
        return <CodeItOut question={question} />;
      default:
        return <div>No matching question type.</div>;
    }
  };

    return (
        <div>
            {renderContent()}
        </div>
    );
}   