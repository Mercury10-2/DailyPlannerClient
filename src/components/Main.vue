
<template>
    <v-container fluid app>
        <div v-if="query == 'weather'">
            <Weather/>
        </div>
        <div v-else-if="query == 'calendar'">
            <Calendar/>
        </div>
        <div v-else>
            <Events v-bind:query="query"/>
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
    props: [ 'query' ]
}
</script>

<style>

</style>