<template>
    <div class="grid-main-container">
        <v-container class="grey lighten-5 mb-6" max-height="70vh" style="overflow: auto">
            <v-card class="pa-2 ma-2" outlined tile>
                <v-card-text>
                    <div>{{room.room_type.type}}</div>
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
                    <v-btn v-if="room.status == 0" color="success" @click="$emit('checkin', room)">Check in</v-btn>
                    <v-btn v-else text @click="$emit('view', room)">View</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </div>
</template>
<script>
    export default {
        props:{
            room:{}
        },
        data(){
            return{
                
            }
        },
        methods: {
            timer() {
                setInterval(() => {
                    let now = new Date()
                }, 1000)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .grid-main-container{
        max-height: 78vh !important;
        overflow:auto !important;
    }
</style>