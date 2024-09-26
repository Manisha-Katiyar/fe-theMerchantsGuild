import Select from "react-dropdown-select";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";

export default function CodeItOut(){
    const [languageSelected, setLanguageSelected] = useState('')
    const editorRef = useRef(null)

    const options = [
        {
          value: 1,
          label: 'Python'
        },
        {
          value: 2,
          label: 'SQL'
        }
      ];
      

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    function showValue() {
        alert(editorRef.current.getValue());
    }
    return (
        <>
            <Select options={options} onChange={(values) => setLanguageSelected(values)} />
            <Editor
                height="90vh"
                // defaultLanguage="javascript"
                defaultValue="// some comment"
                onMount={handleEditorDidMount}
                language="python"
         />
        </>
    )
}   