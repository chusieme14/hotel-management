<template>
<div>
    <v-dialog v-if="dialog" v-model="dialog" persistent width="1200">
        <v-form ref="form" lazy-validation>
        <v-card>
            <v-card-title>CHECK IN FOR ROOM {{payload.room_number}}</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <v-container>
                            <v-row>
                                <v-col class="col-text-field" cols="12" sm="12">
                                    GUEST'S INFOMATION
                                </v-col>
                                <v-col class="col-text-field" cols="12" sm="12">
                                    <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                        <div class="mr-2">
                                            <label>Guest name</label>
                                            <v-text-field
                                                v-model="payload.room_guest_name"
                                                :rules="[() => !!payload.room_guest_name ||  '']"
                                                filled
                                                dense
                                            ></v-text-field>
                                        </div>
                                    </v-col>
                                    <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                        <div class="mr-2">
                                            <label>Guest's contact number</label>
                                            <v-text-field
                                                v-model="payload.room_guest_contact"
                                                filled
                                                dense
                                            ></v-text-field>
                                        </div>
                                    </v-col>
                                    <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                        <div class="mr-2">
                                            <label>Guest's address</label>
                                            <v-textarea
                                                v-model="payload.room_guest_address"
                                                filled
                                                dense
                                            ></v-textarea>
                                        </div>
                                    </v-col>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                    <v-col cols="6">
                        <v-container>
                            <v-row>
                                <v-col class="col-text-field" cols="12" sm="12">
                                    ROOOM INFOMATION
                                </v-col>
                                <!-- {{validate}} -->
                                <v-col class="col-text-field" cols="12" sm="12">
                                    <div>
                                        <label>Type</label>
                                        <v-text-field
                                            v-model="payload.room_type"
                                            readonly
                                            filled
                                            dense
                                        ></v-text-field>
                                    </div>
                                    <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                        <div class="mr-2">
                                            <label>Room rate</label>
                                            <v-text-field
                                                :value="_formatNumber(payload.room_rate)"
                                                readonly
                                                filled
                                                dense
                                            ></v-text-field>
                                        </div>
                                        <div>
                                            <label>Extra Hour Rate</label>
                                            <v-text-field
                                                :value="_formatNumber(payload.room_extra_hour)"
                                                readonly
                                                filled
                                                dense
                                            ></v-text-field>
                                        </div>
                                    </v-col>
                                    <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                        <div class="mr-2">
                                            <label>Extra Person Rate</label>
                                            <v-text-field
                                                :value="_formatNumber(payload.room_extra_person)"
                                                readonly
                                                filled
                                                dense
                                            ></v-text-field>
                                        </div>
                                        <div class="mr-2">
                                            <label>Enter Extra Persons</label>
                                            <v-text-field
                                                v-model="payload.room_guest_extra_person"
                                                type="number"
                                                filled
                                                dense
                                            ></v-text-field>
                                        </div>
                                    </v-col>
                                    <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                        <div class="mr-2">
                                            <!-- <label>Start Date</label> -->
                                            <!-- <v-text-field
                                                v-model="payload.room_guest_start"
                                                filled
                                                dense
                                                hint="Enter only inital time render"
                                                persistent-hint
                                            ></v-text-field> -->
                                            <v-dialog 
                                                v-model="date_start"
                                                ref="dialog"
                                                persistent
                                                width="290px"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <label>Start Date</label>
                                                    <v-text-field
                                                        v-model="payload.room_guest_start"
                                                        filled
                                                        dense
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        :rules="[() => $moment(payload.room_guest_end).unix() > $moment(payload.room_guest_start).unix() ||  'start date must be less than end date']"
                                                    ></v-text-field>
                                                </template>
                                                <v-time-picker
                                                    v-if="time_start_picker"
                                                    format="ampm"
                                                    v-model="start_time.time"
                                                >
                                                    <v-btn text color="primary" icon @click="time_start_picker = false">
                                                        <v-icon> mdi-calendar </v-icon>
                                                    </v-btn>
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="primary" @click="date_start = false">
                                                        cancel
                                                    </v-btn>
                                                    <v-btn @click="saveDateStart()" text color="primary">
                                                        OK
                                                    </v-btn>
                                                </v-time-picker>
                                                <v-date-picker
                                                    v-else
                                                    v-model="start_time.date"
                                                    scrollable
                                                >
                                                    <v-btn text color="primary" icon @click="time_start_picker = true">
                                                        <v-icon> mdi-timer </v-icon>
                                                    </v-btn>
                                                    <v-spacer></v-spacer>
                                                     <v-btn text color="primary" @click="date_start = false">
                                                        cancel
                                                    </v-btn>
                                                    <v-btn @click="saveDateStart()" text color="primary">
                                                        OK
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-dialog>
                                        </div>
                                        <div class="mr-2">
                                            <v-dialog 
                                                v-model="date_end"
                                                ref="dialog"
                                                persistent
                                                width="290px"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <label>End Date</label>
                                                    <v-text-field
                                                        v-model="payload.room_guest_end"
                                                        filled
                                                        dense
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        :rules="[() => $moment(payload.room_guest_end).unix() > $moment(payload.room_guest_start).unix() ||  'end date must be greater than start date']"
                                                    ></v-text-field>
                                                </template>
                                                <v-time-picker
                                                    v-if="time_end_picker"
                                                    format="ampm"
                                                    v-model="end_time.time"
                                                >
                                                    <v-btn text color="primary" icon @click="time_end_picker = false">
                                                        <v-icon> mdi-calendar </v-icon>
                                                    </v-btn>
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="primary" @click="date_end = false">
                                                        cancel
                                                    </v-btn>
                                                    <v-btn @click="saveDateEnd()" text color="primary">
                                                        OK
                                                    </v-btn>
                                                </v-time-picker>
                                                <v-date-picker
                                                    v-else
                                                    v-model="end_time.date"
                                                    scrollable
                                                    :min="payload.room_guest_start"
                                                >
                                                    <v-btn text color="primary" icon @click="time_end_picker = true">
                                                        <v-icon> mdi-timer </v-icon>
                                                    </v-btn>
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="primary" @click="date_end = false">
                                                        cancel
                                                    </v-btn>
                                                    <v-btn @click="saveDateEnd()" text color="primary">
                                                        OK
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-dialog>
                                        </div>
                                    </v-col>
                                    <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                        <div class="mr-2">
                                            <label>Total Days checked in</label>
                                            <v-text-field
                                                :value="payload.room_total_days"
                                                filled
                                                dense
                                                readonly
                                            ></v-text-field>
                                        </div>
                                        <div class="mr-2">
                                            <label>Initial total</label>
                                            <v-text-field
                                                :value="_formatNumber(totalDays * payload.room_rate)"
                                                filled
                                                dense
                                                readonly
                                            ></v-text-field>
                                        </div>
                                    </v-col>
                                    <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                        <div class="mr-2">
                                            <label>Extra person total</label>
                                            <v-text-field
                                                :value="computeAdditional"
                                                filled
                                                dense
                                                readonly
                                            ></v-text-field>
                                        </div>
                                        <div class="mr-2">
                                            <label>Total Bill</label>
                                            <v-text-field
                                                :value="_formatNumber((totalDays * payload.room_rate) + computeAdditional)"
                                                filled
                                                dense
                                                readonly
                                            ></v-text-field>
                                        </div>
                                    </v-col>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-col class="col-text-field" align="end">
                    <v-btn color="error" @click="$emit('close')">Cancel</v-btn>
                    <v-btn color="success" @click="save" class="ml-2">Check In</v-btn>
                </v-col>
            </v-card-actions>
        </v-card>
        </v-form>
    </v-dialog>
</div>
</template>

<script>
export default {
    props: {
        dialog: {},
        payload: {},
        selectedRoom:{}
    },
    data() {
        return {
            date_end: false,
            date_start: false,
            time_end_picker: false,
            time_start_picker: false,
            start_time: {},
            end_time: {},
            receipt_dialog: true
        }
    },
    methods:{
        save(){
            if(!this.$refs.form.validate()) return;
            this.$emit('checkin')
        },
        saveDateEnd() {
            this.payload.room_guest_end = this.$moment(`${this.end_time.date} ${this.end_time.time}`).format('YYYY-MM-DD h:mm a')
            this.time_end_picker = false
            this.date_end = false
        },
        saveDateStart() {
            this.payload.room_guest_start = this.$moment(`${this.start_time.date} ${this.start_time.time}`).format('YYYY-MM-DD h:mm a')
            this.time_start_picker = false
            this.date_start = false
        }
    },
    computed:{
        computeAdditional(){
            if(this.selectedRoom.room_type)
                return this.payload.total_ads = this.selectedRoom.room_type.extra_person_rate * this.payload.room_guest_extra_person
            
            return 0
        },
        totalDays() {
            let start = this.$moment(this.payload.room_guest_start).unix()
            let end = this.$moment(this.payload.room_guest_end).unix()
            let totalDays = (end - start)/86400
            if(totalDays > 0 && totalDays < 1)
                return  this.payload.room_total_days = 1

            return this.payload.room_total_days = Math.round(totalDays)
        }
    },
    watch: {
        dialog: {
            handler(val) {
                if(val) {
                    this.start_time.time = this.$moment(this.payload.room_guest_start).format('h:mm')
                    this.end_time.time = this.$moment(this.payload.room_guest_end).format('h:mm')
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .class-total-main{
        display: flex;
        justify-content: center;
        div{
            display: flex;
            justify-content: center;
            flex-direction: column;
            letter-spacing: 1.5px;    

            h4{
                font-size: 24px !important;
                margin-bottom: 5px !important;
            }
        }
    }
</style>