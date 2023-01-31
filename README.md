# Gabarito - Vamos praticar


Para o exercício proposto, você deverá iniciar uma aplicação react do zero e ela deverá atender aos seguintes requisitos:

1.  Possuir um campo onde será possível inserir o nome de um pet;
2.  Possuir um campo onde será possível inserir a especíe do pet;
3.  Possuir um campo onde será possível inserir a raça do pet;
4.  Possuir um campo onde será possível inserir a idade do pet em anos (Apenas números);
5.  Você deverá realizar toda a gestão de estados da aplicação utilizando uma custom hook;
6.  Ao recarregar a página, todas as informações preenchidas até o momento deverão aparecer na tela.


----

#### Passo 1 - Criar ma aplicação react

Para criar uma nova aplicação react, você deve utilizar o comando abaixo:
```
npx create-react-app myapp
```

Após a finalização do comando, vamos precisar eliminar aquilo que não vamos utilizar dentro do arquivo _APP.js_:

```
import './App.css';

function App() {
  return (
    <div className="App">
     <header>Meu cadastro de pets</header>
    </div>
  );
}

export default App;

```

1.  Possuir um campo onde será possível inserir o nome de um pet;

```
import './App.css';

function App() {
  return (
    <div className="App">
     <header>Meu cadastro de pets</header>
     <form>
      <label>
        Nome do seu Pet
        <input type="text" />
      </label>
     </form>
    </div>
  );
}

export default App;

```

2.  Possuir um campo onde será possível inserir a especíe do pet;

```
import './App.css';

function App() {
  return (
    <div className="App">
     <header>Meu cadastro de pets</header>
     <form>
      <label>
        Nome do seu Pet
        <input type="text" />
      </label>
      <label>
        Especie
        <input type="text" />
      </label>
     </form>
    </div>
  );
}

export default App;

```

3.  Possuir um campo onde será possível inserir a raça do pet;

```
import './App.css';

function App() {
  return (
    <div className="App">
     <header>Meu cadastro de pets</header>
     <form>
      <label>
        Nome do seu Pet
        <input type="text" />
      </label>
      <label>
        Especie
        <input type="text" />
      </label>
      <label>
        Raça
        <input type="text" />
      </label>
     </form>
    </div>
  );
}

export default App;

```

4.  Possuir um campo onde será possível inserir a idade do pet em anos (Apenas números);

```
import './App.css';

function App() {
  return (
    <div className="App">
     <header>Meu cadastro de pets</header>
     <form>
      <label>
        Nome do seu Pet
        <input type="text" />
      </label>
      <label>
        Especie
        <input type="text" />
      </label>
      <label>
        Raça
        <input type="text" />
      </label>
      <label>
        Idade
        <input type="number" />
      </label>
     </form>
    </div>
  );
}

export default App;

```

5.  Você deverá realizar toda a gestão de estados da aplicação utilizando uma custom hook;

##### Passo 1 - Vamos criar uma custom hook chamada useLocalStorage, no próximo requisito, além dela fazer a gestão dos estados da aplicação, também irá manipular o _localStorage_:
  
```
import { useState } from 'react';

const useLocalStorage = (initialState) => {
  const [state, setState] = useState(initialState);


  return [state, setState];
}

export default useLocalStorage;
```

#### Paso 2 - Agora que você criou a custom hook, você precisará importar ela no _App.js_ e realizar a vínculação dela com os campos de inputs, para realizar a vínculação com o input de nome, o código ficará mais ou menos assim:
```
import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [name, setName] = useLocalStorage('');

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
        <input type="text" />
      </label>
      <label>
        Raça
        <input type="text" />
      </label>
      <label>
        Idade
        <input type="number" />
      </label>
     </form>
    </div>
  );
}

export default App;

```
Observe que foi pasado como _initialState_ (parâmetro) para a nossa hook uma string vazia, evitando que o estado da aplicação seja considerado _undefined_ e possa interferir nos passos mais adiante.

#### Passo 3 - Agora podemos replicar o processo para os outros campo de inputs:

```
import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [name, setName] = useLocalStorage('');
  const [especie, setEspecie] = useLocalStorage('');
  const [raca, setRaca] = useLocalStorage('');
  const [idade, setIdade] = useLocalStorage('');

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

```

6.  Ao recarregar a página, todas as informações preenchidas até o momento deverão aparecer na tela.
