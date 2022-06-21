<template>
    <v-dialog v-model="dialog" persistent width="600">
        <v-card>
            <v-card-title>CHECK IN FOR ROOM {{payload.room_number}}</v-card-title>
            <v-card-text>
                <v-form ref="validate" lazy-validation>
                    <v-container>
                        <v-row>
                            {{validate}}
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
                                        <label>Start Date</label>
                                        <v-text-field
                                            v-model="payload.room_guest_start"
                                            filled
                                            dense
                                            hint="Enter only inital time render"
                                            persistent-hint
                                        ></v-text-field>
                                    </div>
                                    <div class="mr-2">
                                        <v-dialog 
                                            v-model="date_dialog"
                                            ref="dialog"
                                            :return-value.sync="date"
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
                                            >
                                                <v-spacer></v-spacer>
                                                <v-btn text color="primary" @click="date_dialog = false">
                                                    Cancel
                                                </v-btn>
                                                <v-btn text color="primary">
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
                                            readonly
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
                                            readonly
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
                                            readonly
                                            filled
                                            dense
                                        ></v-text-field>
                                    </div>
                                </v-col>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
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
        dialog: {
            type: Boolean,
            default() {
                return false;
            }
        },
        payload: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            date_dialog: false
        }
    }
}
</script>