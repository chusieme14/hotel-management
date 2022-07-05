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
                        <v-btn block depressed v-else-if="room.status == 2" @click="finishCleaning"> Finish Cleaning </v-btn>
                        <v-btn block depressed v-else @click="$emit('view', room)">View</v-btn>
                    </v-col>
                </v-card-actions>
            </v-card>
        </v-container>
        <confirm-dialog
            :details="confirm_details"
            :show="confirm_dialog"
            @cancel="cancel"
            @confirm="confirm"
        />
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
                },
                confirm_details: {},
                confirm_type: '',
                confirm_dialog: false,
            }
        },
        mounted() {
            this.timer()
        },
        methods: {
            timer() {
                setInterval(() => {
                    let time_rem = ''
                    if(this.room.status == 1) {
                        if(this.$moment().utc().unix() > this.$moment(this.room.check_in.end_date).utc().unix()){
                            this.time.status = "Time"
                            this.time.text = "since"
                            this.time.icon = "mdi-timer"
                            this.time.color = "#D50000"
                            time_rem = (this.$moment().utc().diff(this.$moment(this.room.check_in.end_date).utc(), 'seconds'))
                        }
                        else {
                            this.time.status = "Occupied"
                            this.time.text = "Time Remaining"
                            this.time.icon = "mdi-sleep"
                            this.time.color = "#FF6D00"
                            time_rem = (this.$moment(this.room.check_in.end_date).utc().diff(this.$moment().utc(), 'seconds'))
                        }
                    }
                    else if(this.room.status == 2) {
                        this.time.status = "Cleaning"
                        this.time.text = "Since"
                        this.time.icon = "mdi-broom"
                        this.time.color = "#006064"
                        time_rem = (this.$moment().utc().diff(this.$moment(this.room.updated_at).utc(), 'seconds'))
                    }
                    else{
                        this.time.status = 'available',
                        this.time.text = "available",
                        this.time.icon = 'bed',
                        this.time.color = '#00C853'
                    }
                    this.time.days = this.addLeadZero(Math.floor(time_rem / 86400))
                    this.time.hour = this.addLeadZero(Math.floor((time_rem / 3600) % 24))
                    this.time.minutes =  this.addLeadZero(Math.floor((time_rem / 60) % 60))
                    this.time.seconds =  this.addLeadZero(Math.floor((time_rem) % 60))
                }, 1000)
            },
            addLeadZero(num) {
                let string = String(num)
                if(string.length > 1) {
                    return string
                } else {
                    return "0" + string
                }
            },
            finishCleaning() {
                this.confirm_details.title = 'Finish Cleaning'
                this.confirm_details.message = 'The room will be available after this. Continue?'
                this.confirm_type = 'cleaning'
                this.confirm_dialog = true
            },
            cancel() {
                this.confirm_details.title = ''
                this.confirm_details.message = ``
                this.confirm_type = ''
                this.confirm_dialog = false
            },
            confirm() {
                if(this.confirm_type == 'cleaning')
                    this.$emit('toggle', 0, this.room.id)

                this.cancel()
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