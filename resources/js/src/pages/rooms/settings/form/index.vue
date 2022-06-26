<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="450"
    >
        <v-card>
            <v-card-title>{{payload.id?'Update':'Add'}} Room Type</v-card-title>
            <v-card-text>
                <v-form lazy-validation>
                    <v-text-field
                        v-model="payload.type"
                        outlined
                        dense
                        label="Type"
                        placeholder="Type"
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="payload.price"
                        outlined
                        dense
                        label="Price"
                        placeholder="Price"
                        type="number"
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="payload.extra_person_rate"
                        outlined
                        dense
                        label="Extra person rate"
                        placeholder="Extraperson rate"
                        type="number"
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="payload.extra_hour_rate"
                        outlined
                        dense
                        label="Extra hour rate"
                        placeholder="Extra hour rate"
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