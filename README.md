# API Rest para o sistema de uma rede de cinemas

## Descrição da projeto:
Desenvolvimento de uma Interface de Programação de Aplicação(API) seguindo o padrão Rest e, como padrão de arquitetura, o MVC.<br>
Essa foi desenvolvida para a rede de cinemas Cinemark com o objetivo de automatizar e gerenciar requisições com seu banco de dados.

# Ferramentas utilizadas:
- Linguagem de programação: JavaScript
- Ambiente de Execução: Node.js
- Framework: Express
- Banco de dados: SQLite
- Plataforma nuvem de Deploy: Heroku

## Dependências necessárias:
```js
"dependencies": {
    "dotenv": "^16.0.0",
    "express": "^4.18.1",
    "path": "^0.12.7",
    "sqlite3": "^5.0.6"
  }
```
<a href = 'https://github.com/douglasmdev/cinemaApi/blob/master/package.json'>Clique aqui</a> para acessar o package.json, que é onde as dependências utilizadas aparecem.<br /><br /> 
Para instalar basta rodar o comando abaixo selecionando e copiando o mesmo com as teclas "Ctrl + c" e em seguida cola-lo no terminal com as telas "Ctrl + Shift + v". <br />
O comando abaixo já irá fazer o clone deste repositório e instalar as dependências necessárias.

```
git clone https://github.com/douglasmdev/cinemaApi.git && cd apiRestNodeJsCinema && npm install
```
## Dependências de desenvolvimento:
```json
"devDependencies": {
    "jest": "^28.0.3"
  }
```
Caso deseje instalá-las também, utilize os comandos abaixo em seu terminal logo após o comando das dependencias obrigatórias.

```
npm install --save-dev jest
```
## Inicialização da aplicação via terminal:
Para inicio da aplicação basta abrir o terminal na pasta do projeto ou executar o código abaixo.

```
npm start
```

## Observação importante:

A versão NodeJs utilizada para desenvolvimento é a 16.x LTS, logo é necessário intalação de versão igual ou superior para a perfeita execução da mesma.

## Rotas da API:
As rotas da API são: <br>

 <b>"/bilhetes"</b> 
<br>
 <b>"/clientes"<b>
<br>
 <b>"/filmes"<b> <br>
 <b>"/lojas"<b>  
<br>

### Para cada uma dessas rotas exitem alguns métodos:
### Por exemplo, com a rota <b>"/clientes"<b> :
### Ver todos os cliente:

Utilizar o método HTTP Get no caminho <b>"url da api" + /clientes</b>
<br>
<br>

### Buscar clientes por cpf:

Utilizar o método HTTP Get no caminho <b>"url da api" + /clientes/cpf</b>
### Deve-se substituir o "cpf" do caminho acima pelo cpf do cliente desejado.
<br>

### Adicionar clientes:
Utilizar o método HTTP Post no caminho <b>"url da api" + /clientes</b> com todos os dados necessários para o seu banco de dados. Abaixo segue um json de exemplo para corpo da requisição.

```json
{
      "cpf": "111.111.111.22",
      "nome": "Fulano Cicrano",
      "tel": "(21)999999991",
      "email": "fulano@gmail.com"
    }
```
<br>
<br>

### Modificar um cliente já existente:
Utilizar o método HTTP Put no caminho <b>"url da api" + /clientes/cpf</b> passando os valores que deseja alterar especificando seus devidos campos.
Para isso basta respeitar a sintaxe json novamente passada abaixo no body da requisição.
### Deve-se substituir o "cpf" do caminho acima pelo cpf do cliente desejado.
   
```json
{
      "cpf": "999.999.111.22",
      "nome": "Outro Fulano",
      "tel": "(22)777777771",
      "email": "outro@gmail.com"
    }
```
<br>
<br>

### Deletar um dos clientes:
Utilizar o método HTTP Delete no caminho <b>"url da api" + /clientes/cpf</b>
### Deve-se substituir o "cpf" do caminho acima pelo cpf do cliente desejado.

<br>
<br>

   
É possível realizar esses métodos com todas as 4 rotas citadas. Para isso, basta realizar o mesmo procedimento,<br>
alterando a entidade contida na rota(no exemplo acima: clientes) pela entidade desejada(ou bilhetes, ou filmes, ou lojas).<br><br>
Para utilizar as rotas que necessitam de parâmetro deve-se passar o identificador da entidade ao invés do cpf, como feito na tabela de clientes:<br>

Verbo GET: buscar um bilhete por id, ou buscar um filme por id, ou buscar uma loja por id. <br><br>
[Obrigatoriamente passar parêmetro(o id)] VERBO PUT: alterar/atualizar um bilhete, ou alterar/atualizar um filme, ou alterar/atualizar uma loja<br><br>
[Obrigatoriamente passar parêmetro(o id)] VERBO DELETE: deletar um bilhete, ou deletar um filme, ou deletar uma loja<br><br>


<b>Lembre-se: Ao criar o corpo da rquisição(o json) para utilizar no verbo PUT ou POST nessas 3 outras rotas, alterar a chave "cpf" por "id".</b>
   
### OBS.2: Caso você apague o arquivo do banco de dados sem querer por algum motivo desconhecido, rode o comando abaixo para criar outro novamente, mas atenção, esse novo banco virá vazio, apenas com a linha 1 contendo o exemplo dos tipos de dados aceitos nele.

```node
node ./src/infra/criaDB.js
```
