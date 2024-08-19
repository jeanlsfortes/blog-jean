<template>
  <div class="certificate">
    <img :src="certificado.img" class="certificate-avatar">
    <div class="certificate-content">
      <h2>
        {{ certificado.nome }}
      </h2>
      <br>
      <br>
      <p>
        {{ certificado.description }}
      </p>
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
    margin: 1rem;
}


.certificate-content {
  flex: 1; 
}

.certificate-content h2,
.certificate-content h3 {
  margin: 0;
}

.certificate a {
  margin-left: auto;
  margin-top: auto;
  text-decoration: none;
  color: var(--color-primary-6);
  font-weight: bold;
}
</style>
