<template>
    <div style="display: flex; justify-content: center;">
        <button class="button-projects"  style="font-size: 3.8rem;" @click="show = !show">Meus Projetos</button>
    </div>
    <Transition :duration="550" name="nested">
      <div v-if="show" class="outer">
        <div class="inner">         
            <ProjectCarousel :projects="myProjects" />
        </div>
      </div>
    </Transition>
  </template>

<script>
import ProjectCarousel from '../components/ProjectCarousel.vue';

//images
import dsMove from '../assets/projects/dsMove.png';
import blogPessoal from '../assets/projects/blogPessoal.png';
import tarefasCRUD from '../assets/projects/tarefasCRUD.png';
import nlwCopa from '../assets/projects/nlwCopa.png';
import biblioteca from '../assets/projects/biblioteca.png';
import net8 from '../assets/projects/net8.png';

export default {
  components: {
    ProjectCarousel,
  },
  data() {
    return {
        show: false,
      myProjects: [
        {
          imagem: blogPessoal,
          links: [
            { text: 'GitHub', link: 'https://github.com/jeanlsfortes/blog-jean' },
            { text: 'Live Demo', link: 'https://jeanlsfortes.github.io/blog-jean/' }
          ],
          titulo: 'Blog Pessoal',
          anoCriacao: '2024',
          descricao:  `<h1>My Blog</h1>
            É um blog pessoal desenvolvido com <strong>Vue.js</strong> que serve como um portfólio interativo para compartilhar as experiências, projetos e certificações de um desenvolvedor. Este blog é uma plataforma dinâmica e moderna onde o autor pode documentar sua jornada profissional, destacando suas habilidades e conquistas.</p>
            <br>
            <h2>Tecnologias Utilizadas</h2>
            <br>
            <h3>Frontend: Vue.js</h3>
            <br>
            <ul>
                <li><strong>Vue.js</strong> é um framework JavaScript progressivo utilizado para construir interfaces de usuário. Ele é conhecido por sua simplicidade e flexibilidade, permitindo a criação de componentes reutilizáveis e uma integração fácil com outras bibliotecas ou projetos existentes. Com Vue.js, o blog é altamente responsivo e oferece uma experiência de usuário fluida.</li>
            </ul>
            <br>
            <h2>Funcionalidades do My Blog</h2>
            <br>
            <ul>
                <li><strong>Apresentação de Experiências</strong>: O blog permite ao desenvolvedor compartilhar suas experiências profissionais, detalhando projetos anteriores, desafios enfrentados e soluções implementadas.</li>
                <li><strong>Portfólio de Trabalhos</strong>: Uma seção dedicada para exibir os projetos desenvolvidos, com descrições detalhadas, tecnologias utilizadas e links para repositórios ou demonstrações ao vivo.</li>
                <li><strong>Certificações</strong>: Uma área onde o desenvolvedor pode listar suas certificações, cursos concluídos e outras qualificações relevantes, demonstrando seu compromisso com o aprendizado contínuo.</li>
                <li><strong>Blog de Artigos Técnicos</strong>: O desenvolvedor pode publicar artigos sobre temas técnicos, tutoriais e insights da indústria, contribuindo para a comunidade de desenvolvedores e compartilhando seu conhecimento.</li>
                <li><strong>Interface Responsiva</strong>: Desenvolvido com Vue.js, o blog é adaptável a diferentes dispositivos, proporcionando uma experiência consistente em desktops, tablets e smartphones.</li>
            </ul>`
        },
        {
          imagem: net8,
          links: [
            { text: 'GitHub', link: 'https://github.com/jeanlsfortes/Catalogo'}
          ],
          titulo: 'Catálogo de Produtos - API',
          anoCriacao: '2024',
          descricao: `<h1>API RESTful com .NET 8 e Testes Unitários</h1>
                      <br>
                      <p>Este projeto foi desenvolvido como parte de um curso que aborda os principais recursos para a criação de APIs REST na plataforma .NET utilizando o <strong>ASP.NET Core</strong>. O projeto explora conceitos fundamentais e avançados na construção de Web APIs robustas e escaláveis.</p>
                      <br>
                      <h2>Tecnologias e Conceitos Abordados</h2>
                      <br>
                      <ul>
                          <li><strong>REST</strong>: Implementação de APIs seguindo os princípios RESTful, garantindo uma comunicação padronizada e eficiente entre cliente e servidor.</li>
                          <li><strong>JSON</strong>: Utilização do formato JSON (JavaScript Object Notation) para troca de dados entre o cliente e o servidor, garantindo leveza e compatibilidade com diversas plataformas.</li>
                          <li><strong>HTTP</strong>: Exploração dos métodos HTTP (GET, POST, PUT, DELETE) para realizar as operações de CRUD (Create, Read, Update, Delete) na API.</li>
                          <li><strong>ASP.NET Core</strong>: Framework utilizado para a criação de Web APIs modernas, seguras e de alta performance, aproveitando as vantagens do .NET Core.</li>
                          <li><strong>Entity Framework Core</strong>: Implementação do EF Core na abordagem Code-First, facilitando a modelagem de dados e a interação com o banco de dados. O projeto também explora a aplicação de Migrations para gerenciar alterações no esquema do banco de dados.</li>
                      </ul>
                      <br>
                      <h2>Funcionalidades e Padrões de Projeto</h2>
                      <br>
                      <ul>
                          <li><strong>Roteamento</strong>: Configuração de rotas personalizadas para os endpoints da API, permitindo um controle granular sobre as URLs e a forma como as requisições são tratadas.</li>
                          <li><strong>Filtros</strong>: Implementação de filtros para manipulação de requisições e respostas, incluindo autenticação, autorização e tratamento de erros.</li>
                          <li><strong>Métodos Assíncronos</strong>: Utilização de métodos assíncronos (async/await) para melhorar a performance e a escalabilidade da API, especialmente em operações que envolvem I/O (Input/Output).</li>
                          <li><strong>Logging</strong>: Configuração de logging para monitoramento e diagnóstico da aplicação, facilitando a identificação e resolução de problemas.</li>
                          <li><strong>Tratamento de Erros</strong>: Implementação de estratégias para captura e tratamento de erros, garantindo respostas adequadas e informativas aos clientes da API.</li>
                          <li><strong>Paginação de Dados</strong>: Implementação de paginação para controlar o volume de dados retornado em respostas, melhorando a performance e a usabilidade da API.</li>
                          <li><strong>Padrões Repository e Unit of Work</strong>: Adoção dos padrões Repository e Unit of Work para organizar a lógica de acesso a dados e garantir transações consistentes.</li>
                          <li><strong>AutoMapper</strong>: Utilização do AutoMapper para simplificar o mapeamento entre objetos de domínio e Data Transfer Objects (DTOs), facilitando a transformação de dados entre camadas da aplicação.</li>
                      </ul>
                      <br>
                      <h2>Testes Unitários</h2>
                      <br>
                      <ul>
                          <li><strong>NUnit</strong>: O projeto utiliza o framework de testes <strong>NUnit</strong> para a criação e execução de testes unitários, garantindo a qualidade e a robustez do código.</li>
                          <li><strong>Moq</strong>: Para simular dependências e testar a lógica de negócios de forma isolada, o projeto faz uso da biblioteca <strong>Moq</strong>, permitindo a criação de mocks e stubs para classes e interfaces.</li>
                          <li><strong>Testes de Controllers</strong>: Testes focados nos controllers da API foram implementados para verificar se as rotas e ações estão funcionando corretamente, incluindo testes de cenários de sucesso e de erro.</li>
                          <li><strong>Testes de Repositórios</strong>: Os repositórios foram testados para garantir que as operações de acesso a dados funcionem conforme o esperado, assegurando a integridade das transações.</li>
                          <li><strong>Testes de Serviços</strong>: Os serviços, que encapsulam a lógica de negócios, também foram testados para validar sua funcionalidade e garantir que as regras de negócio sejam aplicadas corretamente.</li>
                      </ul>
                      <br>`
        },
        {
          imagem: tarefasCRUD,
          links: [
            { text: 'GitHub', link: 'https://github.com/jeanlsfortes/ProjetoTarefasCRUD/' },
          ],
          titulo: 'Projeto Tarefas CRUD',
          anoCriacao: 'Maio de 2023',
          descricao:  `<h1>CRUD em C# com .NET 6 </h1>
              <br>
                <p>Este projeto é um CRUD (Create, Read, Update, Delete) desenvolvido em <strong>C#</strong> utilizando o framework <strong>.NET 6</strong>. 
                  A aplicação faz uso de <strong>Dapper</strong> para interações eficientes com o banco de dados, aproveitando a simplicidade e flexibilidade desse micro ORM. O projeto também adota o padrão de repositório para a separação de lógica de acesso a dados, promovendo um design limpo e fácil de manter.</p>
                  <br>
                <h2>Estrutura do Projeto</h2>
                <br>
                <h3>Controllers</h3>
                <br>
                <ul>
                  <li>Os <strong>Controllers</strong> são responsáveis por gerenciar as requisições HTTP, vinculando as ações aos métodos do CRUD. Eles garantem a lógica de roteamento e comunicação com os serviços e repositórios, permitindo que as operações de criar, ler, atualizar e deletar dados sejam executadas conforme esperado.</li>
                </ul>
                <br>
                <h3>Enums</h3>
                <br>
                <ul>
                  <li>O projeto utiliza <strong>Enums</strong> para definir conjuntos de valores nomeados, facilitando o gerenciamento de estados ou opções predefinidas, como status de registros, tipos de usuários, entre outros. Os enums melhoram a legibilidade e a manutenção do código, além de reduzir erros associados a valores constantes dispersos.</li>
                </ul>
                <br>
                <h3>Models e Propriedades</h3>
                <br>
                <ul>
                  <li>Os <strong>Models</strong> representam as entidades do domínio, como tabelas do banco de dados. Eles contêm <strong>propriedades</strong> que refletem as colunas dessas tabelas e incluem validações e anotações que definem o comportamento dos dados. Os models são essenciais para garantir a integridade e consistência dos dados na aplicação.</li>
                </ul>
                <br>
                <h3>Conexão com Banco de Dados</h3>
                <br>
                <ul>
                  <li>A conexão com o banco de dados é gerenciada de forma eficiente utilizando <strong>Dapper</strong>, um micro ORM que permite consultas SQL rápidas e flexíveis. Com o Dapper, o acesso a dados é simplificado, facilitando a execução de comandos SQL e mapeamento de resultados para objetos C#.</li>
                </ul>
                <br>
                <h3>Repositórios</h3>
                <br>
                <ul>
                  <li>Os <strong>Repositórios</strong> encapsulam a lógica de acesso a dados, proporcionando uma camada de abstração entre os controllers e o banco de dados. Eles centralizam as operações de persistência e recuperação de dados, promovendo um código mais modular e testável.</li>
                </ul>
                <br>
                <h2>Tecnologias e Pacotes Utilizados</h2>
                <br>
                <ul>
                  <li><strong>.NET 6</strong>: Framework utilizado para construir a aplicação, fornecendo uma base sólida e moderna para o desenvolvimento.</li>
                  <li><strong>Dapper</strong>: Micro ORM utilizado para facilitar a interação com o banco de dados de forma rápida e eficiente.</li>
                  <li><strong>Entity Framework Core</strong>: Embora o Dapper seja o principal ORM, o projeto também inclui o Entity Framework Core para funcionalidades adicionais, como migrações de banco de dados.</li>
                  <li><strong>Swashbuckle.AspNetCore</strong>: Ferramenta utilizada para gerar documentação interativa da API via Swagger, facilitando o desenvolvimento e o consumo da API.</li>
                </ul><br>`
        },
        {
          imagem: biblioteca,
          links: [
            { text: 'GitHub', link: 'https://github.com/jeanlsfortes/Entrega/settings' },
            { text: 'Figma', link: 'https://www.figma.com/proto/3lo7TIja6hDdFJfDYysM8J/Prot%C3%B3tipos-de-alto-n%C3%ADvel--Livraria-Bora-Ler-Jorgin?node-id=34-4&starting-point-node-id=34%3A4&t=S4TZ5Mh0gjpj5ZPl-1' }
          ],
          titulo: 'istema de Gestão de Biblioteca',
          anoCriacao: 'Setembro de 2022',
          descricao: `<h1>Sistema de Gestão de Biblioteca</h1>
                    <br>
                    <p>Este projeto foi desenvolvido voluntariamente para a <strong>Biblioteca Municipal Raul Brandão</strong>. Embora apenas o início do projeto tenha sido disponibilizado, ele foi entregue e atualmente está em uso na biblioteca, facilitando a gestão de livros e usuários.</p>
                      <br>
                    <h2>Tecnologias Utilizadas</h2>
                    <br>
                    <ul>
                        <li><strong>Java 18</strong>: A versão mais recente do Java foi utilizada para garantir a eficiência e a compatibilidade com as novas funcionalidades da linguagem.</li>
                        <li><strong>Spring Boot</strong>: Este framework foi escolhido por sua facilidade de configuração e pela capacidade de criar aplicações empresariais robustas e escaláveis.</li>
                        <li><strong>Spring Data JPA</strong>: Utilizado para o gerenciamento de dados, o Spring Data JPA simplifica a integração entre a aplicação e o banco de dados, permitindo a implementação de repositórios personalizados.</li>
                        <li><strong>Hibernate</strong>: O Hibernate foi integrado ao projeto para o mapeamento objeto-relacional (ORM), facilitando a interação com o banco de dados relacional.</li>
                        <li><strong>Maven</strong>: Maven foi usado para a gestão de dependências e construção do projeto, garantindo um ambiente de desenvolvimento consistente.</li>
                        <li><strong>Lombok</strong>: Utilizado para reduzir a verbosidade do código, gerando automaticamente getters, setters, construtores e outros métodos.</li>
                        <li><strong>H2 Database</strong>: Um banco de dados em memória foi utilizado para testes e desenvolvimento rápido, garantindo que a aplicação pudesse ser testada sem a necessidade de um banco de dados externo.</li>
                    </ul>
                      <br>
                    <h2>Arquitetura do Sistema</h2>
                    <br>
                    <p>A arquitetura do sistema foi baseada em um modelo de <strong>Repository-Service</strong>, garantindo uma separação clara das responsabilidades e facilitando a manutenção e a escalabilidade do código.</p>
                    <br>
                    <ul>
                        <li><strong>Repository</strong>: A camada de repositórios foi implementada utilizando Spring Data JPA, permitindo o acesso aos dados de forma abstrata e encapsulando a lógica de persistência.</li>
                        <li><strong>Service</strong>: A camada de serviços foi responsável por implementar a lógica de negócios, utilizando os repositórios para acessar os dados e processá-los conforme as regras de negócio.</li>
                        <li><strong>Service Implementation</strong>: As classes de implementação dos serviços foram projetadas para serem facilmente extensíveis, permitindo a adição de novas funcionalidades sem comprometer o código existente.</li>
                    </ul>
                    <br>
                    <h2>Funcionalidades do Sistema</h2>
                    <br>
                    <ul>
                        <li><strong>Gestão de Livros</strong>: Permite a adição, edição, remoção e consulta de livros no acervo da biblioteca.</li>
                        <li><strong>Gestão de Usuários</strong>: Funcionalidades para cadastro, consulta e gerenciamento de usuários da biblioteca.</li>
                        <li><strong>Empréstimos e Devoluções</strong>: Sistema para registrar e gerenciar o empréstimo e devolução de livros, com controle de prazos e penalidades.</li>
                    </ul>`,
        },
        {
          imagem: nlwCopa,
          links: [
          { text: 'GitHub', link: 'https://github.com/jeanlsfortes/NLW-Copa' },
          { text: 'Figma', link: 'https://www.figma.com/community/file/1169028343875283461' },
          ],
          titulo: 'NLW Copa do Mundo',
          anoCriacao: 'Novembro de 2022',
          descricao:  `<h1>NLW Copa do Mundo</h1>
            <div align="center">
                <img src="https://img.shields.io/static/v1?label=NLW&message=10&color=F7DD43&labelColor=202024" alt="NLW 10 - Copa" />
                <a href="LICENSE"><img src="https://img.shields.io/static/v1?label=License&message=MIT&color=F7DD43&labelColor=202024" alt="License"></a>
            </div>

            <img src=".github/web.png">

            <h2>💻 Projeto</h2>
            <p>Aplicação para participar de bolões da Copa do Mundo 2022.</p>
            <p>Participei deste evento e construí uma aplicação inteira do zero, tanto web quanto mobile.</p>

            <h2>✨ Tecnologia</h2>
            <ul>
                <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
                <li><a href="https://reactjs.org/">React</a></li>
                <li><a href="https://reactnative.dev/">React Native</a></li>
                <li><a href="https://expo.dev/">Expo</a></li>
                <li><a href="https://www.fastify.io/">Fastify</a></li>
                <li><a href="https://www.prisma.io/">Prisma</a></li>
                <li>E muitas outras…</li>
            </ul>

            <h2>🚀 Como executar</h2>
            <p>Em todos os projetos, ao acessar a pasta, é preciso baixar os pacotes com o gerenciador de sua preferência.</p>
            <p>Acesse a documentação de cada projeto:</p>
            <ul>
                <li><a href="./server/README.md">Backend</a></li>
                <li><a href="./web/README.md">Web</a></li>
                <li><a href="./mobile/README.md">Mobile</a></li>
            </ul>

            <h2>🔖 Layout</h2>
            <p>Você pode visualizar o layout do projeto através do link abaixo:</p>
            <ul>
                <li><a href="https://www.figma.com/community/file/1169028343875283461">Layout</a></li>
            </ul>
            <p>Lembrando que você precisa ter uma conta no <a href="http://figma.com/">Figma</a>.</p>

            <h2>📝 License</h2>
            <p>Esse projeto está sob a licença MIT. Veja o arquivo <a href="LICENSE">LICENSE</a> para mais detalhes.</p>

            <hr>

            <div align="center">
                <p>Feito com 💜 by Rocketseat</p>
                <p><a href="https://discord.gg/rocketseat">👉 Participe da nossa comunidade 👈</a></p>
            </div>

            <div align="center">
                <a href="https://discord.gg/rocketseat" target="_blank">
                    <img align="center" src="https://storage.googleapis.com/golden-wind/comunidade/rodape.svg" alt="banner"/>
                </a>
            </div>`
        },

        {
          imagem: dsMove,
          links: [
            { text: 'Figma', link: 'https://www.figma.com/design/4HzGv8DN95FNzgzT9AvefK/DSMovie1?node-id=113-182&t=fk6v69IQZl4mhJNq-1' },
            { text: 'GitHub', link: 'https://github.com/jeanlsfortes/Projeto-Dsmovie/tree/main/frontend' },
          ],
          titulo: 'DSMovie',
          anoCriacao: 'Jan 2022',
          descricao: `  <h1>DSMove</h1>
                        <br>
                        <p><strong>DSMove</strong> é uma aplicação inovadora desenvolvida com <strong>React</strong> no Frontend e <strong>Spring</strong> no Backend. Esta plataforma permite aos usuários avaliar e comentar sobre uma vasta seleção de filmes. Com uma interface intuitiva e responsiva, os usuários podem facilmente navegar, buscar e avaliar seus filmes favoritos, contribuindo para uma comunidade engajada e apaixonada por cinema.</p>
                        <br>
                        <h2>Tecnologias Utilizadas</h2>
                        <br>
                        <h3>Frontend: React</h3>
                        <br>
                        <ul>
                            <li><strong>React</strong> é uma biblioteca JavaScript amplamente utilizada para construir interfaces de usuário. Ela permite a criação de componentes reutilizáveis, facilitando a manutenção e a escalabilidade do código. Com React, a interface do usuário é atualizada de forma eficiente em resposta às mudanças de dados, proporcionando uma experiência de usuário fluida e dinâmica.</li>
                        </ul>
                        <br>
                        <h3>Backend: Spring</h3>
                        <br>
                        <ul>
                            <li><strong>Spring</strong> é um framework Java para desenvolvimento de aplicações robustas e escaláveis. Ele oferece uma ampla gama de funcionalidades, incluindo injeção de dependência, segurança, transações e suporte a APIs RESTful. O Spring facilita a criação de aplicações empresariais complexas, garantindo alta performance e facilidade de manutenção.</li>
                        </ul>
                        <br>
                        <h2>Funcionalidades do DSMove</h2>
                        <br>
                        <ul>
                            <li><strong>Avaliação de Filmes</strong>: Os usuários podem avaliar filmes com base em uma escala de estrelas, deixando comentários e feedbacks detalhados.</li>
                            <li><strong>Busca e Navegação</strong>: A plataforma permite a busca eficiente de filmes por título, gênero ou ano de lançamento.</li>
                            <li><strong>Interface Responsiva</strong>: Desenvolvida com React, a interface é adaptável a diferentes dispositivos, proporcionando uma experiência consistente em desktops, tablets e smartphones.</li>
                            <li><strong>Segurança e Performance</strong>: Utilizando Spring no backend, o DSMove garante a segurança dos dados dos usuários e a alta performance nas operações de busca e avaliação.</li></ul>`
        }
      ],
    };
  },
};
</script>


<style>
.outer, .inner {
	background: #eee;
  padding: 30px;
  min-height: 100px;
}
  
.inner { 
  background: #ccc;
}
  
.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}
.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}

.button-projects{
    padding: 20px 60px; 
    color: inherit;
    font-size: inherit;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.932), 0 0 30px rgba(255, 255, 255, 0.4);
    animation: shine 2s infinite alternate;
}


@keyframes shine {
  from {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
  }
  to {
    text-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6);
  }
}

</style>