<template>
	<!-- https://br.vuejs.org/v2/guide/transitions.html#Classes-de-Transicao-Personalizadas -->
	<main id="about-page">
		<div class="my-history">
			<transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
				<h1 v-if="show">Minhas Experiências</h1>
			</transition>
			<button class="button-history" @click="stopAnimation">{{ animation ? 'Parar' : 'Ativar' }} Parar Animacação</button>
		</div>

		<section class="sobre-mim">
			<AboutMe></AboutMe>
		</section>
	</main>
</template>

<script>
import AboutMe from '../components/AboutMe/AboutMe.vue'
import Velocity from 'velocity-animate';

export default {
	name: 'AboutView',
	components: {
		AboutMe,
	},
	data() {
		return {
			show: true,
			intervalId: null,
			animation: true,
		}
	},
	methods: {
		beforeEnter: function (el) {
			el.style.opacity = 0
			el.style.transformOrigin = 'left'
		},
		enter: function (el, done) {
			Velocity(el, { opacity: 1, fontSize: '3.5rem' }, { duration: 300 })
			Velocity(el, { fontSize: '3.5rem' }, { complete: done })
		},
		leave: function (el, done) {
			Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
			Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
			Velocity(el, {
				rotateZ: '45deg',
				translateY: '30px',
				translateX: '30px',
				opacity: 0
			}, { complete: done })
		},
		startImageRotation() {
			this.intervalId = setInterval(() => {
				this.show = !this.show;
			}, 4000);
		},
		stopImageRotation() {
			clearInterval(this.intervalId);
		},
		stopAnimation() {
			this.animation = !this.animation;
			if(this.animation) {
				this.startImageRotation();
			} else {
				this.stopImageRotation();
				this.show = true;
			}
		}
	},
	mounted() {
		this.startImageRotation();
	},
	beforeUnmount() {
		this.stopImageRotation();
	},
};
</script>

