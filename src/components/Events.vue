
<template>
    <div>
        <Event v-for="event in events" v-bind:key="event.id"/>
    </div>
</template>

<script>
import Service from '../service/service.js'
import Event from './Event'
export default {
    name: 'Events',
    props: [ 'query' ],
    components: { Event },
    data() {
        return {
            events: []
        }
    },
    methods: {
        getEvents() {
            Service.getEvents()
                .then(response => {
                    this.events = response.data
                })
        }
    },
    created() {
        this.getEvents()
    }
}
</script>

<style>

</style>