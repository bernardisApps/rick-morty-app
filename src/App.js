import { useState } from 'react';
import './App.css';
import ImagenRickMorty from './img/rick-morty.png';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const restApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
           <Characters characters= {characters} setCharacters = {setCharacters} ></Characters>
        ) : (
          <>
            <img className='img-home' alt='rick & morty' src={ImagenRickMorty}/>
            <button onClick={restApi} className='btn-search'>Buscar Personajes</button>
          </>
        )}
       <h6>App realizada por Matias Bernardis</h6> 
      </header>
    </div>
  );
}

export default App;
