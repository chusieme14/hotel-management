<template>
    <div class="grid-main-container">
        <v-container class="grey lighten-5 mb-6" max-height="70vh" style="overflow: auto">
            <v-row no-gutters align="center">
                <v-col
                    v-for="room in rooms"
                    :key="room.id"
                    class="d-flex child-flex"
                    cols="4"
                >
                <v-card class="pa-2 ma-2" outlined tile>
                    <v-card-text>
                        <div>Single Standard</div>
                        <p class="text-h5 text--primary">
                            ROOM {{room.number}}
                        </p>
                        <p><span><v-icon color="orange darken-4" class="mr-2">mdi-archive-settings</v-icon></span> Available </p>
                        <div class="text--primary">
                            Started 2pm
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="success">Check in</v-btn>
                        <v-btn text @click="$emit('view', room)">View</v-btn>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        props:{
            rooms:{}
        },
        data(){
            return{
                
            }
        },
    }
</script>
<style lang="scss" scoped>
    .grid-main-container{
        max-height: 78vh !important;
        overflow:auto !important;
    }
</style>