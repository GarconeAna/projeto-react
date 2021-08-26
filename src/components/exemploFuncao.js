import React, { useState } from 'react';

export default function ExemploFuncao() {
  const [lista, setLista] = useState([
    {
      id: 1,
      nome: "Capitão América: O primeiro vingador",
      imagemUrl: "https://play-lh.googleusercontent.com/9LAzip_XWe8eVWEUGCnSJ4xf706RmYtSu5bZRAfvqbs2aW6YVlLbPF7UVTfMpJKQUioKGw",
    },
    {
      id: 2,
      nome: "Capitã Marvel",
      imagemUrl: "https://br.web.img2.acsta.net/pictures/19/02/04/18/35/1468867.jpg",
    },
    {
      id: 3,
      nome: "O incrivel Hulk",
      imagemUrl: "https://br.web.img2.acsta.net/c_310_420/pictures/210/485/21048566_20131010182211313.jpg",
    },
    {
      id: 4,
      nome: "Homem de Ferro",
      imagemUrl: "https://images-na.ssl-images-amazon.com/images/I/81vTHovrz%2BL._AC_SY606_.jpg",
    },
    {
      id: 5,
      nome: "Homem de Ferro 2",
      imagemUrl: "https://media.fstatic.com/SFp4c8GT3GTGYok7_526qDSHTns=/290x478/smart/media/movies/covers/2018/09/66432b37ed80464274a58239b695007f95c79155.jpg",
    }
  ]);

  return (
    <div>
      <form>
        <label>
          Nome:
          <input type="text"/>
        </label>
        <label>
          Link imagem:
          <input type="text"/>
        </label>
        <button type="submit" value="Enviar">Enviar</button>
      </form>

      {lista.map((lista, index) => (
        <li key={index}>
          <h1>{lista.nome}</h1>
          <img src={lista.imagemUrl} alt={lista.nome}/>
        </li>
      ))}
    </div>
  );
}