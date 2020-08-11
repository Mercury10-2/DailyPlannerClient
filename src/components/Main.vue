
<template>
    <v-container fluid app>
        <div v-if="query == 'weather'">
            <Weather/>
        </div>
        <div v-else-if="query == 'calendar'">
            <Calendar/>
        </div>
        <div v-else>
            <Events v-bind:query="query" v-bind:create="create" v-bind:deleteAll="deleteAll"/>
        </div>
    </v-container>
</template>

<script>
import Events from './Events'
import Calendar from './Calendar'
import Weather from './Weather'
export default {
    name: 'Main',
    components: { Events, Calendar, Weather },
    props: [ 'query', 'create', 'deleteAll' ]
}
</script>

<style>

</style>