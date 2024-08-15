<template>
	<!-- https://br.vuejs.org/v2/guide/transitions.html#Classes-de-Transicao-Personalizadas -->
	<main id="about-page">
		<div class="my-history">
			<transition 
                v-on:before-enter="beforeEnter" 
                v-on:enter="enter" 
                v-on:leave="leave" 
                v-bind:css="false">
				<h1 :style="{ fontSize: fontSize, color: collor }" class="shining-text" v-if="show">{{ text }}</h1>
			</transition>
			<button v-if="activeButton" class="button-history" @click="stopAnimation">{{ animation ? 'Parar' : 'Ativar' }} Animação</button>
		</div>
	</main>
</template>

<script>
import Velocity from 'velocity-animate';

export default {
	name: 'AboutView',
    props:{
        text:{
            type: String,
            required: true,
        },
        activeButton:{
            type: Boolean,
            required: true,
        },
        fontSize:{
            type: String,
            required: true,
        },
        collor:{
            type: String,
            required: true,
        }
    },  
	data() {
		return {
			show: true,
			intervalId: null,
			animation: true,
		}
	},
	methods: {
		beforeEnter(el) {
			el.style.opacity = 0;
			el.style.transformOrigin = 'left';
		},
		enter(el, done) {
			Velocity(el, { opacity: 1 }, { duration: 300, complete: done });
		},
		leave(el, done) {
			Velocity(el, { rotateZ: '10deg' }, { loop: 2 });
			Velocity(el, {
				rotateZ: '45deg',
				translateY: '30px',
				translateX: '30px',
				opacity: 0
			}, { complete: done });
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

<style scoped>
.shining-text {
  /* Define a cor inicial e o tamanho do texto */
  color: inherit;
  font-size: inherit;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
  animation: shine 2s infinite alternate;
}

/* Animação para criar o efeito de brilho */
@keyframes shine {
  from {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
  }
  to {
    text-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6);
  }
}
</style>
