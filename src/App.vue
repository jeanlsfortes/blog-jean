<template>
	<div class="app">
		<!-- Sidebar -->
		<AppSidebar />
		<!-- Content -->
		<router-view />
	</div>
</template>

<script setup>
import AppSidebar from './components/AppSidebar.vue'
</script>

<style lang="scss">

.theme-light {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
  --boryColor: #0c0c0c;
  --text-color: #1b1b1b;
}

.theme-dark {
  --primary: rgb(155, 33, 54);
  --primary-alt: #a93e3e;
  --grey: #702626;
  --dark: #060708;
  --dark-alt: #08090a;
  --light: #8b6262;
  --sidebar-width: 300px;
  --boryColor: #f1f5f9;
  --text-color: #ffffff;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
  	color: var(--text-color);
}

/* CSS */
button {
  background-color: #111827;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: .50rem 1.2rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
}

button:hover {
  background-color: #374151;
}

button:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

@media (min-width: 768px) {
  button {
    padding: .75rem 1.5rem;
  }
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>