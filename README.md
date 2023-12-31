# Verificador de Nicknames do Minecraft
<h4>Ele verifica uma sequencia de nicks (gerados automaticamente) para saber se estão disponíveis para serem utilizados.</h4>

🔥 Caso o nick esteja disponível para o uso ele além de mostrar no console, ele irá adicionar o nick no arquivo `available.txt`


## Instalação

1. Instale o Node.js
2. Abra a pasta do projeto e digite `npm i`, para instalar as dependências necessárias.
3. Caso necessário altere o arquivo `config.json` da maneira que desejar:
  ```js
  "characters": Caracteres que ele deverá utilizar para gerar os nicks (default: abcdefghijklmnopqrstuvwxyz) para gerar apenas com letras, pode ser adicionado números também.

  "minNumber": Quantidade mínima caracteres para cada nick (default: 3, gerando nicks com no mínimo 3 caracteres)

  "maxNumber": Quantidade mínima caracteres para cada nick (default: 4, gerando nicks com no máximo 4 caracteres)

  "search_ms": Velocidade em milissegundos de execução em cada busca (default: 500, pode variar dependendo do computador/internet, teste.)
  ```
4. Por fim, basta digitar: `npm run lite` para iniciar a versão lite ou `npm run high` para iniciar a versão de alta velocidade (pode conter bugs).

*[HIGH] A versão HIGH, mostra no console apenas os nicks disponíveis e talvez não consiga escrever no `available.txt` o nick disponível, então é necessário ficar de olho no console*
*[HIGH] Para saber se está funcionando na versão high, execute o projeto `npm run high` e verifique o arquivo `checked.txt`, caso esteja sendo adicionado nicks nesse arquivo, significa que está funcionando*

## Total de Combinações

### Somente alfabeto:
<p> Para comprimento 1: 26^1 = 26 combinações possíveis.</p>
<p> Para comprimento 2: 26^2 = 676 combinações possíveis.</p>
<p> Para comprimento 3: 26^3 = 17.576 combinações possíveis.</p>
<p> Para comprimento 4: 26^4 = 456.976 combinações possíveis.</p>

### Alfabeto com números:
<p> Para comprimento 1: 36^1 = 36 combinações possíveis.</p>
<p> Para comprimento 2: 36^2 = 1.296 combinações possíveis.</p>
<p> Para comprimento 3: 36^3 = 46.656 combinações possíveis.</p>
<p> Para comprimento 4: 36^4 = 1.679.616 combinações possíveis.</p>

<q>Por padrão é utilizado de 3 a 4 caracteres por nick e utilizando apenas letras, tendo então um total de 474.552 nicks podendo ser gerados.</q>