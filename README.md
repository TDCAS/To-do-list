# Aplicação de Lista de Tarefas

## Visão Geral
Este projeto é uma aplicação de lista de tarefas construída com React e TypeScript. Ele permite aos usuários criar, editar e excluir tarefas. A aplicação utiliza o `localStorage` para persistir os dados das tarefas, garantindo que a lista permaneça consistente entre as sessões do navegador sem a necessidade de um backend.

## Funcionalidades
- **Adicionar Tarefa**: Usuários podem adicionar novas tarefas à sua lista de tarefas.
- **Editar Tarefa**: Usuários podem editar tarefas existentes.
- **Excluir Tarefa**: Usuários podem remover tarefas da lista.
- **Armazenamento Persistente**: As tarefas são salvas no `localStorage` do navegador, permanecendo disponíveis mesmo após o navegador ser fechado e reaberto.

## Instalação
Para executar este projeto localmente, siga estes passos:

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/TDCAS/To-do-list.git
   cd To-do-list
2. **Instale as Dependências**:

   npm install

3. **Inicie a Aplicação**:

   npm run dev

A aplicação estará disponível em http://localhost:3000.

### Estrutura do Projeto
A estrutura do projeto está organizada da seguinte forma:

    To-do-list/
    ├── public/
    │   ├── index.html
    │   └── ...
    ├── src/
    │   ├── components/
    │   │   ├── Task.tsx
    │   │   ├── TaskList.tsx
    │   │   └── ...
    │   ├── App.tsx
    │   ├── index.tsx
    │   └── ...
    ├── package.json
    ├── tsconfig.json
    └── ...

  public/: Contém o arquivo HTML e outros recursos estáticos.
  src/: Contém os componentes React, o arquivo principal da aplicação e a configuração do TypeScript.
  components/: Contém os componentes individuais utilizados na aplicação.
  App.tsx: O componente principal da aplicação.
  index.tsx: O ponto de entrada da aplicação.
  Componentes Principais
  Task.tsx: Representa um único item de tarefa. Inclui funcionalidades para editar e excluir a tarefa.
  TaskList.tsx: Gerencia a lista de tarefas e lida com a adição de novas tarefas.
  App.tsx: O componente principal da aplicação que integra tudo.
  Integração com LocalStorage
  A aplicação utiliza o localStorage do navegador para armazenar as tarefas. Isso garante que os dados persistam mesmo se o usuário fechar o navegador. A API localStorage é usada para salvar e recuperar tarefas no formato JSON.



### Faça um Fork do Repositório: Clique no botão "Fork" no canto superior direito da página do repositório.
Clone Seu Fork: Clone seu repositório forkado para sua máquina local.
bash

   git clone https://github.com/your-username/To-do-list.git
   cd To-do-list

Crie um Novo Branch: Crie um novo branch para sua funcionalidade ou correção de bug.

   git checkout -b feature-name
Faça as Alterações: Faça suas alterações no código.
Faça o Commit das Alterações: Faça o commit das suas alterações com uma mensagem descritiva.

   git commit -m "Descrição das alterações"

Envie as Alterações: Envie suas alterações para seu repositório forkado.
bash

   git push origin feature-name
Crie um Pull Request: Vá até o repositório original e crie um pull request a partir do seu repositório forkado.

### Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

### Contato
Para quaisquer perguntas ou problemas, por favor, abra uma issue no repositório ou entre em contato com o proprietário do repositório.