
<template>
    <v-row>
        <v-dialog v-model="dialog" max-width="300px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon dark>mdi-delete</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <v-container>
                        <v-row class="mt-4">
                            <v-spacer></v-spacer>
                            <p class="font-weight-black">Удалить все события?</p>
                            <v-spacer></v-spacer>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text v-on:click="delAll()">Удалить</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text v-on:click="dialog = false">Отмена</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: 'DeleteAll',
    props: [ 'event', 'del', 'delAll' ],
    data() {
        return {
            dialog: false,
        }
    }
}
</script>

<style>

</style>