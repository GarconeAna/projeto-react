import React, { useState , useEffect } from 'react';
import './App.css';

export default function App(){
  const [filmes , setFilmes] = useState([
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

  const [nomeFilme , setNomeFilme] = useState('');
  const [imagemUrlFilme , setImagemUrl] = useState('');
  const [idFilme , setIdFilme] = useState(filmes.length);

  const handleNomeFilme = (evento) => {
    setNomeFilme(evento.target.value);
  }
 
  const handleImagemUrlFilme = (evento) => {
    setImagemUrl(evento.target.value);
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();

    setFilmes([
      ...filmes,
      {
        id: idFilme+1,
        nome: nomeFilme,
        imagemUrl: imagemUrlFilme,
      }
    ]);

    setNomeFilme('');
    setImagemUrl('');
  }

  const handleDelete = (indice) => {
    setFilmes(filmes.filter((filme, indiceFilme) => indice !== indiceFilme));
  }

  return(
    <div>
      <h1>Ola Mundo!</h1>
      <h2>Cadastre um novo filme</h2>

      <form onSubmit={handleSubmit}>
        <input type='text' value={nomeFilme} onChange={handleNomeFilme} placeholder='Digite o nome do filme'/>
        <input type='text' value={imagemUrlFilme} onChange={handleImagemUrlFilme} placeholder='Digite o link da imagem'/>
        <button type='submit'>Adicionar</button>
      </form>

      <ul>
        {filmes.map((filme, indice) => (
          <li>
            <h3>{filme.nome}</h3>
            <h4>{filme.id}</h4>
            <img src={filme.imagemUrl} />
            <button type='submit' onClick={() => handleDelete(indice)}>Excluir</button>
          </li>            
        ))}
      </ul>
    </div>
  )
}

