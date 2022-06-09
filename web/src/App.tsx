import React from 'react';
import Editor from '@monaco-editor/react';

function App() {
  return (
    <div className="App">
      <h1>IDE on Web</h1> 
      <Editor height="650px" theme="vs-dark" defaultLanguage="typescript" /> 
    </div>
  );
}

export default App;
