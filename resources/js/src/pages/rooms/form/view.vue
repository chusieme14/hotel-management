<template>
    <div  v-if="dialog">
        <v-dialog v-model="dialog" max-width="600" persistent>      
            <v-card>
                <v-card-title>
                    <div>ROOM {{selectedRoom.number}}</div>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col class="col-text-field" cols="12" sm="12">
                                <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                    <div class="mr-2">
                                        <label>Guest name</label>
                                        <v-text-field
                                            :value="selectedRoom.check_in.client_name"
                                            filled
                                            dense
                                            readonly
                                        ></v-text-field>
                                    </div>
                                </v-col>
                                <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                    <div class="mr-2">
                                        <label>Room Type</label>
                                        <v-text-field
                                            :value="selectedRoom.room_type.type"
                                            filled
                                            dense
                                            readonly
                                        ></v-text-field>
                                    </div>
                                </v-col>
                                <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                    <div class="mr-2">
                                        <label>Room Rate</label>
                                        <v-text-field
                                            :value="_formatNumber(selectedRoom.room_type.price)"
                                            filled
                                            dense
                                            readonly
                                        ></v-text-field>
                                    </div>
                                    <div class="mr-2">
                                        <label>Extra Hour Rate</label>
                                        <v-text-field
                                            :value="_formatNumber(selectedRoom.room_type.extra_hour_rate)"
                                            filled
                                            dense
                                            readonly
                                        ></v-text-field>
                                    </div>
                                    <div class="mr-2">
                                        <label>Extra Person Rate</label>
                                        <v-text-field
                                            :value="_formatNumber(selectedRoom.room_type.extra_person_rate)"
                                            readonly
                                            filled
                                            dense
                                        ></v-text-field>
                                    </div>
                                </v-col>
                                <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                   <div class="mr-2">
                                        <label>Initial Total</label>
                                        <v-text-field
                                            :value="$moment(selectedRoom.check_in.start_date).format('YYYY-MM-DD hh:mm a')"
                                            readonly
                                            filled
                                            dense
                                        ></v-text-field>
                                    </div>
                                    <div class="mr-2">
                                        <label>Total Bill</label>
                                        <v-text-field
                                            :value="$moment(selectedRoom.check_in.end_date).format('YYYY-MM-DD hh:mm a')"
                                            readonly
                                            filled
                                            dense
                                        ></v-text-field>
                                    </div>
                                </v-col>
                                <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                    <v-col class="col-text-field" cols="12" sm="12">
                                        BILLING INFORMATION
                                    </v-col>
                                   
                                </v-col>
                                <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                    <div class="mr-2">
                                        <label>Total Days Checkin</label>
                                        <v-text-field
                                            :value="totalDays"
                                            readonly
                                            filled
                                            dense
                                        ></v-text-field>
                                    </div>
                                   <div class="mr-2">
                                        <label>Extra Persons</label>
                                        <v-text-field
                                            :value="selectedRoom.check_in.extra_persons ? selectedRoom.check_in.extra_persons : 0"
                                            readonly
                                            filled
                                            dense
                                        ></v-text-field>
                                    </div>
                                    <div class="mr-2">
                                        <label>Extra Hours</label>
                                        <v-text-field
                                            :value="selectedRoom.check_in.extra_hours ? selectedRoom.check_in.extra_hours : 0"
                                            readonly
                                            filled
                                            dense
                                        ></v-text-field>
                                    </div>
                                </v-col>
                                <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                   <div class="mr-2">
                                        <label>Extra Person Total</label>
                                        <v-text-field
                                            :value="_formatNumber(selectedRoom.check_in.extra_persons * selectedRoom.room_type.extra_person_rate)"
                                            readonly
                                            filled
                                            dense
                                        ></v-text-field>
                                    </div>
                                    <div class="mr-2">
                                        <label>Extra Hours Total</label>
                                        <v-text-field
                                            :value="_formatNumber(selectedRoom.check_in.extra_hours * selectedRoom.room_type.extra_hour_rate)"
                                            readonly
                                            filled
                                            dense
                                        ></v-text-field>
                                    </div>
                                </v-col>
                                <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                   <div class="mr-2">
                                        <label>Initial Total</label>
                                        <v-text-field
                                            :value="_formatNumber(selectedRoom.check_in.regular_bill)"
                                            readonly
                                            filled
                                            dense
                                        ></v-text-field>
                                    </div>
                                    <div class="mr-2">
                                        <label>Total Bill</label>
                                        <v-text-field
                                            :value="_formatNumber(selectedRoom.check_in.total_paid)"
                                            readonly
                                            filled
                                            dense
                                        ></v-text-field>
                                    </div>
                                </v-col>
                            </v-col>
                            <v-col align="end">
                                <v-col class="col-text-field" align="end">
                                    <v-btn color="error" @click="$emit('close')">Cancel</v-btn>
                                    <v-btn color="success" @click="extend_dialog=true" class="ml-2">Extend Time</v-btn>
                                    <v-btn color="success" @click="checkout" class="ml-2">Check Out</v-btn>
                                </v-col>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog> 
        <v-dialog v-model="extend_dialog" persistent width="400">
            <v-card>
                <v-card-title>
                    Extend Hours for Room {{selectedRoom.number}}
                </v-card-title>
                <v-card-text>
                    <v-form ref="form" lazy-validation>
                        <v-container>
                            <v-row>
                                <v-col class="col-text-field" cols="12" sm="12">
                                    <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                        <div class="mr-2">
                                            <label>Extra Hour Rate</label>
                                            <v-text-field
                                                :value="_formatNumber(selectedRoom.room_type.extra_hour_rate)"
                                                readonly
                                                filled
                                                dense
                                            ></v-text-field>
                                        </div>
                                    </v-col>
                                    <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                        <div class="mr-2">
                                            <label>Enter Total Hours to extend</label>
                                            <v-text-field
                                                v-model="total_extend"
                                                type="number"
                                                filled
                                                dense
                                                :rules="[() => total_extend > 0 || 'must be greater than zero']"
                                            ></v-text-field>
                                        </div>
                                    </v-col>
                                    <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                        <div class="mr-2">
                                            <label>Total Payment</label>
                                            <v-text-field
                                                :value="_formatNumber(selectedRoom.room_type.extra_hour_rate * total_extend)"
                                                readonly
                                                filled
                                                dense
                                            ></v-text-field>
                                        </div>
                                    </v-col>
                                    <v-col align="end">
                                        <v-col class="col-text-field" align="end">
                                            <v-btn color="error" @click="closeExtendDialog">Cancel</v-btn>
                                            <v-btn color="success" @click="extendHours" class="ml-2">Extend</v-btn>
                                        </v-col>
                                    </v-col>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-text>    
            </v-card>
        </v-dialog>
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
    props: {
        dialog: {},
        selectedRoom: {}
    },
    data() {
        return {
            confirm_details: {},
            confirm_type: '',
            confirm_dialog: false,
            extend_dialog: false,
            total_extend: 0
        }
    },
    methods: {
        closeExtendDialog() {
            this.extend_dialog = false
            this.total_extend = 0
        },
        extendHours() {
            if(!this.$refs.form.validate()) return;

            this.confirm_details.title = 'Extend'
            this.confirm_details.message = `Continue to extend hours?`
            this.confirm_type = 'extend'
            this.confirm_dialog = true
        },
        checkout() {
            this.confirm_details.title = 'Checkout'
            this.confirm_details.message = `Continue to checkout?`
            this.confirm_type = 'checkout'
            this.confirm_dialog = true
        },
        confirm() {
            if(this.confirm_type == 'extend'){
                this.$emit('extend', this.total_extend)
                this.closeExtendDialog()
            } else {
                this.$emit('toggle', 2, this.selectedRoom.id)
            }
            
            this.cancel()
        },
        cancel() {
            this.confirm_details.title = ''
            this.confirm_details.message = ``
            this.confirm_type = ''       
            this.confirm_dialog = false    
        }
    },
    computed: {
        totalDays() {
            let start = this.$moment(this.selectedRoom.check_in.start_date).unix()
            let end = this.$moment(this.selectedRoom.check_in.end_date).unix()
            let totalDays = (end - start)/86400
            if(totalDays > 0 && totalDays < 1)
                return 1

            return Math.round(totalDays)
        }
    }
}
</script>