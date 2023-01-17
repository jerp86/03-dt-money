# Consumo de API e performance no ReactJS

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

---

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#art-layout-no-figma">Figma</a>&nbsp;|&nbsp;
</h3>
<h3 align="center">
  <a href="#rainbow-documenta%C3%A7%C3%A3o-de-cores">Cores</a>&nbsp;|&nbsp;
  <a href="#abc-fontes-utilizadas">Fontes</a>&nbsp;|&nbsp;
  <a href="#zap-como-executar">Executar</a>&nbsp;|&nbsp;
  <a href="#memo-licen%C3%A7a">Licença</a>
</h3>

---

## :information_source: Sobre

Nesse módulo foi construido uma aplicação front-end web completa, conectando a uma API e foi visto como performar aplicações com o React entendendo como funcionam os algoritmos internos da biblioteca e todo fluxo de renderização de componentes.

A aplicação desenvolvida para gerenciar transações monetárias, que contém as seguintes funcionalidades:
- Botão para criação de novas transações
- Dashboard com os valores de entradas, saídas e total
- Campo de busca de transação
- Listagem das transações
- Modal para a inserção das transações

## :interrobang: Motivo

Reinicio dos estudos do bootcamp Ignite ReactJS da Rocketseat.

Este terceiro projeto foi dividido em três partes:
- Estrutura visual
  - Criação das estruturas e estilos dos componentes, modal e página
- Conexão com a API
  - Utilizado o JSON-Server para criar uma API fake;
  - Criado contexto das transações;
  - Criado hook personaliozado
  - Criado funções utilitárias para as formatações dos valores;
- Performance
  - Utilizado React DevTools para analisar a performance
  - Aplicado Context Selectors
  - Aplicado hooks para melhorar a performance

## :rocket: Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [ESLint](https://eslint.org/)
- [Json-Server](https://github.com/typicode/json-server)
- [Phosphor](https://phosphoricons.com/)
- [Radix-UI](https://www.radix-ui.com/)
- [React-Hook-Form](https://www.react-hook-form.com/)
- [Styled-Components](https://styled-components.com/) 💅🏽
- [Zod](https://github.com/colinhacks/zod)
- [@rocketseat/eslint-config](https://github.com/rocketseat/eslint-config-rocketseat#readme)

## :art: Layout no Figma

Após logar em sua conta, você deve duplicar o Layout do projeto.

[DT Money](https://www.figma.com/community/file/1138814493269096792)

## :rainbow: Documentação de cores

| Cor       | Hexadecimal                                                      |
| --------- | ---------------------------------------------------------------- |
| white     | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
|                                                                              |
| gray-100  | ![#E1E1E6](https://via.placeholder.com/10/E1E1E6?text=+) #E1E1E6 |
| gray-300  | ![#C4C4CC](https://via.placeholder.com/10/C4C4CC?text=+) #C4C4CC |
| gray-400  | ![#8D8D99](https://via.placeholder.com/10/8D8D99?text=+) #8D8D99 |
| gray-500  | ![#7C7C8A](https://via.placeholder.com/10/7C7C8A?text=+) #7C7C8A |
| gray-600  | ![#323238](https://via.placeholder.com/10/323238?text=+) #323238 |
| gray-700  | ![#29292E](https://via.placeholder.com/10/29292E?text=+) #29292E |
| gray-800  | ![#202024](https://via.placeholder.com/10/202024?text=+) #202024 |
| gray-900  | ![#121214](https://via.placeholder.com/10/121214?text=+) #121214 |
|                                                                              |
| green-300 | ![#00B37E](https://via.placeholder.com/10/00B37E?text=+) #00B37E |
| green-500 | ![#00875F](https://via.placeholder.com/10/00875F?text=+) #00875F |
| green-700 | ![#015F43](https://via.placeholder.com/10/015F43?text=+) #015F43 |
|                                                                              |
| red-300   | ![#F75A68](https://via.placeholder.com/10/F75A68?text=+) #F75A68 |
| red-500   | ![#AB222E](https://via.placeholder.com/10/AB222E?text=+) #AB222E |
| red-700   | ![#7A1921](https://via.placeholder.com/10/7A1921?text=+) #7A1921 |

## :abc: Fontes utilizadas

- [Roboto](https://fonts.google.com/specimen/Roboto)

## :zap: Como executar

- Clone o projeto: ```git clone https://github.com/jerp86/03-dt-money.git```
- Acesse a pasta clonada: ```cd 03-dt-money```
- Instale as dependências: ```npm ci```
- Inicie a fake API e o projeto: ```npm start```

Caso tenha interesse em rodar em terminais separados, você pode utilizar o seguinte:
| Para iniciar a fake API    | Para iniciar o projeto |
| -------------------------- | ---------------------- |
| ``` npm run dev:server ``` | ``` npm run dev ```    |

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<h4 align="center">
  Feito por Jerp86 👋️
</h4>
<h5 align="center">
  <a href="mailto:jerp.dev@gmail.com">Entre em contato!</a>
</h5>

<p align="center">
  <a href="https://www.linkedin.com/in/jerp/">
    <img alt="Perfil do Linkedin de José Eduardo Rodrigues Pinto" src="https://img.shields.io/badge/LinkedIn-jerp-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
  &nbsp
  <a href="https://twitter.com/jerpbtu">
    <img alt="Perfil do Twitter de José Eduardo Rodrigues Pinto" src="https://img.shields.io/twitter/follow/jerpbtu?style=flat&logoColor=white&logo=Twitter">
  </a>
</p>
