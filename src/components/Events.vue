
<template>
    <div>
        <Event
                v-for="event in events"
                v-bind:key="event.id"
                v-bind:event="event"
                v-bind:markDone="markDone"
                v-bind:editEvent="editEvent"/>
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
    watch: {
        query: {
            immediate: true,
            handler() {
                this.getEvents()
            }
        }
    },
    methods: {
        getEvents() {
            Service.getEvents(this.query)
                .then(response => {
                    this.events = response.data
                })
        },
        markDone(id) {
            Service.markDone(id, this.query)
                .then(response => {
                    this.events = response.data
                })
        },
        editEvent(id, header, comment, date, month, year, hour, minute) {
            Service.editEvent(id, header, comment, date, month, year, hour, minute, this.query)
                .then(response => {
                    this.events = response.data
                })/*
            const dto = {
                "id": id,
                "header": header,
                "comment": comment,
                "date": date,
                "month": month,
                "year": year,
                "hour": hour,
                "minute": minute,
                "query": this.query,
            }
            Service.editEventJson(JSON.stringify(dto))
                .then(response => {
                    this.events = response.data
                })*/
        }
    },
    created() {
        this.getEvents()
    }
}
</script>

<style>

</style>