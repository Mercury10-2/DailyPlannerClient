
<template>
    <v-row no-gutters>
        {{ event }}
        <v-col>
            <div>
                <p>Hi</p>
                <v-icon class="material-icons">done</v-icon>
            </div>
            <div>
                <p>Bye</p>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Event',
    props: [ 'event' ],
}
</script>

<style>

</style>