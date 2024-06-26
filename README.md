﻿# Architecture-Monorepo-Nextjs

## Projeto

- Os espaços de trabalho do Yarn visam facilitar o trabalho com mono-repos. Eles permitem que vários projetos existam juntos em um mesmo repositório e façam referência cruzada entre si. Além disso, qualquer modificação no código fonte de um será aplicada instantaneamente nos outros. Basicamente, um espaço de trabalho é um pacote local composto de suas próprias fontes e arquivos. Os espaços de trabalho possuem duas propriedades importantes. A primeira delas diz que somente as dependências de um espaço de trabalho podem ser acessadas. Isso nos permite desacoplar de forma limpa os projetos uns aos outros já que você não precisa mesclar todas as suas dependências em uma lista enorme.

- A segunda propriedade diz que se o gerenciador de pacotes precisar resolver algo em nosso espaço de trabalho, ele buscará preferencialmente a resolução do espaço de trabalho e não a solução remota. Ao invés de usar os pacotes remotos, os pacotes do seu projeto estarão interconectados e usarão código armazenado no seu repositório.

## Bibliotecas

- Yarn: Assim como o *npm*, é um dos principais gerenciadores de pacotes do Javascript
- Yarn Workspaces: uma nova forma de configurar sua arquitetura de pacotes, permite que você configure vários pacotes de forma que você só precise executar yarn installuma vez para instalar todos eles em uma única passagem.

## Como usar

- Ao realizar a instalação de ambas bibliotecas apenas utilizando `npm install` ou `npm i` na raíz deste projeto, ou até mesmo instalando manualmente cada biblioteca. Na raíz do projeto é necessário ter um package.json com a seguinte estrutura:
```
  {
    "private": true,
    "workspaces": ["workspace-a", "workspace-b"]
  }
```
- Após este arquivo ser criado, para que então possa ser possível o ambiente do yarn é necessário criar outros pacotes e, para cada pacote ter um package.json na raíz do próprio e especificamente deve-se atentar a propriedade *name* que existe no package.json por quê é este name que ve ser passado à propriedade workspaces como no exemplo acima. Podemos criar então um pacote **workspace-a** com o seguinte package.json:
```
  {
    "name": "workspace-a",
    "version": "1.0.0"
  }
```
- E um outro ambiente uma outra pasta na raíz do projeto chamada **workspace-b** com o seguinte package.json:
```
  {
    "name": "workspace-b",
    "version": "1.0.0",
  
    "dependencies": {
      "workspace-a": "1.0.0"
    }
  }
```
- Note que no package.json da pasta **workspace-b** foi adicionado uma propriedade `"dependencies"` com o `**workspace-a"` incluído nela, isso é necessário por que a partir de agora a pasta da raíz do projeto **workspace-a** será tratado como se fosse uma biblioteca sendo instalado externamente em seu projeto

## Finalização

- Finalmente após toda configuração, você deve rodar o comando `yarn install` para que ele possa gerar os arquivos necessários e configurações finais e então, seja possível trabalhar com o novo ambiente de configuração de pacotes

## Exemplo

Este repositório está sendo usado como exemplo utilizando NextJs, Typescript e o Yarn. Os demais passos acima já foram realizados inicialmente neste projeto e, já existem alguns arquivos para testes, além dos comandos para rodar a aplicação em desenvolvimento, realizar o build da mesma e um comando para rodar em produção.

- Para fins de teste no arquivo package.json da raíz do projeto estão os comando citados acima para rodar a aplicação e além disso também existem 2 comandos que, ao serem executados eles realizam a troca do 'ambiente' e fazem a execução do mesmo, esses comando são: `yarn web-public` ao rodar este comando no terminal na raíz do projeto você poderá passar um parâmetro a mais para que ele possa executar em seguida, Ex: `yarn web-public add styled-components` este comando indica para fazer a instalação da biblioteca styled-components diretamente na pasta **web-public**. Outro comando que realiza o mesmo procedimento é: `yarn design-system` passando mais um parâmetro em seguida ele realizará esta ação.
- Os demais comando são para rodar a aplicação como havia sido comentado, basta utilizar o comando `yarn` e em seguida o nome da propriedade, Ex: `yarn dev:web-public`.
