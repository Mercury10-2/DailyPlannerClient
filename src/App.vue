
<template>
	<v-app app>
		<v-app-bar app>
			<Bar v-bind:setQuery="setQuery" v-bind:createEventTrigger="createEventTrigger" v-bind:delAll="delAll"/>
		</v-app-bar>
		<v-main>
			<v-container app>
				<Main v-bind:query="query" v-bind:create="create" v-bind:deleteAll="deleteAll"/>
			</v-container>
		</v-main>
		<v-footer app>
		</v-footer>
	</v-app>
</template>

<script>
import Bar from './components/Bar'
import Main from './components/Main.vue'			//	Почистить код от комментариев
export default {
	name: 'App',
	components: { Bar, Main },
	data() {
		return {
			query: 'all-time',
			create: false,						//	Меню события в календаре	Список событий отредактировать
			deleteAll: false
		}
	},
	methods: {
		setQuery(arg) {
			this.query = arg
		},
		createEventTrigger() {
			this.create = true
		},
		delAll() {
			console.log('hi')
			//this.deleteAll = true
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