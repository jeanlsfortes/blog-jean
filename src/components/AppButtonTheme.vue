<template>
	<button @click="toggleTheme" class="button">
		<span class="material-icons">{{ isDarkTheme ? 'brightness_2' : 'wb_sunny' }}</span>
		<span class="text">{{ isDarkTheme ? 'Dark Mode' : 'Light Mode' }}</span>
	</button>
</template>
  
  <script setup>
  import { ref,onMounted } from 'vue'
  
  const currentTheme = ref('light')
  const isDarkTheme = ref(false)

  const toggleTheme = () => {
    isDarkTheme.value = !isDarkTheme.value
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
    document.documentElement.className = `theme-${currentTheme.value}`
  }
  
  // Defina o tema padrão
  onMounted(() => {
    document.documentElement.className = `theme-${currentTheme.value}`
  })

</script>


<style scoped>
.button {
	display: flex;
	align-items: center;
	text-decoration: none;

	transition: 0.2s ease-in-out;
	padding: 0.5rem 1rem;

	.material-icons {
		font-size: 2rem;
		color: var(--light);
		transition: 0.2s ease-in-out;
	}
	.text {
		color: var(--light);
		transition: 0.2s ease-in-out;
		padding: inherit;
	}

	&:hover {
		background-color: var(--dark-alt);

		.material-icons, .text {
			color: var(--primary);
		}
	}

	&.router-link-exact-active {
		background-color: var(--dark-alt);
		border-right: 5px solid var(--primary);

		.material-icons, .text {
			color: var(--primary);
		}
	}
}
</style>