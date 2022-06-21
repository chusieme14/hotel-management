<template>
    <v-card elevation="1" height="90vh" max-height="90vh" class="pa-2">
        <v-card-text>
            <table-header
                :data="data"
                :hide="USER_DETAILS.isadmin?['filter', 'search']:['filter', 'search','addNew']"
                @addNew="showForm"
            >
            </table-header>
            <Grid :rooms="rooms" @view="viewReservation"/>
            <view-side :view="isview" @close="isview=false"/>
        </v-card-text>
        <add-form :payload="payload" :isform="isform" @cancel="isform=false" @save="addRoom"/>
    </v-card>
</template>

<script>
import Statistics from "./statistics.vue" 
import Grid from "./view/grid.vue"
import ViewSide from "./view/view-side.vue"
import AddForm from "./form/index.vue"
import { mapGetters } from "vuex" 
export default {
    data() {
        return {
            data: {
                title: "Rooms",
            },
            payload:{},
            rooms:[],
            isview: false,
            isform: false
        }
    },
    methods:{
        viewReservation(val){
            console.log(val)
            this.isview = true
        },
        showForm(){
            this.isform = true
        },
        getRooms(){
            axios.get(`/admin/rooms`).then(({data})=>{
                this.rooms = data.data
            })
        },
        addRoom(){
            axios.post(`/admin/rooms`, this.payload).then(({data})=>{
                this.getRooms()
            })
        }
        

    },
    components: {
        Statistics,
        Grid,
        ViewSide,
        AddForm
    },
    computed:{
        ...mapGetters(["USER_DETAILS"]),
    }
}
</script>