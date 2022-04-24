# Tractian
DESKTOP / MOBILE

Projeto desenvolvido para o processo seletivo. Consome uma API e faz ações como adicionar, editar ou excluir. Para acessar determinado objeto, insira na URL o ID do objeto.

Na página principal (/home), são renderizados gráficos dinâmicos baseados nas informações da API (não atualizam porque os dados da API não persistem). 

É possível editar e remover somente os cards iniciais que renderizam na página porque as funções de requisição utilizam o ID para localizar o alvo e realizar a ação (os novos IDs não estão registrados na database).

Botões como o Logout ou pesquisa / usuário estão apenas para demonstração, não são funcionais.

## Deploy

Feito utilizando Heroku

[ACESSE A APLICAÇÃO](https://urielbochi-tractian.herokuapp.com/home)

**Link para copiar**: https://urielbochi-tractian.herokuapp.com/home

## Dependencias

Para rodar localmente,  são necessarias as seguintes dependencias: 

[Git](https://git-scm.com/downloads)

[Node](https://nodejs.org/en/download/)

[Visual Studio](https://code.visualstudio.com/)

## Instalação

* Clone o repositório em seu computador inserindo o comando  `git clone https://github.com/urielbochi/challenge.git` em seu terminal.
* Com seu terminal, acesse a pasta onde foi clonado o repositório. Veja [como abrir uma pasta pelo terminal](https://gov-civil-setubal.pt/how-open-file-folder-command-prompt-windows-10#:~:text=Normalmente%2C%20voc%C3%AA%20tem%20duas%20maneiras,diretamente%20no%20Prompt%20de%20Comando.&text=Voc%C3%AA%20pode%20usar%20o%20comando,cd%20C%3A%20Users%20mini%20Desktop%20.)
* No repositório raiz, instale a dependencia a seguir:
  * `npm install` 

* Com o terminal aberto na raiz da pasta, inicie a aplicação com o comando `npm start`



## Tecnologias utilizadas

* React
* Axios
* Font awesome bootstrap
* Highcharts
* Hooks
* Context API
* Heroku
