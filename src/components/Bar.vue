<!-- menu - scale transition, rounded -->
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
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="yellow" v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in menuList" v-bind:key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <template v-slot:extension>
            <v-tabs align-with-title>
                <v-tab v-on:click="query('all-time')" >Все события</v-tab>
                <v-tab v-on:click="query('actual')">Актуальные</v-tab>
                <v-tab v-on:click="query('closed')">Закрытые</v-tab>
                <v-tab v-on:click="query('calendar')">Календарь</v-tab>
                <v-tab v-on:click="query('weather')">Погода</v-tab>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-tab v-on:click="createEvent()">Создать событие</v-tab>
                <v-spacer></v-spacer>
            </v-tabs>
        </template>
    </v-app-bar>
</template>

<script>
export default {
    name: 'Bar',
    props: [ 'setQuery' ],
    data: () => ({
        background: require('../assets/Water.jpeg'),
        menuList: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
        ],
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