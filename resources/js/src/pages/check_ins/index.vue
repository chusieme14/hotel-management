<template>
    <v-card elevation="1" max-height="90vh">
        <v-card-text>
            <table-header
                :data="data"
                @refresh="fetchPage"
                @search="fetchPage"
                @resetFilters="resetFilter"
                @filterRecord="fetchPage"
                :hide="['addNew']"
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
                <template v-slot:item.room="{ item }">
                    {{item.room.number}}
                </template>
                <template v-slot:item.status="{ item }">
                    {{item.status==1?'Active':'Deactivated'}}
                </template>
                <template v-slot:item.updated_at="{ item }">
                    {{_formatDate(item.updated_at)}}
                </template>
                <template v-slot:item.action="{ item }">
                    <v-row>
                        <!-- <v-btn color="warning" icon>
                            <v-icon small>
                                mdi-printer
                            </v-icon>
                        </v-btn> -->
                        <table-action :item="item" 
                            @editItem="showEdit" 
                            @deleteItem="showDelete"
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
    </v-card>
</template>
<script>
import AdminForm from './form.vue'
import AdminFilter from './filter.vue'
export default {
    components:{
        AdminForm,
        AdminFilter
    },
    data(){
        return {
            admin:{},
            showForm:false,
            isdelete:false,
            admins:[],
            payload:{},
            details:{},
            data: {
                title: "Check-in",
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
                // {
                //     text: 'Id',
                //     align: 'start',
                //     sortable: true,
                //     value: 'id',
                // },
                {
                    text: 'Room number',
                    align: 'start',
                    sortable: true,
                    value: 'room',
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
                    sortable: false,
                    value: 'contact_number',
                },
                {
                    text: 'Extra persons',
                    align: 'start',
                    sortable: true,
                    value: 'extra_persons',
                },
                {
                    text: 'Extra hours',
                    align: 'start',
                    sortable: false,
                    value: 'extra_hours',
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
                    text: 'Status',
                    align: 'start',
                    sortable: false,
                    value: 'status',
                },
                {
                    text: 'Regular bill',
                    align: 'start',
                    sortable: false,
                    value: 'regular_bill',
                },
                {
                    text: 'Total bill',
                    align: 'start',
                    sortable: false,
                    value: 'total_bill',
                },
                // {
                //     text: 'Action',
                //     align: 'start',
                //     sortable: true,
                //     value: 'action',
                // },
            ]
        }
    },
    created(){
      this.getLoginUser()
    },
    methods:{
        resetFilter(){
            this.data.filter={};
            this.fetchPage()
        },
        getLoginUser(){
          axios.get(`/admin/get-user`).then(({data})=>{
            this.admin = data
          })
        },
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
            axios.get(`/admin/check-ins?${params}`).then(({data})=>{
                this.admins = data.data
                this.total = data.total
                this.data.isFetching = false
            })
        },
        save(){
            if (this.payload.id) {
                delete this.payload.created_at
                delete this.payload.updated_at
                axios.put(`/admin/users/${this.payload.id}`, this.payload).then(({data})=>{
                    this.fetchPage()
                    this.clear()
                })
                return
            }
            axios.post(`/admin/users`, this.payload).then(({data})=>{
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
            this.details.message = `Are you sure you want to remove ${this.payload.fullname}?`
            this.isdelete = true
        },
        remove(){
            axios.delete(`/admin/users/${this.payload.id}`).then(({data})=>{
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
            this.showForm = false
            this.isdelete = false
        }
      

    }
}
</script>