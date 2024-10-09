import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h2>Micro App 1</h2>;
}

function render(props) {
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('micro-app1 bootstrapped');
}

export async function mount(props) {
  console.log('micro-app1 mounted');
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}