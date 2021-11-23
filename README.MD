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