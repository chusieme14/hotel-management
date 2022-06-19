<template>
    <v-card elevation="1" height="90vh" max-height="90vh" class="pa-2">
        <v-card-text>
            <table-header
                :data="data"
                :hide="['filter', 'search']"
            >
            </table-header>
            <Grid/>
        </v-card-text>
    </v-card>
</template>

<script>
import Statistics from "./statistics.vue" 
import Grid from "./view/grid.vue" 
export default {
    data() {
        return {
            data: {
                title: "Rooms"
            }
        }
    },
    components: {
        Statistics,
        Grid
    }
}
</script>