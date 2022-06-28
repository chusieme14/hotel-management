<template>
    <v-dialog 
        persistent 
        v-model="show"
        width="400"
    >
        <v-card>
            <v-card-title>Select Room</v-card-title>
            <v-card-text>
                <v-form ref="form" lazy-validation>
                    <v-autocomplete
                        v-model="selectedRoom"
                        :items="rooms"
                        :rules="[() => !!selectedRoom ||  '']"
                        item-text="number"
                        return-object
                        outlined
                        dense
                        label="Room"
                        placeholder="Room"
                        hide-details="auto"
                    >
                    </v-autocomplete>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" @click="$emit('cancel')">Cancel</v-btn>
                <v-btn color="success" @click="checkin">Check in</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    props:{
        show:{},
        selectedReservation:{}
    },
    data(){
        return{
            rooms:[],
            selectedRoom:{}
        }
    },
    methods:{
        getRooms(){
            axios.get(`/admin/rooms?room_type=${this.selectedReservation.room_type_id}`).then(({data})=>{
                this.rooms = data.data
            })
        },
        checkin(){
            if(!this.$refs.form.validate()) return;
            this.$emit('checkin', this.selectedRoom)
        }
    },
    watch:{
        "show":{
            handler(val){
                if(val){
                    this.getRooms()
                }else{
                    this.$refs.form.resetValidation()
                }
            }
        }
    }
}
</script>