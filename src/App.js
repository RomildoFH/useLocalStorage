import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [name, setName] = useLocalStorage('nome', '');
  const [especie, setEspecie] = useLocalStorage('especie', '');
  const [raca, setRaca] = useLocalStorage('raca', '');
  const [idade, setIdade] = useLocalStorage('idade', '');

  return (
    <div className="App">
     <header>Meu cadastro de pets</header>
     <form>
      <label>
        Nome do seu Pet
        <input type="text" value={ name } onChange={ (e) => setName(e.target.value) } />
      </label>
      <label>
        Especie
        <input type="text" value={ especie } onChange={ (e) => setEspecie(e.target.value) } />
      </label>
      <label>
        Raça
        <input type="text" value={ raca } onChange={ (e) => setRaca(e.target.value) } />
      </label>
      <label>
        Idade
        <input type="number" value={ idade } onChange={ (e) => setIdade(e.target.value) } />
      </label>
     </form>
    </div>
  );
}

export default App;
