import { useState } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';

export default function Mcq(props){
    const { question } = props

    const [answer, setAnswer] = useState('')
    const navigate = useNavigate()

    const validateAnswer = () => {
        if (answer == question.answer) {
            localStorage.setItem("playerLevel", parseInt(localStorage.getItem("playerLevel"))+1)
            navigate("/map")
        } else {
            localStorage.setItem("health", parseInt(localStorage.getItem("health"))-1)
            window.alert("Oops! Wrong answer")
        }

        if (!parseInt(localStorage.getItem("health"))) {
            window.alert("Game Over!")
            navigate("/")
        }
    }

    return (
        <>

        <div className="fight-container">
            <div className="information">
                <h2>Read On ...</h2>                            
                    <div className="Description" >
                        {question.description}
                    </div>
            </div>
            
            <div className="vertical-divider"></div>
                
            <div className="mcq-Container">
                <div className='question-text'>
                    <h3>{question.question}</h3>
                </div>
                <RadioGroup onChange={(value) => setAnswer(value)} vertical>
                    {
                        question.options.map((option, index) => (
                            <RadioButton value={index + 1} >
                                {option}
                            </RadioButton>)
                        )
                    }
                </RadioGroup>
                <Button variant="outlined" onClick={validateAnswer}>Submit</Button>
            </div>
        </div>

        </>
    )
}   
