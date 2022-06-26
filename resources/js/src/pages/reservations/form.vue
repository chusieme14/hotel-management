<template>
    <v-card>
        <v-card-title>{{payload.id?'Edit':'Add'}} Reservation</v-card-title>
        <v-card-text>
            <v-form ref="form" lazy-validation>
                <v-container>
                    <v-row>
                        <v-col class="col-text-field" cols="12" sm="12">
                            <!-- <label><span class="text-red">*</span> Client name </label> -->
                            <v-text-field
                                :rules="[() => !!payload.client_name ||  '']"
                                v-model="payload.client_name"
                                outlined
                                dense

                                label="Client name"
                                placeholder="Client name"
                            ></v-text-field>
                            
                            <v-menu
                                v-model="isstart"
                                :close-on-content-click="false"
                                :nudge-right="0"
                                transition="scale-transition"
                                offset-y
                                position-y="1"
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="payload.start_date"
                                    :rules="[() => !!payload.start_date ||  '']"
                                    label="Start date"
                                    placeholder="Start date"
                                    outlined
                                    dense
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                v-model="payload.start_date"
                                @input="isstart = false"
                                ></v-date-picker>
                            </v-menu>

                            <v-menu
                                v-model="isend"
                                :close-on-content-click="false"
                                :nudge-right="0"
                                transition="scale-transition"
                                offset-y
                                position-y="1"
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="payload.end_date"
                                    :rules="[() => !!payload.end_date ||  '']"
                                    label="End date"
                                    placeholder="End date"
                                    outlined
                                    dense
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="payload.end_date"
                                    @input="isend = false"
                                    :min="payload.start_date"
                                ></v-date-picker>
                            </v-menu>
                            <v-autocomplete
                                item-value="id"
                                :rules="[() => !!payload.room_type_id ||  '']"
                                :items="roomtypes"
                                item-text="type"
                                v-model="payload.room_type_id"
                                hide-details="auto"
                                outlined
                                dense
                                label="Room type"
                                placeholder="Room type"
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="$emit('cancel')">Cancel</v-btn>
            <v-btn color="success" @click="save">Save</v-btn>
        </v-card-actions>
        <v-snackbar
            :timeout="-1"
            v-model="istaken"
            tile
            top
            color="red accent-2"
        >
            Email already exist in admin table
        </v-snackbar>
    </v-card>
</template>
<script>
export default {
    props:{
        payload:{
        },
        show:{}
    },
    data(){
        return{
            isstart:false,
            isend:false,
            istaken:false,
            roomtypes:[],
            shifts:[
                {
                    id:1,
                    text:'Morning'
                },
                {
                    id:2,
                    text:'Nigth'
                }
            ],
            status:[
                {
                    id:0,
                    text:'Deactivate'
                },
                {
                    id:1,
                    text:'Active'
                }
            ]
        }
    },
    methods:{
        getRoomType(){
            axios.get(`/admin/room-types`).then(({data})=>{
                this.roomtypes = data.data
            })
        },
        save(){
            if(!this.$refs.form.validate()) return;
            
            this.$emit('save', this.payload)
        },
    },
    watch:{
        "show":{
            handler(val){
                if(!val || this.$refs.form){
                    this.$refs.form.resetValidation()
                }else{
                    this.getRoomType()
                }
            },immediate:true
        }
    }
}
</script>