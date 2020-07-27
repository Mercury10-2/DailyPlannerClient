<template>
	<v-app app>
		<v-app-bar app>
			<Bar/>
		</v-app-bar>
		<v-main>
			<v-container fluid>
				<Weather/>
			</v-container>
		</v-main>
		<v-footer app>
		</v-footer>
	</v-app>
</template>

<script>
import Bar from './components/Bar'
import Weather from './components/Weather.vue'
export default {
	name: 'App',
	components: { Bar, Weather }
}
</script>

<style>
/*
* {
	/* not uppercase !important
}*/
</style>
