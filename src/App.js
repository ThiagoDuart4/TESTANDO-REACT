import {useEffect, useState} from 'react'

import logo from './logo.svg';
import './App.css';

function App() {

  const [filmes,setFilmes] = useState([])
  
 useEffect(()=>{
  fetch("http://localhost:5000/filmes",{
    method:'post',
    headers:{
      'content-Type':'application/json'
    },
    body:JSON.stringify({
      "nome": "nave alienigena",
      "descricao": "nenhuma",
      "preco": "564",
      "categoria": "drama",
      "image": "alien.jpg"
    })
   
   
  })
  .then((resp)=> resp.json())
  .then((data)=>{
    
    setFilmes(data)
    

  })

  
  .catch((err) => console.log(err))

 },[]);

 let descricao = filmes.descricao;
 let nome = filmes.nome;
 let preço = filmes.preco;
 let categoria = filmes.categoria;
 let img = filmes.imagem


 let caixa = document.querySelector("#titulo");
 let caixa2 = document.querySelector("#titulo2");
 let caixa3 = document.querySelector("#titulo3");
 let caixa4 = document.querySelector("#titulo4");
let caixa5 = document.querySelector("titulo5")

 caixa.innerHTML = `Descriçao:${descricao}`;
 caixa2.innerHTML = `Nome:${nome}`
 caixa3.innerHTML = `Preço:${preço}`
 caixa4.innerHTML = `Categoria:${categoria}`
caixa5.innerHTML =`Categoria:${img}`



  return (
   
    <div className="App">
  
    <h1 id="titulo"></h1>
    <h1 id="titulo2"></h1>
    <h1 id="titulo3"></h1>
    <h1 id="titulo4"></h1>
    <h1 id="titulo5">
      
    </h1>
  
    </div>
  );
}

export default App;
