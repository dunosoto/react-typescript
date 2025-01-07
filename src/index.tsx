import React from 'react';
import ReactDom from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './components/CounterApp';
import './style.css';

ReactDom.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CounterApp value={100} />
    {/* <FirstApp name='Daniel' subTitle='uno'/> */}
  </React.StrictMode>
);