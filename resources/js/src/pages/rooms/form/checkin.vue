<template>
    <v-dialog v-model="dialog" persistent width="1000">
        <v-card>
            <v-card-title>CHECK IN FOR ROOM {{payload.room_number}}</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="7">
                        <v-form ref="validate" lazy-validation>
                            <v-container>
                                <v-row>
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
                                                    v-model="payload.room_rate"
                                                    readonly
                                                    filled
                                                    dense
                                                ></v-text-field>
                                            </div>
                                            <div>
                                                <label>Extra Hour Rate</label>
                                                <v-text-field
                                                    v-model="payload.room_extra_hour"
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
                                                    v-model="payload.room_extra_person"
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
                                                    v-model="dialog_start"
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
                                                            hint="Enter only inital time render"
                                                            persistent-hint
                                                        ></v-text-field>
                                                    </template>
                                                    <v-date-picker
                                                        v-model="payload.room_guest_start"
                                                        scrollable
                                                    >
                                                        <v-spacer></v-spacer>
                                                        <v-btn text color="primary" @click="dialog_start = false">
                                                            Cancel
                                                        </v-btn>
                                                        <v-btn @click="dialog_start = false" text color="primary">
                                                            OK
                                                        </v-btn>
                                                    </v-date-picker>
                                                </v-dialog>
                                            </div>
                                            <div class="mr-2">
                                                <v-dialog 
                                                    v-model="date_dialog"
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
                                                            hint="Guest can extend hours after checkin"
                                                            persistent-hint
                                                        ></v-text-field>
                                                    </template>
                                                    <v-date-picker
                                                        v-model="payload.room_guest_end"
                                                        scrollable
                                                        :min="payload.room_guest_start"
                                                    >
                                                        <v-spacer></v-spacer>
                                                        <v-btn text color="primary" @click="date_dialog = false">
                                                            Cancel
                                                        </v-btn>
                                                        <v-btn @click="date_dialog = false" text color="primary">
                                                            OK
                                                        </v-btn>
                                                    </v-date-picker>
                                                </v-dialog>
                                            </div>
                                        </v-col>
                                        <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                            <div class="mr-2">
                                                <label>Guest name</label>
                                                <v-text-field
                                                    v-model="payload.room_guest_name"
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
                                                <v-text-field
                                                    v-model="payload.room_guest_address"
                                                    filled
                                                    dense
                                                ></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                    </v-col>
                    <v-col class="class-total-main" cols="5">
                        <div>
                            <h4>Room rate: {{computeRoomRate}}</h4>
                            <h4>Additional Charges: {{computeAdditional}}</h4>
                            <h4>Total Bill: {{payload.total_room_rate?payload.total_room_rate + payload.total_ads:0}}</h4>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-col class="col-text-field" align="end">
                    <v-btn color="error" @click="$emit('close')">Cancel</v-btn>
                    <v-btn color="success" @click="save" class="ml-2">Save</v-btn>
                </v-col>
            </v-card-actions>
        </v-card>
    </v-dialog>
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
            date_dialog: false,
            dialog_start: false
        }
    },
    methods:{
        save(){
            this.$emit('checkin')
        }
    },
    computed:{
        computeRoomRate(){
            if(this.payload.room_guest_end){
                return this.payload.total_room_rate = parseInt(this.selectedRoom.room_type.price) * 
                (this.$moment(this.payload.room_guest_end, "YYYY-MM-DD").diff(this.payload.room_guest_start, 'days'))
            }
            return 0
        },
        computeAdditional(){
            return this.payload.total_ads = this.selectedRoom.room_type.extra_person_rate * this.payload.room_guest_extra_person
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