<template>
    <div class="grid-main-container">
        <v-container class="grey lighten-5 mb-6" max-height="70vh" style="overflow: auto">
            <v-card class="pa-2 ma-2" outlined tile align="center">
                <v-card-text>
                    <div>{{room.room_type.type}}</div>
                    <p class="text-h5 text--primary">
                        ROOM {{room.number}}
                    </p>
                    <div class="text-h6 text--primary">
                        <v-icon large :color="time.color"> {{time.icon}} </v-icon>  <br>  
                        {{time.status}}
                    </div>
                    <div class="mt-2">
                        {{time.text}}
                        <div class="text-h5 text--primary">
                            {{`${time.days}:${time.hour}:${time.minutes}:${time.seconds}`}}
                        </div>
                    </div>
                </v-card-text>
                <v-card-actions align="center">
                    <v-col>
                        <v-btn block depressed v-if="room.status == 0" @click="$emit('checkin', room)">Check in</v-btn>
                        <v-btn block depressed v-else @click="$emit('view', room)">View</v-btn>
                    </v-col>
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
                time: {
                    days: '00',
                    hour: '00',
                    minutes: '00',
                    seconds: '00',
                    status: 'available',
                    text: "available",
                    icon: 'bed',
                    color: '#00C853'
                }
            }
        },
        mounted() {
            this.timer()
        },
        methods: {
            timer() {
                setInterval(() => {

                    if(this.room.status == 1) {
                        let time_rem = (this.$moment(this.room.check_in.end_date).diff(this.$moment(), 'seconds'))
                        if(this.$moment().unix() > this.$moment(this.room.check_in.end_date).unix()){
                            this.time.status = "Time"
                            this.time.text = "since"
                            this.time.icon = "mdi-timer"
                            this.time.color = "#D50000"
                            time_rem = (this.$moment().diff(this.$moment(this.room.check_in.end_date), 'seconds'))
                        }
                        else {
                            this.time.status = "Occupied"
                            this.time.text = "Time Remaining"
                            this.time.icon = "mdi-sleep"
                            this.time.color = "#FF6D00"
                            time_rem = (this.$moment(this.room.check_in.end_date).diff(this.$moment(), 'seconds'))
                        }
                        this.time.days = this.addLeadZero(Math.floor(time_rem / 86400))
                        this.time.hour = this.addLeadZero(Math.floor((time_rem / 3600) % 24))
                        this.time.minutes =  this.addLeadZero(Math.floor((time_rem / 60) % 60))
                        this.time.seconds =  this.addLeadZero(Math.floor((time_rem) % 60))
                    }
                }, 1000)
            },
            addLeadZero(num) {
                let string = String(num)
                if(string.length > 1) {
                    return string
                } else {
                    return "0" + string
                }
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