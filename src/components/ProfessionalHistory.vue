<template>
    <h2 style="  margin-top: 2rem;">Agenda Assessoria</h2>
    <div class="div-info">
      <PictureInformation :img="imagemAgenda" title="Agenda Assessoria" description="A Agenda Assessoria é uma empresa moderna que desde 1994 faz parte do desenvolvimento desse cenário previdenciário que abrange toda a gestão pública, inclusive considerada hoje uma referência nacional em produtos e serviços para RPPS." />

      <p class="page">
        Desde abril de 2023, tenho embarcado em uma jornada fascinante como Analista Desenvolvedor na Agenda Assessoria, onde cada dia traz novos desafios e oportunidades para criar
        soluções inovadoras. Inicialmente estava focado na manutenção de sistemas legados, onde mergulhei de cabeça no mundo de C#, Angular e ASP.NET, trabalhando em projetos cruciais 
        como o Censo Previdenciário, Regimes Próprios de Previdência Social e eSocial. Esses projetos me ensinaram a importância de preservar a integridade dos sistemas enquanto 
        otimizo processos e incorporo melhores práticas de desenvolvimento. <br><br>

        Mas essa foi apenas a primeira parte da minha trajetória. Com o passar do tempo, tive a chance de atuar no setor de inovação, um ambiente vibrante e repleto de possibilidades. 
        Aqui, minha missão é construir novas aplicações do zero, utilizando as tecnologias mais modernas e promissoras, com .NET 8, Next.js e Vue.js. 
        Cada novo projeto é uma aventura, com o objetivo de substituir sistemas antigos e elevar o padrão de desempenho, escalabilidade e manutenção.<br><br>

        O que torna essa jornada ainda mais empolgante é a minha crescente responsabilidade em desenhar a arquitetura desses projetos, garantindo que cada aplicação não seja apenas 
        funcional, mas também robusta e preparada para o futuro. É um papel que me desafia a pensar estrategicamente, sempre com os olhos voltados para o que vem pela frente, 
        enquanto me mantenho fiel às melhores práticas de desenvolvimento. Essa história ainda está sendo escrita, mas cada capítulo até agora tem sido repleto de aprendizado, crescimento e inovação.
      </p>

    </div>

    <h2> POLITEC - MT</h2>
    <div class="div-info">
        <p class="page">
            Minha jornada profissional como desenvolvedor começou como estudante voluntário no Núcleo de Tecnologia da Informação (NUTI) da UFMT, onde, desde junho de 2021, 
            tive a oportunidade de me envolver em projetos desafiadores e enriquecedores. A experiência inicial como voluntário foi uma etapa fundamental no meu desenvolvimento, 
            pois me permitiu aplicar e expandir meus conhecimentos em um ambiente colaborativo e inovador. <br><br>
    
            Em janeiro de 2022, fui oficialmente contratado como Desenvolvedor Full Stack pelo NUTI, onde assumi um papel crucial no desenvolvimento de uma aplicação de Laudos Eletrônicos. 
            Minha principal responsabilidade era criar e manter a lógica de negócios da aplicação, garantindo que o sistema fosse não apenas funcional, mas também escalável, seguro e de alto desempenho. 
            Para alcançar esses objetivos, aprendi padrões do setor como Clean Code, OO, princípios SOLID, Desenvolvimento Ágil, CI/CD ...  <br><br>

            Além das responsabilidades relacionadas à lógica de negócios, também fui encarregado da criação do desenvolvimento de microsserviços, utilizando tecnologias avançadas de mensageria, como Spring AMQP e RabbitMQ, 
            para garantir uma comunicação eficiente e confiável entre os serviços. Essa experiência não apenas solidificou minha expertise técnica, mas também me proporcionou uma visão abrangente sobre 
            o ciclo de vida do desenvolvimento de software, desde a concepção até a implementação e manutenção de soluções robustas e eficientes. <br><br>
    
            &#9758; <a href="https://sites.google.com/politec.mt.gov.br/historia-atena/f%C3%A1brica-de-software" target="_blank" > Fábrica de Software</a>
          </p> 
        <PictureInformation :img="imagemPolitec" title="Fábrica de Software - POLITEC" description="A Fábrica de Software foi criada em meados de Junho de 2019, com o objetivo de melhorar o fluxo de trabalho dos servidores da POLITEC através da criação e manutenção de softwares." />

    </div>
    
    <h2> UFMT - Universidade Federal de Mato Grosso</h2>
    <div class="div-info">
        <PictureInformation :img="imagemCSBC" title="CSBC - Certificado" description="O certificado de Honra ao Mérito é uma distinção concedida a estudantes ou ex-estudantes que obtiveram um desempenho excepcional em suas atividades escolares ou acadêmicas" />
        <p class="page">
            Minha paixão por programação começou de maneira inesperada ao 15 anos, quando encontrei o mundo do Java enquanto jogava Minecraft.
            A partir desse momento, fui cativado pela magia que a programação exerce sobre a criação de soluções e a resolução de problemas.
            Reconhecendo a necessidade de me aprimorar e aprofundar meus conhecimentos, decidi ingressar na Universidade Federal de Mato Grosso (UFMT),
            onde minha jornada acadêmica se desdobrou de maneira fascinante. <br><br>

            Na UFMT, minha trajetória universitária foi marcada por um ambiente rico em aprendizado e descobertas. Tive a oportunidade de participar de projetos de pesquisa e extensão,
            onde pude aplicar meus conhecimentos em projetos reais, participei de várias maratonas de programação, hackathons e eventos de tecnologia. Umas das minhas melhores experiências 
            foi ganhar a Maratona regional e participar da final da Maratona de Programação da SBC, onde pude competir com os melhores programadores do Brasil e ficar entre os cinco melhores.
        </p>
    </div>
    <br><br>
</template>

<script>
import PictureInformation from '../components/PictureInformation.vue';
import politec from '../assets/politec.png';
import csbc from '../assets/user/csbc.png';
import agenda from '../assets/agenda.png';

export default {
  name: 'ProfessionalHistory',
  components: {
    PictureInformation,

  },
  data() {
    return {
      imagemPolitec: politec,
      imagemCSBC: csbc,
      imagemAgenda: agenda,
    };
  },
};
</script>

<style scoped>
.page{
    font-size: 1.2rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: justify;
}

.div-info{
  display: flex; 
  align-items: center;
  margin-left: 1rem;
  margin-right: 1.5rem;
}

h1 {
  font-size: 3.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

}

h2 {
  font-size: 1.5rem;
}

@media only screen and (max-width: 70rem) {
  .div-info {
    flex-direction: column;
    text-align: center;
    margin-left: 0;
    margin-right: 0;
  }

  .page {
    font-size: 1rem;
    margin: 1rem;
    text-align: justify;
  }

  .div-info img {
    max-width: 100%;
    height: auto;
  }

  h2 {
    font-size: 1.25rem;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
  }
}
</style>