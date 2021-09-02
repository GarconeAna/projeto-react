import React, { useState, useEffect } from 'react';

export default function AppFuncao(){
  return <h1>Meu primeiro site react</h1>
}

export function Texto(props){
  return <p>{props.texto}</p>
}

export function Botao(props){
  const [botao, setBotao] = useState(0);

  useEffect(() => {
    document.title = botao;
  }, [botao]);

  return(
    <div>
      <p>Contador de clicks: {botao}</p>
      <button onClick={() => setBotao(botao+1)}>{props.nome}</button>
    </div>
  )
}

export function Paragrafos(){
  return(
    <div>
      <Texto texto='texto 1'/>
      <Texto texto='texto 2'/>
      <Texto texto='texto 3'/>
    </div>
  );
}

