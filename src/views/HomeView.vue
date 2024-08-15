<template>
  <!-- topo componentizar -->
  <div class="home-page">
    <div class="page-header" :style="`background-image: url(${imageSelected})`" loading="lazy">
    <div class="content-center">
      <TextEdit text="Olá, eu sou Jean Lucas" :activeButton="false" :fontSize="'5rem'" :collor="'white'"></TextEdit>
      <h1 class="lead px-5 mt-3" :style="{ fontWeight: '500' }">
        Este é meu blog pessoal para mostrar um pouco de meu trabalho como Desenvolvedor Full Stack.
      </h1>
    </div>
  </div>

  <!-- info -->
   <main id="home-page">
      <div class="home-text">
        <h2>Olá mundo</h2>
        <br>
        <P>Sou Jean Lucas Solano Fortes, graduado em Ciências da Computação e desenvolvedor apaixonado por Java, C#, Vue, e React. Tenho uma curiosidade insaciável e adoro resolver problemas complexos, sempre com uma abordagem colaborativa em equipe. Sou entusiasta de novas tecnologias e soluções inovadoras, e estou constantemente em busca de aprimorar minhas habilidades. Minha dedicação é voltada para alcançar os melhores resultados em cada projeto que assumo, utilizando meu conhecimento em tecnologias modernas para criar soluções robustas e eficientes. Estou sempre estudando para me manter atualizado e expandir meu domínio técnico, buscando não apenas atender, mas superar as expectativas em meus objetivos pessoais e profissionais.</P>
      </div>
      <div class="home-text">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <h2>Contato</h2>
        <br>
        <div class="social-icons">
        <!-- Ícone do LinkedIn -->
        <a href="https://www.linkedin.com/in/jean-lucas-solano-fortes-74941a186/" target="_blank" class="social-icon">
            <i class="fab fa-linkedin"></i>
        </a>
        <!-- Ícone do Instagram -->
        <a href="https://www.instagram.com/jeanlucassf/" target="_blank" class="social-icon">
            <i class="fab fa-instagram"></i>
        </a>
        <!-- Ícone do WhatsApp -->
        <a href="https://api.whatsapp.com/send?phone=5565999519418&text=Ol%C3%A1%2C%20Meu%20nome%20%C3%A9%20jean%20lucas" target="_blank" class="social-icon">
            <i class="fab fa-whatsapp"></i>
        </a>
        <!-- Ícone do Gmail -->
        <a href="mailto:jeanlucaseh10@gmail.com" class="social-icon">
            <i class="fas fa-envelope"></i>
        </a>
    </div>
      </div>
   </main>
</div>

</template>

<script>
import { ref } from 'vue'
import carrosImg from '../assets/home/carros.jpg';
import cidadeImg from '../assets/home/cidade.jpg';
import ocasImg from '../assets/home/ocas.jpg';
import sprint from '../assets/home/sprint.jpg';
import TextEdit from '../components/TextEdit.vue';


export default {
  name: 'HomeView',
  components: {
    TextEdit,
  },
  data() {
    return {
      imagens: [cidadeImg, carrosImg, ocasImg, sprint],
      imageSelected: cidadeImg,
      currentImageIndex: ref(0),
      intervalId: null,
    };
  },
  methods: {
    startImageRotation() {
      this.intervalId = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.imagens.length;
        this.imageSelected = this.imagens[this.currentImageIndex]
      }, 3000);
    },
    stopImageRotation() {
      clearInterval(this.intervalId);
    },
  },
  mounted() {
    this.startImageRotation();
  },
  beforeUnmount() {
    this.stopImageRotation();
  },
};
</script>

<style scoped>

.home-text{
  padding: 1rem;
  text-align: center;
  margin-left: 1rem;
}

.home-page {
  width: 100%;
  overflow: auto;
}

.page-header {
  padding: 0;
  position: relative;
  overflow: auto;
  display: flex;
  width: 100%;
  height: 40rem;
  align-items: center;
  background-size: cover;
  transition: background-image 1s ease-in-out;
  background-position: center; 
}

.content-center {
  text-align: center;
  width: -webkit-fill-available;
  color: white;
}

.custom-header {
  font-size: 5rem;
}


.social-icons {
    display: flex;
    gap: 15px;
    justify-content: center;
}

.social-icon {
    font-size: 2rem;
    color: #000; /* cor padrão dos ícones */
    transition: color 0.3s ease;
    position: relative;
    text-decoration: none;
}

.social-icon::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    opacity: 0;
    filter: blur(20px);
    z-index: -1;
    transition: opacity 0.3s ease;
}

.social-icon:hover::before {
    opacity: 1;
}

.social-icon:hover {
    color: #fff; /* Cor branca durante o hover */
    animation: glow 1.5s infinite alternate;
}

@keyframes glow {
    from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #4a3281, 0 0 40px #253aaf, 0 0 50px #0eb9e4, 0 0 60px #e41a1a, 0 0 70px #3d7736;
    }
    to {
        text-shadow: 0 0 20px #fff, 0 0 30px #ff00ff, 0 0 30px #4a3281, 0 0 40px #253aaf, 0 0 50px #0eb9e4, 0 0 60px #e41a1a, 0 0 70px #3d7736;
    }
}


</style>
