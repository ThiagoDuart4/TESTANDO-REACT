import {useEffect, useState} from 'react'

import logo from './logo.svg';
import './App.css';

import imgs from "./IMAGE/"


function App() {


  const [filmes,setFilmes] = useState([])
  
 useEffect(()=>{
  fetch("http://localhost:5000/filmes/35",{
    method:'get',
    headers:{
      'content-Type':'application/json'
    },
    // body:JSON.stringify({
    //   "nome": "nave alienigena",
    //   "descricao": "nenhuma",
    //   "preco": "564",
    //   "categoria": "drama",
    //   "image": "alien.jpg"
    // })
   
   
  })
  .then((resp)=> resp.json())
  .then((data)=>{
    
    setFilmes(data)
    

  })

  
  .catch((err) => console.log(err))

 },[]);


 
//  let descricao = filmes.descricao;
//  let nome = filmes.nome;
//  let preço = filmes.preco;
//  let categoria = filmes.categoria;
let img = filmes.image


//  let caixa = document.querySelector("#titulo");
//  let caixa2 = document.querySelector("#titulo2");
//  let caixa3 = document.querySelector("#titulo3");
//  let caixa4 = document.querySelector("#titulo4");
// let caixa5 = document.querySelector("titulo5")

//  caixa.innerHTML = `Descriçao:${descricao}`;
//  caixa2.innerHTML = `Nome:${nome}`
//  caixa3.innerHTML = `Preço:${preço}`
//  caixa4.innerHTML = `Categoria:${categoria}`




  return (
   
    <div className="App">
  
    <h1 id="titulo">
      <img src ={imgs}></img>
    </h1>
   <input type='text'/>
   <input type='text'/>
   <input type='text'/>
   <input type='text'/>

   <button> CLick aqui</button>
   
   <select name="select">
  <option value="GET">Valor 1</option>
  <option value="POST" selected>Valor 2</option>

</select>
    </div>
  );
}

export default App;
