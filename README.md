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

#### Passo 1 - Alterar a nossa hook, para que ela receba por parâmetro a key que será utilizada no localStorage

```
import { useState } from 'react';

const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(initialState);


  return [state, setState];
}

export default useLocalStorage;
```
#### Passo 2 - criar uma função que leia o localStorage, e caso não haja informação, salve o _initialState_ nele, e caso já exista um valor, retorne o valor salvo.

```
const getStoredData = (key, initialState = '') => {
  const storedData = JSON.parse(localStorage.getItem(key));
  return storedData ? storedData : initialState;  
};
```

#### Passo 3 - Agora precisamos utilizar a getStoredData, para manipular o nosso estado.

Você deve se recordar que o _useState_ pode receber uma callback como um de seus argumentos, logo, vamos utilizar a _getStoredData_ como callback dentro do _useState_ substituindo o _initialState_ que já será manipulado por ela.

```
import { useState } from 'react';

const getStoredData = (key, initialState = '') => {
  const storedData = JSON.parse(localStorage.getItem(key));
  return storedData ? storedData : initialState;  
};

const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(() => getStoredData(key, initialState));


  return [state, setState];
};

export default useLocalStorage;
```
Com isso a gente garante que, ao carregar nossa página, caso exista algum valor salvo previamente no nosso _localStorage_ ele será mantido e salvo no estado ao invez de ser substituindo, por exemplo, por uma string vazia. Mas observe que ainda não estamos salvando nada no _localStorage_ apenas realizando a leitura dele.

#### Passo 4 - Agora precisamos garantir que toda vez que um input for atualizado, seu valor no _localStorage_ também seja.
Aqui podemos utilizar uma hook do react, que garante que toda vez que um estado for atualizado ela execute algo. Sabe de qual estamos falando? Isso mesmo é a _useEffect_.

```
import { useEffect, useState } from 'react';

const getStoredData = (key, initialState = '') => {
  const storedData = JSON.parse(localStorage.getItem(key));
  return storedData ? storedData : initialState;  
};

const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(() => getStoredData(key, initialState));

  useEffect(() => {
    const saveData = JSON.stringify(state);
    localStorage.setItem(key, saveData);
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
```
Então, vamos entender um pouco do que está acontecendo até aqui:
  1. Ao criar estados utilizando nossa _custom hook_ la no nosso _App.js_, nós passamos para ela como argumento uma _key_ e um valor inicial;
  2. Esses estados por sua vez, são gerados dentro das nossas hook que como parâmetro inicial, está recebendo uma callback que resgata inforamções do _localStorage_.
  3. Quando o _localStorage_ não possúi informações, ela retorna uma string vazia dentro de uma key (que nomeamos lá no _App.js_);
  4. Depois disto, quando qualquer alteração é realizada nos campos de input, através do _onChange_ do mesmo campo, ele assiona uma _setState_ correspondente a aquela utilizada para criar seu estado, fazendo sua alteração para o novo valor.
  5. A _useEffect_ reconhece através do array de dependências que o estado sofreu alterações e com isto faz a leitura do novo estado e o salva no _localStorage_ na chave (key) corrrespondente.

#### Passo 5 - Agora só falta a gente alterar o arquivo _App.js_ para de fato passar as chaves para nossa hook:

```
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

```
  Agora pronto, nossa aplicação está funcionando perfeitamente. Você pode aproveitar para elaborar um _CSS_ bacana e divulgar em suas redes sóciais que agora você além de dominar as _hooks_ do React, você também é um mestre na elaboração de suas próprias _custom hooks_.
