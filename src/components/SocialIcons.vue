<template>
    <div class="social-icons">
      <a
        v-for="icon in socialIcons"
        :key="icon.name"
        :href="icon.url"
        target="_blank"
        class="social-icon"
      >
        <i :class="icon.iconClass"></i>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        socialIcons: [
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jean-lucas-solano-fortes-74941a186/',
            iconClass: 'fab fa-linkedin'
          },
          {
            name: 'Instagram',
            url: 'https://www.instagram.com/jeanlucassf/',
            iconClass: 'fab fa-instagram'
          },
          {
            name: 'WhatsApp',
            url: 'https://api.whatsapp.com/send?phone=5565999519418&text=Ol%C3%A1%2C%20Gostaria%20de%20falar%20com%20Jean%20Lucas.',
            iconClass: 'fab fa-whatsapp'
          },
          {
            name: 'Email',
            url: 'mailto:jeanlucaseh10@gmail.com',
            iconClass: 'fas fa-envelope'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .social-icons {
    display: flex;
    gap: 1rem;
  }
  
  .social-icon i {
    font-size: 2rem;
    color: var(--text-color);
    transition: color 0.3s, text-shadow 0.3s;
  }
  
  /* Brilho automático */
  .social-icon i:hover {
    color: var(--primary-alt);
    text-shadow: 0 0 5px var(--primary-alt), 0 0 10px var(--primary-alt), 0 0 15px var(--primary-alt), 0 0 20px var(--primary-alt);
  }
  
  .social-icon i {
    animation: glowing 2s infinite;
  }
  
  @keyframes glowing {
    0% {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px var(--primary-alt), 0 0 20px var(--primary-alt);
    }
    50% {
      text-shadow: 0 0 10px var(--primary-alt), 0 0 20px var(--primary-alt), 0 0 30px var(--primary-alt), 0 0 40px var(--primary-alt);
    }
    100% {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px var(--primary-alt), 0 0 20px var(--primary-alt);
    }
  }
  </style>
  