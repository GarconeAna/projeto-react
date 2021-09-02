import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppFuncao, { Botao , Paragrafos } from './components/AppFuncao';

ReactDOM.render(
  <React.StrictMode>
    <AppFuncao />
    <Paragrafos />
    <Botao nome='Click'/>
  </React.StrictMode>,
  document.getElementById('root')
)
