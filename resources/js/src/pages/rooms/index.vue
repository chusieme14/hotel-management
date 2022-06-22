<template>
    <v-card elevation="1" height="90vh" max-height="90vh" class="pa-2">
        <v-card-text>
            <table-header
                :data="data"
                :hide="USER_DETAILS.isadmin?['filter', 'search']:['filter', 'search','addNew']"
                @addNew="showForm"
            >
            </table-header>
            <v-row no-gutters align="center">
                <v-col
                    v-for="room in rooms"
                    :key="room.id"
                    class="d-flex child-flex"
                    cols="4"
                >
                    <Grid :room="room" @view="viewReservation" @checkin="openCheckInDialog"/>
                </v-col>
            </v-row>
            <view-side :selectedRoom="selectedRoom" :view="isview" @close="clear"/>
        </v-card-text>
        <add-form :payload="payload" :isform="isform" @cancel="isform=false" @save="addRoom"/>
        <check-in :payload="checkinPayload" :selectedRoom="selectedRoom" @checkin="checkIn" :dialog="checkInDialog" @close="closeCheckinDialog"></check-in>
    </v-card>
</template>

<script>
import Statistics from "./statistics.vue" 
import Grid from "./view/grid.vue"
import ViewSide from "./view/view-side.vue"
import AddForm from "./form/index.vue"
import CheckIn from "./form/checkin.vue"
import { mapGetters } from "vuex" 
export default {
    data() {
        return {
            data: {
                title: "Rooms",
            },
            payload:{},
            checkinPayload: {},
            rooms:[],
            isview: false,
            isform: false,
            isShowTotal: false,
            checkInDialog: false,
            selectedRoom:{},
        }
    },
    methods:{
        checkIn(){
            // this.isShowTotal = true
            this.checkinPayload.user_id = this.USER_DETAILS.id
            console.log(this.checkinPayload,"test val")
            axios.post(`/admin/check-ins`, this.checkinPayload).then(({data})=>{
                this.closeCheckinDialog()
            })
        },
        viewReservation(room){
            this.selectedRoom = room
            this.isview = true
        },
        showForm(){
            this.isform = true
        },
        getRooms(){
            axios.get(`/admin/rooms`).then(({data})=>{
                this.rooms = data.data
                this.clear()
            })
        },
        addRoom(){
            axios.post(`/admin/rooms`, this.payload).then(({data})=>{
                this.getRooms()
            })
        },
        clear(){
            this.isform = false
            this.isview = false
            this.checkInDialog = false
            this.payload = {}
            this.selectedRoom = {}
        },
        openCheckInDialog(room) {
            this.selectedRoom = room
            this.checkinPayload = {
                room_id: room.id,
                room_type: room.room_type.type,
                room_number: room.number,
                room_rate: this._formatNumber(room.room_type.price),
                room_extra_person: this._formatNumber(room.room_type.extra_person_rate),
                room_extra_hour: this._formatNumber(room.room_type.extra_hour_rate),
                room_guest_name: '',
                room_guest_contact: '',
                room_guest_address: '',
                room_guest_extra_person: 0,
                room_guest_start: this.$moment().format('YYYY-MM-DD'),
                room_guest_end: ''
            }
            this.checkInDialog = true
        },
        closeCheckinDialog() {
            this.checkinPayload = {}
            this.checkInDialog = false
        }

    },
    mounted(){
        this.getRooms()
    },
    components: {
        Statistics,
        Grid,
        ViewSide,
        AddForm,
        CheckIn
    },
    computed:{
        ...mapGetters(["USER_DETAILS"]),
    }
}
</script>