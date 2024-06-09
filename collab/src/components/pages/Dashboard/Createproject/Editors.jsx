// Editors.jsx
import React, { useState, useRef } from 'react';
import MonacoEditor from 'react-monaco-editor';
import Chatbar from './Chatbar';
import './Editors.css';
import { useNavigate } from 'react-router-dom';

const Editors = () =>  {
  const [code, setCode] = useState('// type your code...');
  const navigate = useNavigate();
  const editorRef = useRef(null);
  

  const editorDidMount = (editor, monaco) => {
    console.log('editorDidMount', editor);
    editorRef.current = editor;
    editor.focus();
  };

  const onChange = (newValue, e) => {
    setCode(newValue);
  };

  function handleUndo() {
    if (editorRef.current) {
      editorRef.current.trigger('keyboard', 'undo', null);
    }
  }

  function handleRedo() {
    if (editorRef.current) {
      editorRef.current.trigger('keyboard', 'redo', null);
    }
  }

  function handleSave() {
    if (editorRef.current) {
      const value = editorRef.current.getValue();
      const blob = new Blob([value], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'document.txt';
      a.click();
    }
  }

  function handleLeave() {
    if (providerRef.current) {
      providerRef.current.disconnect();
      providerRef.current.destroy();
      alert('You are leaving this collaboration');
      navigate('/');
    }
  }

  function handleDelete() {
    if (yDocRef.current) {
      yDocRef.current.getText('monaco').delete(0, yDocRef.current.getText('monaco').length);
      alert('This project will be deleted.');
      navigate('/');
    }
  }

  return (
    <div className="container">
      <div className="editor-container">
        <MonacoEditor
          height="calc(100vh - 40px)" // Adjust height to accommodate the toolbar
          width="calc(100vw - 300px)" // Adjust the width to leave space for the chat bar
          language="javascript"
          //theme="vs -dark"
          value={code}
          options={{
            selectOnLineNumbers: true,
            automaticLayout:true,
            
          }}
          onChange={onChange}
          editorDidMount={editorDidMount}
        />
        </div>
        <div className="toolbar">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleLeave}>Leave</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    
      
      <Chatbar />
    </div>
  );
}

export default Editors;
