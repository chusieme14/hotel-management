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
                        <!-- <v-btn color="warning" icon>
                            <v-icon small>
                                mdi-printer
                            </v-icon>
                        </v-btn> -->
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
    data(vm){
        return {
            admin:{},
            showForm:false,
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
            this.showForm = false
            this.isdelete = false
        }
      

    }
}
</script>