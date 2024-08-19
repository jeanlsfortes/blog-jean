<template>
  <div class="card">
      <ProfessionalHistory />
	</div>
</template>

<script>
import ProfessionalHistory from './ProfessionalHistory.vue';

export default {
  name: 'AboutMe',
  components: {
    ProfessionalHistory,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.card {
  margin: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.664), 0 0 8px 0 rgba(0, 0, 0, 0.616);
  transition: 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.1); 
  text-align: center;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 0 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
</style>