<template>
	<main id="certificates-page">
		<h1>Certificados</h1>
    <Certificates v-for="certificado in certificados" :certificado="certificado" :key="certificado.titulo"></Certificates>

	</main>
</template>

<script>
import Certificates from '../components/Certificates.vue'
import cursoSantader from '../assets/cursoSantader.jpg'
import diploma from '../assets/diploma.jpg'

export default {
  components: {
    Certificates,
  },
  data() {
    return {
      certificados: [
        {
          img: diploma,
          nome: 'Diploma de Bacharel em Ciência da Computação',
          description: 'O Reitor da Universidade Federal de Mato Grosso, no uso de suas atribuições e tendo em vista a conclusão do Curso de Ciência da Computação, em 18 de dezembro de 2023 e a colação de grauna data de 19 de dezembro de 2023, confere o título de Bacharel em Ciênciada Computaçãoa Jean Lucas Solano Fortes brasileiro, natural do Estado de Mato Grosso, nascido em 18 de setembro de 2000, portador da Cédula de Identidade 29058317, expedido por SESP-MT, e outorga-lhe o presente Diploma a fim de que possa gozar de todos os direitos e prerrogativas legais. Cuiabá -Mato Grosso, 05 de fevereiro de 2024',
          link: 'https://academico-siga.ufmt.br/ufmt.portalacademico/Estudante/Documento/DownloadDiplomaPdf',
        },
        {
          img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-884e0c93-2df9-4ff8-aed2-b489c63ff797.jpg?v=1723126625000',
          nome: 'Desenvolvimento Fullstack Next + Spring Boot',
          description: 'O certificado acima atesta que Jean Lucas Solano Fortes concluiu com êxito o curso Desenvolvimento Web Fullstack com Next.js + Spring Boot em 20/02/2024, ministrado por Dougllas Sousa na Udemy. O certificado indica que todo o curso foi concluído, conforme validado pelo aluno. A duração do curso representa a duração total dos vídeos no curso no momento da conclusão mais recente.',
          link: 'https://www.udemy.com/certificate/UC-884e0c93-2df9-4ff8-aed2-b489c63ff797/',
        },
        {
          img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-b2bcc851-7043-4b14-ae25-30e2ee0762a0.jpg?v=1723126148000',
          nome: 'Spring Boot Expert: JPA, RESTFul API, Security, JWT e Mais',
          description: 'O certificado acima atesta que Jean Lucas Solano Fortes concluiu com êxito o curso Spring Boot Expert: JPA, RESTFul API, Security, JWT e Mais em 20/02/2024, ministrado por Dougllas Sousa na Udemy. O certificado indica que todo o curso foi concluído, conforme validado pelo aluno. A duração do curso representa a duração total dos vídeos no curso no momento da conclusão mais recente.',
          link: 'https://www.udemy.com/certificate/UC-b2bcc851-7043-4b14-ae25-30e2ee0762a0/',
        },
        {
          img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-8719ebf2-bb0b-41d4-addd-d597e7696127.jpg?v=1723126424000',
          nome: 'TDD em C# com xUnit, NUnit e Moq. Testes e Frameworks .NET.',
          description: 'O certificado acima atesta que Jean Lucas Solano Fortes concluiu com êxito o curso TDD em C# com xUnit, NUnit e Moq. Testes e Frameworks .NET. em 08/08/2024, ministrado por Luis Marques na Udemy. O certificado indica que todo o curso foi concluído, conforme validado pelo aluno. A duração do curso representa a duração total dos vídeos no curso no momento da conclusão mais recente.',
          link: 'https://www.udemy.com/certificate/UC-8719ebf2-bb0b-41d4-addd-d597e7696127/',
        },
        {
          img: cursoSantader,
          nome: 'Curso Ada Santader - JAVA',
          description: 'O certificado acima atesta que Jean Lucas Solano Fortes concluiu com êxito o curso JAVA ada Santader em 20/09/2022.',
          link: 'https://drive.google.com/drive/folders/1yFJZGj9fnJcuO0jHZQscMKbkXoc59Rrj?hl=pt-BR',
        },
        {
          img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-2a538755-b919-45a8-9375-96ac26442796.jpg?v=1723126477000',
          nome: 'Git - Básico ao avançado (2024)',
          description: 'O certificado acima atesta que Jean Lucas Solano Fortes concluiu com êxito o curso Git - Básico ao avançado (2024) em 20/02/2024, ministrado por Rodrigo Santana na Udemy. O certificado indica que todo o curso foi concluído, conforme validado pelo aluno. A duração do curso representa a duração total dos vídeos no curso no momento da conclusão mais recente.',
          link: 'https://www.udemy.com/certificate/UC-2a538755-b919-45a8-9375-96ac26442796/',
        },
        {
          img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-0b05e405-f2b0-4978-9963-4dd92306aa7b.jpg?v=1713723986000',
          nome: 'JavaScript do básico ao avançado (c/ Node.js e projetos)',
          description: 'O certificado acima atesta que Jean Lucas Solano Fortes concluiu com êxito o curso JavaScript do básico ao avançado (c/ Node.js e projetos) em 21/04/2024, ministrado por Matheus Battisti, Hora de Codar na Udemy. O certificado indica que todo o curso foi concluído, conforme validado pelo aluno. A duração do curso representa a duração total dos vídeos no curso no momento da conclusão mais recente.',
          link: 'https://www.udemy.com/certificate/UC-0b05e405-f2b0-4978-9963-4dd92306aa7b/',
        },
      ],
    };
  },
};
</script>