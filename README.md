
# Agri-Tec

Durante todas as 4 estações do ano, agricultores do Brasil inteiro trabalham em suas lavouras. Entretanto, nesse período podem acontecer eventos naturais devastadores que destruirão plantações inteiras e isso será um prejuízo imenso para os produtores

Para auxiliar estes produtores existe o Proagro, que de forma resumida serve para exonerar o produtor rural das perdas nas suas lavouras

Sendo assim, o objetivo do projeto Agri-Tec é criar uma tela na qual os analistas do Proagro podem comunicar as perdas de forma simples e prática



## Stacks

- TypeScript

- React

- Python

- Flask

- Bootsrap

- Docker




## Como iniciar o servidor (Com o Docker)

Caso queira testar o servidor com o Docker, o projeto já possui um docker-compose na raiz da aplicação

Certifique-se que a versão do seu docker-compose é equivalente ou superior a 1.29.0:

```
docker-compose --version
```

Ao entrar na raíz, você deve rodar o comando:

```
docker-compose up -d
```


Esse comando irá, automaticamente, subir o backend e o frontend da aplicação. Após o termino da build, basta acessar a url:

```
http://localhost:3000
```

Vale lembrar que esse processo pode demorar um pouco mais em computadores mais lentos (assim como o meu 😁), então depois que os containers estiverem rodando, espere pelo menos 1 minuto para ter certeza de que a url já está livre para ser acessada


## Como iniciar o servidor (Manual)

É possível também fazer o setup do projeto de forma "manual"

Para isso, você irá precisar de 2 terminais abertos dentro do diretório raiz da aplicação

#### 1° Terminal:

No primeiro terminal, entre na pasta "backend" através do comando:

```
cd ./backend
```

E então rode o comando (Certifique-se de que possui o package venv instalado):

```
python3 -m venv env
```

Assim que a pasta **env** for criada, basta "entrar" no ambiente virtual:

```
source env/bin/activate
```

Antes de iniciar o servidor, tenha certeza de que instalou as dependências do mesmo através do comando:
```
pip install -r requirements.txt
```

Agora é só iniciar o servidor com:

```
python app.py
```

Com o servidor backend rodando, hora de ir para o segundo terminal

#### 2° Terminal:


No segundo terminal, entre na pasta "frontend" através do comando:

```
cd ./frontend
```

E aqui, antes de iniciar o frontend, não se esqueça de instalar as dependências:

```
npm install
```

E, finalmente:

```
npm start
```


À partir de agora, você já está apto para acessar a url:

```
http://localhost:3000
```

## Swagger

Fuçando pela internet, descobri que o Flask-RESTPlus já disponibiliza uma documentação da API com o Swagger

Você só precisa estar com o backend rodando e acessar a porta:

```
http://localhost:5000/api/
```


## Como usar o projeto

Assim que você abrir o projeto no navegador, irá se deparar com essa imagem

![empty table image](https://i.imgur.com/mT7naA4.png)


Afinal, ainda não existe nenhuma comunicação de perda criada. Para criar, basta clicar no link de Registro que irá abrir essa tela:

![register page](https://i.imgur.com/mFzARNs.png)

Vale ressaltar que todos os campos possuem validações:

![show field validations](https://i.imgur.com/Q1XszRL.png)

Basta adicionar os dados corretos nos campos e ao criar, você será redirecionado para tela inicial e lá aparecerá uma tabela mostrando todas as comunicações:

![filled table](https://i.imgur.com/85q0Hz6.png)

Também é possível deletar uma perda clicando nela e em seguida no botão "Deletar"

![delete call](https://i.imgur.com/8RMkcvk.png)

O ponto mais legal (na minha opinião) do projeto é que, caso o analista registre uma chamada, porém, já exista uma outra chamada no banco de dados com a mesma data porém com eventos divergentes em um raio de 10 km, o analista será informado:

![alert](https://i.imgur.com/WJ2Kwlh.png)


## Considerações finais


Agora que mostrei todos os principais pontos do projeto, irei falar (de forma resumida) o que eu achei dele

Foi um projeto bem completinho e desafiador

Utilizar o Flask como framework para criar a API foi uma escolha arriscada para mim, pois nunca havia trabalhado com ele. Como já tenho experiência em criar API's com o Express, eu consegui desenvolver o que queria

No Front eu optei por utilizar o React pois é o único framework/lib (por enquanto) que eu tenho experiência para criar as páginas de usuário

Espero que tenham gostado do projeto! 🤠
