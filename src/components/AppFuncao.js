import React from 'react';

export default function AppFuncao(){
  const filmes = [
    {
      id: 1,
      nome: "Capitão América: O primeiro vingador",
      imagemUrl:"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/34/62/19874544.jpg",
      sinopse:"2ª Guerra Mundial. Steve Rogers (Chris Evans) é um jovem que aceitou ser voluntário em uma série de experiências que visam criar o supersoldado americano. Os militares conseguem transformá-lo em uma arma humana, mas logo percebem que o supersoldado é valioso demais para pôr em risco na luta contra os nazistas. Desta forma, Rogers é usado como uma celebridade do exército, marcando presença em paradas realizadas pela Europa no intuito de levantar a estima dos combatentes. Para tanto passa a usar uma vestimenta com as cores da bandeira dos Estados Unidos, azul, branca e vermelha. Só que um plano nazista faz com que Rogers entre em ação e assuma a alcunha de Capitão América, usando seus dons para combatê-los em plenas trincheiras da guerra.",
      video:"https://www.youtube.com/embed/-006iHDHK34",
    },
    {
      id: 2,
      nome: "Capitã Marvel",
      imagemUrl:"https://br.web.img3.acsta.net/c_310_420/pictures/19/02/04/18/35/1468867.jpg",
      sinopse:"Em Capitã Marvel, Carol Danvers (Brie Larson) é uma ex-agente da Força Aérea norte-americana, que, sem se lembrar de sua vida na Terra, é recrutada pelos Kree para fazer parte de seu exército de elite. Inimiga declarada dos Skrull, ela acaba voltando ao seu planeta de origem para impedir uma invasão dos metaformos, e assim vai acabar descobrindo a verdade sobre si, com a ajuda do agente Nick Fury (Samuel L. Jackson) e da gata Goose.",
      video:"https://www.youtube.com/embed/JhY6Yy4wtb4",
    },
    {
      id: 3,
      nome: "O incrivel Hulk",
      imagemUrl:"https://br.web.img2.acsta.net/c_310_420/pictures/210/485/21048566_20131010182211313.jpg",
      sinopse:"Vivendo escondido e longe de Betty Ross (Liv Tyler), a mulher que ama, o cientista Bruce Banner (Edward Norton) busca um meio de retirar a radiação gama que está em seu sangue. Ao mesmo tempo ele precisa fugir da perseguição do general Ross (William Hurt), seu grande inimigo, e da máquina militar que tenta capturá-lo, na intenção de explorar o poder que faz com que Banner se transforme no Hulk.",
      video:"https://www.youtube.com/embed/xbqNb2PFKKA",
    },
    {
      id: 4,
      nome: "Homem de Ferro",
      imagemUrl:"https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/91/79/19/20163665.jpg",
      sinopse:"Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor. Ao ser sequestrado ele é obrigado por terroristas a construir uma arma devastadora mas, ao invés disto, constrói uma armadura de alta tecnologia que permite que fuja de seu cativeiro. A partir de então ele passa a usá-la para combater o crime, sob o alter-ego do Homem de Ferro.",
      video:"https://www.youtube.com/embed/8ugaeA-nMTc",
    },
    {
      id: 5,
      nome: "Homem de Ferro 2",
      imagemUrl:"https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/31/07/19874181.jpg",
      sinopse:"Após confessar ao mundo ser o Homem de Ferro, Tony Stark (Robert Downey Jr.) passa a ser alvo do governo dos Estados Unidos, que deseja que ele entregue seu poderoso traje. Com a negativa, o governo passa a desenvolver um novo traje com o maior rival de Stark, Justin Hammer (Sam Rockwell). Jim Rhodes (Don Cheadle), o braço direito de Tony, é colocado no centro deste conflito, o que faz com que assuma a identidade de Máquina de Combate. Paralelamente, Ivan Vanko (Mickey Rourke) cria o alter-ego de Whiplash para se vingar dos atos da família Stark no passado. Para combater Whiplash e a perseguição do governo, Stark conta com o apoio de sua nova assistente, Natasha Romanoff (Scarlett Johansson), e de Nick Fury (Samuel L. Jackson), o diretor da S.H.I.E.L.D.",
      video:"https://www.youtube.com/embed/wKtcmiifycU",
    },
  ];
  return(
    <div>
      <h1>Bem vindo ao site de filmes!</h1>

      <ul>
        {filmes.map((filme, indice) => (
          <li>
            <Titulo titulo={filme.nome} />
            <Sinopse sinopse={filme.sinopse} />
            <Imagem imagem={filme.imagemUrl} />
            <Button button={filme.video} />
          </li>            
        ))}
      </ul>
    </div>
  );
}

export function Titulo(props){
  return <h2>{props.titulo}</h2>
}

export function Sinopse(props){
  return <p>{props.sinopse}</p>
}

export function Imagem(props){
  return <img src={props.imagem} alt="imagem do filme"></img>
}

export function Button(props){
  return <iframe width="560" height="315" src={props.button} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
}

