import React from 'react';
import Editor from '@monaco-editor/react';

function App() {
  return (
    <div className="App">
      <Editor height="776px" theme="vs-dark" defaultLanguage="typescript" /> 
    </div>
  );
}

export default App;
