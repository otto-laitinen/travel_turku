import React from 'react';
import ReactDOM from 'react-dom';
//./ is relative path to something in current directory. The dot is current directory and slash is path delimiter.
import App from './App';
// Every React application needs to be mounted onto the root div:
ReactDOM.render(<App />, document.getElementById('root'));