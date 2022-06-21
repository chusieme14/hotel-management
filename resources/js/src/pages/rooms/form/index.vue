<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="450"
    >
        <v-card>
            <v-card-title>{{payload.id?'Update':'Add'}} Room</v-card-title>
            <v-card-text>
                <v-form lazy-validation>
                    <v-autocomplete
                        v-model="payload.room_type_id"
                        :items="roomTypes"
                        item-value="id"
                        item-text="type"
                        outlined
                        dense
                        label="Room type"
                        placeholder="Room type"
                    >
                    </v-autocomplete>
                    <v-text-field
                        v-model="payload.number"
                        outlined
                        dense
                        label="Room number"
                        placeholder="Room number"
                        type="number"
                        hide-details="auto"
                    >
                    </v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="$emit('cancel')" text color="error">Cancel</v-btn>
                <v-btn @click="$emit('save')" color="success">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    props:{
        isform:{},
        payload:{}
    },
    data(){
        return{
            dialog:false,
            roomTypes:[]
        }
    },
    methods:{
        getRoomTypes(){
            axios.get(`/admin/room-types`).then(({data})=>{
                this.roomTypes = data.data
            })
        }
    },
    watch:{
        isform:{
            handler(val){
                this.dialog = val
                if(val){
                    this.getRoomTypes()
                }
            }
        }
    }
}
</script>