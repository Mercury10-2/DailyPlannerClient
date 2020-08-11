
<template>
    <v-app-bar fixed color="#6A76AB" dark v-bind:src="background" app>
        <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)" ></v-img>
        </template>
        <v-spacer></v-spacer>
        <v-icon class="mr-4">mdi-leaf</v-icon>
        <v-toolbar-title>Ежедневник</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
<!--
        <v-btn icon>
            <DeleteAll v-bind:delAll="delAll()"/>
        </v-btn>
-->
        <template v-slot:extension>
            <v-tabs align-with-title>
                <v-tab v-on:click="query('all-time')" >Все события</v-tab>
                <v-tab v-on:click="query('actual')">Актуальные</v-tab>
                <v-tab v-on:click="query('closed')">Закрытые</v-tab>
                <v-tab v-on:click="query('calendar')">Календарь</v-tab>
                <v-tab v-on:click="query('weather')">Погода</v-tab>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-tab v-on:click="createEvent()">
                    <CreateEvent v-bind:createEventTrigger="createEventTrigger" v-bind:create="create"/>
                </v-tab>
                <v-spacer></v-spacer>
            </v-tabs>
        </template>
    </v-app-bar>
</template>

<script>
//import DeleteAll from './DeleteAll'
import CreateEvent from './CreateEvent'
export default {
    name: 'Bar',
    components: { CreateEvent/*, DeleteAll*/ },
    props: [ 'setQuery', 'createEventTrigger', 'delAll' ],
    data: () => ({
        background: require('../assets/Water.jpeg'),
        create: true
    }),
    methods: {
        query(arg) {
            this.setQuery(arg)
        }
    }
}
</script>

<style>

</style>