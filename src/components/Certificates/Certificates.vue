<template>
  <div class="certificate">
    <img :src="certificado.img" class="certificate-avatar">
    <div class="certificate-content">
      <h2 class="certificate-user-name">
        {{ certificado.nome }}
      </h2>
      <h3>
        {{ certificado.description }}
      </h3>
    </div>
    <a :href="certificado.link" target="_blank" rel="noopener noreferrer">Ver Certificado</a>
  </div>
</template>

<script>
export default {
  props: {
    certificado: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.certificate {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: var(--color-neutral-0);
  border-radius: 1rem;
  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-top: 1.2rem;
}


.certificate-avatar {
    width: 25rem;
    height: 20rem;;
    object-fit: cover;
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
}


.certificate-content {
  flex: 1; 
}

.certificate-content h2,
.certificate-content h3 {
  margin: 0;
}

.certificate a {
  margin-left: auto; /* Empurra o link para a direita */
  margin-top: auto;
  text-decoration: none;
  color: var(--color-primary-6);
  font-weight: bold;
}
</style>
