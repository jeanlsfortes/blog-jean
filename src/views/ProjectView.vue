<template>
	<main id="about-page">
		<div class="space-background">
			<video autoplay muted loop>
				<source :src="space" type="video/mp4">
			</video>
		</div>
		<MyProjects />
	</main>
</template>

<script>
import MyProjects from '../components/MyProjects.vue';
import universo from '../assets/universo.mp4';

export default {
	components: {
		MyProjects,
	},
	data() {
		return {
			space: universo,
			show: true,
		};
	},
};
</script>

<style>
.space-background {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: -1;
	display: flex;
	justify-content: center;
	align-items: center;
}

video {
	min-width: 100%;
	min-height: 100%;
	width: auto;
	height: auto;

	/* Ajuste para garantir que o vídeo mantenha a proporção ao redimensionar */
	object-fit: cover;
}

</style>

