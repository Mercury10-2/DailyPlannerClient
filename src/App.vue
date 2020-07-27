<template>
	<v-app>
		<v-navigation-drawer app>
		</v-navigation-drawer>
		<v-app-bar app>
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
import Weather from './components/Weather.vue'
export default {
	name: 'App',
	components: { Weather }
}
</script>

<style>

</style>
