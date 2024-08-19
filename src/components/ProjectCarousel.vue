<template>
  <div class="project-carousel">
    <div class="project-menu">
      <h2>Projetos</h2>
      <br>
      <ul>
        <li v-for="(project, index) in projects" :key="project.titulo">
          <a @click.prevent="goToProject(index)" href="#">
            {{ project.titulo }}
          </a>
        </li>
      </ul>
    </div>
    
    <div v-if="currentProject">
      <img :src="currentProject.imagem" alt="Imagem do projeto" class="project-image" />
      <h2>{{ currentProject.titulo }}</h2>
      <h4>{{ currentProject.anoCriacao }}</h4>
      <p style="text-align: justify;" v-html="currentProject.descricao"></p> 
      <div class="project-links">
        <a v-for="link in currentProject.links" :key="link.text" :href="link.link" target="_blank">
          {{ link.text }}
        </a>
      </div>
    </div>
    
    <div class="buttons">
      <button @click="prevProject" :disabled="currentIndex === 0">Anterior</button>
      <button @click="nextProject" :disabled="currentIndex === projects.length - 1">Próximo</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    currentProject() {
      return this.projects[this.currentIndex];
    },
  },
  methods: {
    nextProject() {
      if (this.currentIndex < this.projects.length - 1) {
        this.currentIndex++;
      }
    },
    prevProject() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    goToProject(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.project-carousel {
  text-align: center;
  margin: 20px;
}

.project-menu {
  margin-bottom: 20px;
  text-align: left;
}

.project-menu ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.project-menu li {
  margin-bottom: 5px;
}

.project-menu a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.project-menu a:hover {
  background-color: var(--light);
  color: white;
}

.project-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}

.project-links a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.project-links a:hover {
  color: var(--light);
}

.buttons {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: var(--light);
  color:var(--text-color);
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--text-color);
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
