import React from 'react';
import Editor from '@monaco-editor/react';

function App() {
  return (
    <div className="App">
      <Editor height="100vm" theme="vs-dark" defaultLanguage="typescript" /> 
    </div>
  );
}

export default App;
