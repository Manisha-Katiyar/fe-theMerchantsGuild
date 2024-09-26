import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import Select from "react-dropdown-select";
import './Fight.css'
// import Question from "../../components/types/";
import {questionType} from '../../components/questions/constants'
import Question from "../../components/questions/Question";
import { useLocation } from "react-router-dom";

export default function Fight () {
    const location = useLocation()

    // console.log(location.state.level )
    
    const editorRef = useRef(null);

    return (
        <>  
            <h1>LEVEL - {location.state.level}</h1>
            <Question 
                level = {location.state.level}
            />
        </>
    );
}


