<template>
    <v-card elevation="1" max-height="90vh">
        <v-card-text>
            <table-header
                :data="data"
                @refresh="fetchPage"
                @search="fetchPage"
                @resetFilters="resetFilter"
                @filterRecord="fetchPage"
                @addNew="addNew"
            >
                <template v-slot:custom_filter>
                    <admin-filter
                        :filter="data.filter"
                    ></admin-filter>
                </template>
            </table-header>
            <v-data-table
                :headers="headers"
                :items="admins"
                max-height="100%"
                :single-select="false"
                show-select
                :search="data.keyword"
                :loading="data.isFetching"
                :server-items-length="total"
                :footer-props="footerPages"
                :options.sync="options"
                :items-per-page="options.itemsPerPage"
                @update:options="fetchPage"
                class="cursor-pointer table-fix-height"
                fixed-header
            >
                <!-- @click:row="viewRecord" -->
                <template v-slot:item.start_date="{ item }">
                    {{_formatDate(item.start_date)}}
                </template>
                <template v-slot:item.end_date="{ item }">
                    {{_formatDate(item.end_date)}}
                </template>
                <template v-slot:item.status="{ item }">
                    {{item.status==1?'Waiting':'Cancelled'}}
                </template>
                <template v-slot:item.room_type="{ item }">
                    {{item.room_type.type}}
                </template>
                <!-- <template v-slot:item.updated_at="{ item }">
                    {{_formatDate(item.updated_at)}}
                </template> -->
                <template v-slot:item.action="{ item }">
                    <v-row>
                        <v-tooltip color="success" left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn 
                                    @click="showRoomForm(item)" 
                                    color="success" 
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-icon small>
                                        check
                                    </v-icon>
                                </v-btn>
                            </template>
                            Check in
                        </v-tooltip>
                        <table-action :item="item" 
                            @editItem="showEdit" 
                            @deleteItem="showDelete"
                            :disable="item.status==2?['edit','delete']:['']"
                        ></table-action>
                    </v-row>
                </template>
            
            </v-data-table>

        </v-card-text>
        <v-dialog
            v-model="showForm"
            persistent
            max-width="600px"
        >
            <admin-form 
                :payload="payload"
                :show="showForm" 
                @cancel="cancel"
                @save="save"
            ></admin-form>
        </v-dialog>
        <confirm-dialog
            :details="details"
            :show="isdelete"
            @cancel="cancel"
            @confirm="remove"
        />
    <checkin-form :dialog="isform" :selectedRoom="selectedRoom" :payload="testpayload" @checkin="checkIn" @close="cancel" />
    <room-list :show="isroom" :selectedReservation="selectedReservation" @cancel="cancel" @checkin="showCheckinForm" />
    </v-card>
</template>
<script>
import AdminForm from './form.vue'
import AdminFilter from './filter.vue'
import CheckinForm from '../rooms/form/checkin.vue'
import RoomList from './roomlist.vue'
import { mapGetters } from "vuex"
export default {
    components:{
        AdminForm,
        AdminFilter,
        CheckinForm,
        RoomList
    },
    computed:{
        ...mapGetters(["USER_DETAILS"]),
    },
    data(vm){
        return {

            selectedReservation:{},
            selectedRoom:{},
            testpayload:{},
            showForm:false,
            isform:false,
            isroom:false,
            isdelete:false,
            admins:[],
            payload:{
                start_date:vm.$moment().format('YYYY-MM-DD')
            },
            details:{},
            data: {
                title: "Reservations",
                isFetching: false,
                keyword: "",
                filter:{}
            },
            footerPages: {
                "items-per-page-options": [5, 10, 15, 20, 30, 40, 50, 100,-1], 
            },
            options:{
                itemsPerPage: 15
            },
            total: 0,
            headers:[
                {
                    text: 'Id',
                    align: 'start',
                    sortable: true,
                    value: 'id',
                },
                {
                    text: 'Client name',
                    align: 'start',
                    sortable: true,
                    value: 'client_name',
                },
                {
                    text: 'Contact number',
                    align: 'start',
                    sortable: true,
                    value: 'contact_number',
                },
                {
                    text: 'Start date',
                    align: 'start',
                    sortable: false,
                    value: 'start_date',
                },
                {
                    text: 'End date',
                    align: 'start',
                    sortable: false,
                    value: 'end_date',
                },
                {
                    text: 'Room type',
                    align: 'start',
                    sortable: false,
                    value: 'room_type',
                },
                {
                    text: 'Status',
                    align: 'start',
                    sortable: false,
                    value: 'status',
                },
                {
                    text: 'Action',
                    align: 'start',
                    sortable: true,
                    value: 'action',
                },
            ]
        }
    },
    created(){
    //   this.getLoginUser()
    },
    methods:{
        checkIn(){
            this.testpayload.user_id = this.USER_DETAILS.id
            console.log(this.testpayload,"test val")
            axios.post(`/admin/check-ins`, this.testpayload).then(({data})=>{
                this.clear()
                this.$router.push({name:'rooms'})
            })
        },
        showRoomForm(item){
            Object.assign(this.selectedReservation, item)
            console.log(this.selectedReservation,"room,dsssssss")
            this.isroom = true
        },
        showCheckinForm(item){
            this.isroom = false
            this.selectedRoom = item
            let start = this.$moment(`${this.selectedReservation.start_date}`).format('YYYY-MM-DD h:mm a')
            let end = this.$moment(`${this.selectedReservation.end_date}`).format('YYYY-MM-DD h:mm a')
            this.testpayload = {
                room_id: item.id,
                room_type: item.room_type.type,
                room_number: item.number,
                room_rate: item.room_type.price,
                room_extra_person: item.room_type.extra_person_rate,
                room_extra_hour: item.room_type.extra_hour_rate,
                room_guest_name: this.selectedReservation.client_name,
                room_guest_contact: '',
                room_guest_address: '',
                room_guest_extra_person: 0,
                room_guest_start: start,
                room_guest_end: end,
                room_total_days: 1,
                reservation_id: this.selectedReservation.id
            }
            console.log(this.selectedRoom,"room,")
            this.isform = true
        },
        resetFilter(){
            this.data.filter={};
            this.fetchPage()
        },
        // getLoginUser(){
        //   axios.get(`/admin/get-user`).then(({data})=>{
        //     this.admin = data
        //   })
        // },
        cancel(){
            this.clear()
        },
        addNew(){
            this.showForm = true
        },
        fetchPage(){
            this.data.isFetching = true
                let params = this._createParams(this.options);
                params = params + this._createFilterParams(this.data.filter)
                if(this.data.keyword)
                    params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/reservations?${params}`).then(({data})=>{
                this.admins = data.data
                this.total = data.total
                this.data.isFetching = false
            })
        },
        save(){
            if (this.payload.id) {
                delete this.payload.created_at
                delete this.payload.updated_at
                axios.put(`/admin/reservations/${this.payload.id}`, this.payload).then(({data})=>{
                    this.fetchPage()
                    this.clear()
                })
                return
            }
            axios.post(`/admin/reservations`, this.payload).then(({data})=>{
                this.fetchPage()
                this.clear()
            })
        },
        async showEdit(val){
            await Object.assign(this.payload, val)
            this.showForm = true
        },
        showDelete(val){
            Object.assign(this.payload, val)
            this.details.title = 'Delete'
            this.details.message = `Are you sure you want to cancel ${this.payload.client_name}?`
            this.isdelete = true
        },
        remove(){
            axios.delete(`/admin/reservations/${this.payload.id}`).then(({data})=>{
                this.fetchPage()
                this.clear()
            })
        },
        clear(){
            this.payload.first_name = ''
            this.payload.last_name = ''
            this.payload.email = ''
            this.payload.status = 1
            this.payload.shift = null
            this.payload.password = ''
            this.details = {}
            this.selectedReservation = {}
            this.selectedRoom = {}
            this.showForm = false
            this.isform = false
            this.isroom = false
            this.isdelete = false
        }
      

    }
}
</script>