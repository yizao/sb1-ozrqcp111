import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start } from 'qiankun';

function App() {
  return (
    <div>
      <h1>Main Application</h1>
      <div id="micro-app1"></div>
      <div id="micro-app2"></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

registerMicroApps([
  {
    name: 'micro-app1',
    entry: '//localhost:3001',
    container: '#micro-app1',
    activeRule: '/micro-app1',
  },
  {
    name: 'micro-app2',
    entry: '//localhost:3002',
    container: '#micro-app2',
    activeRule: '/micro-app2',
  },
]);

start();