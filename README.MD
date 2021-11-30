# JavaScript Moderno
Esse repositório, destina-se aos estudos do **Módulo: JavaScript Moderno** do curso [jstack](https://jstack.com.br/). 

O objetivo desse módulo é abordar os principais conceitos a respeito do ES6, antes de dar continuidade nos módulos de react e typescript.

---

## Aula 01: Principais diferenças entre arrow functions e named functions
- This
- Arguments

**Diferenças entre arrow functions e funções normais:**

- Forma de escrever a função:

*Named function:*

```jsx
function nomeDaFuncao(argumento){
	//escopo da função
}
```

*Arrow function*

```jsx
const minhaArrowFunction = (argumento) => {
	//escopo da função
}
```

- A principal diferença estrá no contexto do objeto *this:*

As *named functions*  possuem seu próprio objeto *this*. Já as *arrow functions* herdam o *this* com base no escopo em que foram criadas.

De maneira geral, as named functions ou método construtor, é uma forma de transformar nossa função em um objeto. Dessa forma, podemos atribuir propriedades para nossa função através do objeto *this* que essas funções possuem.

```jsx
function minhaFuncao(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
}

console.log(new minhaFuncao('Miltinho', 'Soares')) //RETORNA nomeDaFuncao { nome: 'Miltinho', sobrenome: 'Soares' }
```

Com o código acima, usando o construtor *new* construímos um objeto a partir de uma função, o qual pode receber propriedades através do objeto *this*.

Já com as *arrow functions*  elas não possuem o método construtor, portanto, não podemos instanciá-las utilizando o construtor *new* e, não podemos atribuir propriedades  à essas funções através do contexto do objeto *this.* 

Em outras palavras, uma *named function,* é um objeto por possuir construtor e o objeto *this*. 

Já uma *arrow function* não é um objeto, por não possuir um construtor e, portanto, o objeto *this* não é próprio da arrow function. 

---

### Outras características das arrow functions

- *Arrow functions* não possuem o objeto *arguments*. Já *named functions* sim. Assim como o objeto *this*, nas *arrow functions* o objeto *arguments* depende do contexto em que a *arrow function*  foi criada.
- Para as *arrow functions,* devemos usar o *spread operator*  para obtermos todos os argumentos que são passados para a função (ou seja, o *spread operator* substitui o objeto *arguments* utilizado em named functions)
- É importante destacar que, em  *named functions* podemos usar tanto o objeto *arguments* quanto o *spread operator.*

---

### Formas de utilizar arrow functions:

- Forma convencional: `const arrowFunction = () ⇒ { return console.log('Corpo da função') }`
    - Na forma convencional, ou seja, utilizando as chaves em torno do corpo da função podemos construir a função com suas características, funcionalidades e atribuições de forma normal (da mesma forma que temos quando criamos *named functions)*
- Short sintax: `const arrowFunction = () ⇒ console.log('Retorno da função');`
    - Quando temos uma função cuja construção seja de uma linha e seu corpo tem de ser retornado imediatamente, podemos usar a convenção acima que elimina o uso das chaves, deixando a função mais enxuta e com maior facilidade para leitura.

- Utilizando parenteses:
    
    ```jsx
    const numero = 10;
    
    const arrowFunction = () => (
    	numero >= 10 
    	? 'Maior igual a 10'
    	: 'Menor que 10' 
    ) 
    ```
    
    Os parenteses servem para organizar o código, como podemos ver pudemos quebrar a condição ternária em três linhas. Além disso, elimina o uso do return.
    
- Outro uso para os parenteses: Imagine que nossa arrowFunction deva simplesmente retornar um objeto de forma direta. Podemos omitir a palavra *return*  do corpo de nossa função, envolvendo o objeto a ser retornado pelos parenteses:

```jsx
const retornarObjeto = () => ({
	id: '123',
	name: 'Miltinho'
}) 
```

---

## Aula 02: Parameters default

No JS moderno, podemos definir parametros padão para nossas funções, para contextos em que precisamos de um valor padrão caso algum parâmetro não seja fornecido pelo usuário ou acessado pela função. 

Veja:

```jsx
const boasVindas(mensagem = "Mensagem padrão") {
	console.log(mensagem);
}

```

Com o código acima, caso a função `boasvindas()` seja chamada e não possuir uma mensagem, a string "Mensagem padão" será logada automaticamente. Essa á sintaxe incluída pelo ES6, para situações como a apresentada.

Anteriormente, para manipular situações iguais a essa era necessário fazer validações e criar códigos verbosos. Veja:

```jsx
const boasVindas(mensagem) {
	console.log(mensagem ? mensagem : "Mensagem padrão");
}

```

 --- 

## Aula 03:  Destructuring

**Desestruturando objetos:**

Desestruturando propriedades de um objeto JS e alocando em variáveis cujo nome são iguais as chaves do objeto:

```jsx
const user = {
  firstName: 'Milton',
  lastName: 'Soares',
  age: 25,
  instagram: '@soaresmiltinho',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
};

const { firstName, age } = user;

console.log(firstName, age); //RETORNA Milton 25
```

**Desestruturando arrays:**

Alocando os valores de determinado array em constantes:

```jsx
const user = {
  firstName: 'Milton',
  lastName: 'Soares',
  age: 25,
  instagram: '@soaresmiltinho',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
};

const { firstName, age, skills } = user;
const [primary, secondary, tertiary, quaternary] = skills;

console.log(primary); //RETORNA Back-end
```

**Renomeando as variáveis**

Suponhamos que precisamos desestruturar as propreidades de um objeto e atribuí-las em variáveis. Porém, considere que, ao fazer a desestruturação dessas propriedades, precisamos alterar o nome das variáveis. Como fazer isso? 

Abaixo, alteramos o nome da propriedade *full_name* do objeto user para o nome *fullName.* Nota-se que para fazer essa mudança de nomes nas variáveis, nós simplesmente fazemos uma associação do tipo objeto entre o nome da propriedade e o nome que queremos dar à variável.

```jsx
const user = {
  firstName: 'Milton',
  lastName: 'Soares',
	full_name: 'Milton Soares',
  age: 25,
  instagram: '@soaresmiltinho',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
};

const { firstName, age, skills, full_name: fullName } = user;

console.log(fullName); //RETORNA Milton Soares
```

---

## **Aula 04: Rest Operator**

Dado o objeto:

```jsx
const user = {
  firstName: 'Milton',
  lastName: 'Soares',
  full_name: 'Milton Soares',
  age: 25,
  instagram: '@soaresmiltinho',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
};
```

Imagine a situação em que necessita-se que o desenvolvedor atribua o primeiro nome e as habilidades de um usuário em suas respectivas variáveis, e as demais propriedades desse objeto (user) em um outro local. Como podemos fazer isso?

```jsx
const user = {
  firstName: 'Milton',
  lastName: 'Soares',
  full_name: 'Milton Soares',
  age: 25,
  instagram: '@soaresmiltinho',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
};

const { firstName, skills, ...demaisPropreidades } = user;
const [primary] = skills;

console.log( firstName, primary, demaisPropreidades );
```

Nessa situação podemos aplicar a desestruturação para salvar as propriedades específicas em suas determinadas variáveis e utilizar o *spread operator* `...`  para atribuir as demais propriedades do objeto em uma variável separada. Nesse caso essa variável está denominada como "demaisPropriedades". Podemos acessar as demais propriedades desse objeto utilizando a forma tradicional de acesso de propriedades de objetos em JS.

**OBSERVAÇÕES DO REST OPERATOR:**

O *rest operator* é muito flexível e utilizado em diversos casos durante desenvolvimento. No caso da desestruturação de objetos, como visto anteriormente, podemos usar o nome da variável conforme nossa necessidade.

A única regra para aplicar o rest operator em desestruturações de objeto, é que a variável que irá receber o restante das propriedades, ou seja, que irá receber o rest operator, deve **SER O ÚLTIMO ELEMENTO** da desestruturação.

✅ **PERMITIDO:**

```jsx
const { firstName, skills, ...demaisPropreidades } = user;
```

❌ **NÃO PERMITIDO:**

```jsx
const { ...demaisPropreidades, firstName, skills } = user;
```

Para Arrays, o rest operator funciona da mesma maneira que a apresentada para objetos.

---

## Aula 05: Spread Operator

- A sintaxe do *spread operator* é exatamente a mesma que a do *rest operator.* Representada por `...`

Mas então, qual a diferença entre ambos? Pra que serve o *spread operator*?

Para entender melhor essa estratégia, considere o objeto:

```jsx
const user = {
  firstName: 'Milton',
  lastName: 'Soares',
  age: 25,
  instagram: '@soaresmiltinho',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: false,
};
```

Agora, imagine a situação que precisamos mudar o status da propriedade active de `false` para `true` . Como podemos fazer isso?

Primeiramente podemos fazer isso de forma forçada, alterando diretamente a propriedade active para true. Veja:

```jsx
user.active = true;
console.log(user); 
/* RETORNA
 {
  firstName: 'Milton',
  lastName: 'Soares',
  age: 25,
  instagram: '@soaresmiltinho',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: true,
}
*/
```

Beleza, conseguimos alterar o status do nosso usuário. Mas, qual o problema de fazer dessa forma?

Dessa forma, estamos quebrando princípio da imutabilidade, muito presente em frameworks como o React. 

Esse princípio, como o nome sugere, literalmente diz que não devemos mudar o dado original de determinada estrutura.

Então, como podemos melhorar essa atribuição, sem modificar nosso objeto original ? Usando o *spread operator.* 

Veja uma forma legal de fazer isso, seguindo o princípio da imutabilidade e utilizando o *spread operator*:

```jsx
const updatedUser = { 
	...user,
	active: true,
};
console.log(updatedUser);

/* RETORNA
 {
  firstName: 'Milton',
  lastName: 'Soares',
  age: 25,
  instagram: '@soaresmiltinho',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: true,
}
*/
```

Veja que usando o *spread operator* criamos uma cópia do objeto original, permitindo fazer a mudança de status do usuário, sem alterar o objeto original, respeitando o princípio da imutabilidade. Para checar a veracidade, basta um log no objeto user:

```jsx
console.log({ user });

/* RETORNA
 {
  firstName: 'Milton',
  lastName: 'Soares',
  age: 25,
  instagram: '@soaresmiltinho',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: false,
}
*/
```

 **OBSERVAÇÕES DO SPREAD OPERATOR:**

- No spread operator, não respeita a regra de ser o último elemento da desestruturação (como visto em *rest operator*)
- Funciona da mesma forma em arrays

```jsx
const updatedUser = {
  ...user,
  skills: [...user.skills, 'Vendas'],
  active: true
};

console.log(updatedUser);
/* RETORNA
 {
  firstName: 'Milton',
  lastName: 'Soares',
  age: 25,
  instagram: '@soaresmiltinho',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX', 'Vendas'],
  active: false,
}
```

---
## Aula 06: Template Strings

Template strings são as crases e são usadas para interpolar variáveis ou expressões  JS com strings de texto. Além disso permite que quebremos um console.log - por exemplo -  em duas ou mais linhas, ao contrário das aspas simples ou duplas em que isso não é permitido.

Na prática:

```jsx
const person = {
  firstName: 'Miltinho',
  lastName: 'Soares'
}

const { firstName, lastName } = person;

console.log(`Seja bem vindo ${firstName} ${lastName}!
Seu último login: ${new Date()}
`);
/*
RETORNA 
Seja bem vindo Miltinho Soares!
Seu último login: Thu Nov 25 2021 17:19:32 GMT-0300 (Brasilia Standard Time)
*/
```

---

## Aula 07: Promises

### Principais características das promises:

- Usa construtor new para ser declarada
- como argumento uma callback function
    - A callback function passada como argumento da promise, recebe dois argumentos: `resolve` e `reject`:

```jsx
new Promise((resolve, reject) => {
	console.log('Dentro da Promise');
});

	// RETORNA Dentro da Promise
```

- A função callback dentro da Promise é uma função *síncrona* e roda imediatamento dentro da call stack do Node.js. Portanto, executar o código acima com node já retorna imediatamente co conteúdo da função callback da promise.
- Quando armazenamos essa promise em uma varíavel, o que acontece:

```jsx
const apiCall = new Promise((resolve, reject) => {
});

console.log(apiCall)
/* RETORNA:

Promise { <pending> }
*/
```

O que isso quer dizer?

Basicamente uma promise só é resolvida ou rejeitada a partir do momento em que executamos as funções (`resolve` ou `reject`) da function callback da promise. Ou seja, enquanto  não for executado o resolve ou reject a promise vai ficar pendente para ser resolvida.

Veja:

```jsx
const apiCall = new Promise ((resolve, reject) => {
  resolve('Success');
});

console.log(apiCall); //RETORNA Promise { 'Success' }
```

### Quais momentos fazem sentido para estar usando as promises?

- O próprio JavaScript utiliza promises quando ele está executando tarefas muito pesadas, que podem levar muito tempo ou consumir muito recurso para serem executadas. Exemplos: Uma consulta em um DB. ⇒ Async/Await
- Em chamadas API (por exemplo) assíncronas. ⇒ Async/Await

**Criando exemplo de chamada a API para treinar:**

- Pegando resultados da promise cm then:

```jsx
const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ res: 'Success' });
  }, 2000);
});

apiCall.then((resposta) => {
  console.log(resposta);
})

//DEPOIS DE 2000ms RETORNA: { res: 'Success' }
```

- Nesse cenário, como pegamos erros?

```jsx
const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({ err: 'Error' });;
  }, 2000);
});

apiCall
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((erro) => {
    console.log(erro);
  })
```

Utilizamos o  `promise.catch()` para pegar o error e rejeitar a promise.

**Segunda forma de trabalhar com promises (async/await):**

```jsx
async function run() {

  const resposta = await apiCall;
  console.log(resposta);
}

run(); //RETORNA { res: 'Success' }
```

**Pegando os erros com async e await:**

Utilizando o bloco try - catch

```jsx
async function run() {
  try {
    const resposta = await apiCall;
    console.log(resposta);
  } catch (error) {
    console.log(error);
  }
}

run(); //RETORNA { err: 'Error' }
```

Essas são as duas formas de utilizar Promises em JS e possibilitar a execução de funções e métodos assíncronos. Porém, qual a melhor forma de utilizar essas formas?

- Quando estamos utilizando a sintaxe do .then e . catch, nosso código não fica travado. Portanto, quando executamos um bloco de .then e .catch para manipular a promise, a função callback desses métodos são jogadas para a queue stack e é resolvida em background. Sendo assim, qualquer código seguido do bloco será executado:

```jsx
const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({ err: 'Error' });
  }, 2000);
});

apiCall
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((erro) => {
    console.log(erro);
  })

  console.log('Depois da promise...');

/* RETORNA 

Depois da promise...
{ res: 'Success' }

*/
```

O `log` após a promise executou primeiro, não esperando a promise ser resolvida para executar o restante de código.

- Portanto, em situações que precisamos do valor da Promise, como uma chamada API, por exemplo, não podemos utilizar esse tipo de estratégia. Portanto, utilizaremos o método do async / await para fazer chamadas em DB e chamadas na API.

---

## Aula 08: ES Modules

Com o advento do ES6, o JavaScript recebeu uma nova forma de lidar com os modules do Node.

A nova forma de lidar com módulos muda a sintaxe do código escrito em JS e faz necessário algumas configurações para que o Node entenda o como trabalhar com essa nova forma.

Em código, suponha uma pasta chamada modules contendo os seguintes arquivos: index.js, sayHello.js e package.json

o Arquivo sayHello.js é nosso módulo, que vamos querer usar em demais lugares de nossa aplicação. o index.js é o arquivo principal do nosso APP e o package.json são as configurações padrão.

Sendo assim, temos que:

**sayHello.js:**

```jsx
function sayHello(name) {
  console.log(`Ola ${name}`);
}

export default sayHello;
```

**index.js:**

```jsx
import sayHello from './sayHello.js'

sayHello('Miltinho');
```

**package.json:**

```json
{
  "type": "module"
}
```

Para essa sintaxe de importação e exportação de módulos é necessário configurar o *type module* no arquivo de configuração JSON.

### Formas de exportar o modulo:

```jsx
function sayHello(name) {
  console.log(`Ola ${name}`);
}

export default sayHello;
```

```jsx
export default function sayHello(name) {
  console.log(`Ola ${name}`);
}

```

```jsx
function sayHello(name) {
  console.log(`Ola ${name}`);
}

export { sayHello };
```

Dessa última forma, nos obriga a fazer a importação de forma desestruturada:

```jsx
import { sayHello } from './sayHello.js'

sayHello('Miltinho');
```

ou

```jsx

import { sayHello as novoNomeDaFuncao } from './sayHello.js'

novoNomeDaFuncao('Miltinho');
```

---

## Aula 09: Funções Helpers

### .includes()

Verifica se dentro de uma **string** ou um **array** existe "alguma coisa" que a gente esteja passando para ela. Por exemplo:

```jsx
const tech = "Node.js";

const includes = tech.includes('.');
console.log({ includes }); // RETORNA { includes: true }
```

Ou seja, dentro da string "Node.js" representada por `tech` existe a string '.'

Uma característica importante é que, assim como em todo o JS, o `.includes()` também é case sensitive, ou seja:

```jsx
const tech = "Node.js";

const includes = tech.includes('node');
console.log({ includes }); //RETORNA { includes: false }
```

**Em arrays:**

```jsx
const tech = "Node.js";
const arr = ['Node.js', 'React', 'Typescript']

const includesString = tech.includes('Node');
const includesArray = arr.includes('Node')
console.log({ includesArray }); //RETORNA { includesArray: false }
```

Em caso de arrays, o `.includes()` encontra o valor por inteiro de determinada posição desse array, então, para retornar `true` temos que:

```jsx
const tech = "Node.js";
const arr = ['Node.js', 'React', 'Typescript']

const includesString = tech.includes('Node');
const includesArray = arr.includes('Node.js')
console.log({ includesArray }); //RETORNA { includesArray: true }
```

### .startsWith

Verifica qual caractere inicia uma determinada string, retornando um valor Booleano. Não funciona para *arrays.*

```jsx
const tech = "Node.js";
const startsWith = tech.startsWith('N');
console.log({ startsWith }); //RETORNA { startsWith: true }
```

### .endsWith()

Operação inversa ao `.startsWith()` , verificando qual são os caracteres que determinada string termina. 

```jsx
const tech = "Node.js";
const endsWith = tech.endsWith('.js');
console.log({ endsWith }); // RETORNA { endsWith: true }
```

--- 

## Aula 10: High Order Functions

### .find()

Busca uma uma informação dentro de um array;

Essencialmente, essa função recebe como parâmetro uma função *callback:*

```jsx
const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 }
];

const find = array.find((product) => {
  console.log(product);
});

/* RETORNA

{ product: 'iPhone', price: 5000, quantity: 2 }
{ product: 'MacBook Pro', price: 20000, quantity: 1 }
{ product: 'Magic Mouse', price: 1000, quantity: 5 }

*/

```

O find busca elementos com base em uma condição estruturada dentro de sua callback function e retorna o elemento que satisfaça a condição da callback. Se a condição for satisfeita, o método `.find()` retorna o próprio valor: 

```jsx
const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 }
];

//.find 
const find = array.find((product) => {
  return product.name === 'Magic Mouse';
});

console.log(find); //RETORNA {name: 'Magic Mouse', price: 1000, quantity: 5 }
```

É importante destacar que, caso a condição passada para a callback function do método `.find()` seja satisfeita por mais de 1 valor do array, o método retornará apenas o valor do primeiro elemento em que foi retornado *true:*

```jsx
const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 }
];

//.find 
const find = array.find((product) => {
  return product.price > 1000;
});

console.log(find); //RETORNA { name: 'iPhone', price: 5000, quantity: 2 }
```

### .findIndex()

O método `.findIndex()` **funciona da mesma maneira que o o método find, porém quando a condição da função callback for satisfeita o método `.findIndex()` retorna o número do índice do primeiro elemento que retornou true:

```jsx
const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 }
];
const findIndex = array.findIndex(product => product.name === 'Magic Mouse');
console.log(findIndex); //RETORNA 2
```

---

## Aula 11: HOFs - .some e .every

Aplicável em arays;

Da mesma forma que demais HOFs, recebe uma callback function como parametro

### .some():

Verifica se **algum** elemento de um array satisfaz a condição passada na função callback. Este método retorna um *Booleano.:*

```jsx
const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 }
];

const some = array.some((product) => product.price > 1000);

console.log({ some }); //RETORNA { some: true }
```

- Muito importante entender que retorna TRUE se pelo menos um item do array satisfazer a condição.

### .every()

Funciona da mesma forma que o método `.some()` porém, verifica se **todos** elementos do array satisfaz a condição passada na callback function:

```jsx
const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 }
];

const every = array.every(product => product.price < 1000);
console.log({ every }); // RETORNA { some: false }
```

---

## Aula 12: HOFs - .map()

O método `.map()` serve para nós pegarmos um array em determinado "estado" e modificar esse array de acordo com alguma especificação passada para a função callback recebida dentro do `.map()`

Esse método **sempre** retornará um array modificado com o mesmo número de elementos do array original.

```jsx
const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 }
];

const map = array.map((product) => (
  {
    ...product,
    subtotal: product.quantity * product.price
  }
))

console.log({ map });
/*
RETORNA
{
  map: [
    { name: 'iPhone', price: 5000, quantity: 2, subtotal: 10000 },
    { name: 'MacBook Pro', price: 20000, quantity: 1, subtotal: 20000 },
    { name: 'Magic Mouse', price: 1000, quantity: 5, subtotal: 5000 }
  ]
}
*/
```