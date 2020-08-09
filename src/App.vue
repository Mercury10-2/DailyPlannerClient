
<template>
	<v-app app>
		<v-app-bar app>
			<Bar v-bind:setQuery="setQuery"/>
		</v-app-bar>
		<v-main>
			<v-container app>
				<Main v-bind:query="query"/>
			</v-container>
		</v-main>
		<v-footer app>
		</v-footer>
	</v-app>
</template>

<script>
import Bar from './components/Bar'
import Main from './components/Main.vue'		//	Погоду равномерно разместить по экрану
export default {
	name: 'App',
	components: { Bar, Main },
	data() {
		return {
			query: 'all-time'
		}
	},
	methods: {
		setQuery(arg) {
			this.query = arg
		}
	}
}
</script>

<style>
* {
	text-transform: none !important;
}
</style>

<!--

<v-icon large>fab fa-pagelines</v-icon>
<v-icon class="mdi-36px">mdi-leaf</v-icon>
eco

-->