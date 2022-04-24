# Tractian Dashboard
DESKTOP / MOBILE | Responsivo

Projeto desenvolvido para o processo seletivo. Consome uma API e faz ações como adicionar, visualizar editar e excluir (os botões ficam na coluna ações). Caso as tabelas estejam reduzidas horizontalmente, clique e arraste o mouse para o lado para visualizar o conteúdo. Também é possível scrollar as tabelas verticalmente.

Na página principal (/home), são renderizados gráficos dinâmicos baseados nas informações da API. Eles atualizam conforme os dados inseridos na tabela assets. O botão para adicionar um novo asset só é desbloqueado caso healthscore e temperatura máxima sejam preenchidos.

É possível editar todos os valores e também adicionar novos. O botão reiniciar traz os dados da API novamente.



## Deploy

Feito utilizando Heroku

[ACESSE A APLICAÇÃO](https://urielbochi-tractian.herokuapp.com/home)

**Link para copiar**: https://urielbochi-tractian.herokuapp.com/home

## Dependências

Para rodar localmente,  são necessárias as seguintes dependências: 

[Git](https://git-scm.com/downloads)

[Node](https://nodejs.org/en/download/)

[Visual Studio](https://code.visualstudio.com/)

## Instalação

* Clone o repositório em seu computador inserindo o comando  `git clone https://github.com/urielbochi/tr-desafio.git` em seu terminal.
* Com seu terminal, acesse a pasta onde foi clonado o repositório. Veja [como abrir uma pasta pelo terminal](https://gov-civil-setubal.pt/how-open-file-folder-command-prompt-windows-10#:~:text=Normalmente%2C%20voc%C3%AA%20tem%20duas%20maneiras,diretamente%20no%20Prompt%20de%20Comando.&text=Voc%C3%AA%20pode%20usar%20o%20comando,cd%20C%3A%20Users%20mini%20Desktop%20.)
* No repositório raiz, instale a dependência a seguir:
  * `npm install` 

* Com o terminal aberto na raiz da pasta, inicie a aplicação com o comando `npm start`



## Tecnologias utilizadas

* React
* React Modal
* React Indiana
* Axios
* Font awesome bootstrap
* Highcharts
* Hooks
* Context API
* Heroku (deploy)
