<template>
    <v-card elevation="1" max-height="90vh">
        <v-card-text>
            <table-header
                :data="data"
                @addNew="addRoomType"
                :hide="['filter','search']"
            >
            </table-header>
            <v-data-table
                :headers="headers"
                :items="roomtypes"
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
                <template v-slot:item.department="{ item }">
                    {{item.department.abbreviation}}
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
                            :disable="item.rooms.length?['delete']:['']"
                        ></table-action>
                    </v-row>
                </template>
            
            </v-data-table>
        </v-card-text>
        <type-form @save="save" @cancel="cancel" :payload="payload" :isform="showForm"/>
        <confirm-dialog :show="isdelete" :details="details" @confirm="remove" @cancel="cancel"/>
    </v-card>
</template>
<script>
import ConfirmDialog from '../../../components/confirm-dialog.vue'
import TypeForm from './form/index.vue'
export default {
    components:{
        TypeForm,
        ConfirmDialog
    },
    data(){
        return {
            payload:{},
            showForm:false,
            isdelete:false,
            roomtypes:[],
            payload:{},
            details:{},
            data: {
                title: "Room Type",
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
                    text: 'Name',
                    align: 'start',
                    sortable: true,
                    value: 'type',
                },
                {
                    text: 'Price',
                    align: 'start',
                    sortable: true,
                    value: 'price',
                },
                {
                    text: 'Extra Person Rate',
                    align: 'start',
                    sortable: true,
                    value: 'extra_person_rate',
                },
                {
                    text: 'Extra Hour Rate',
                    align: 'start',
                    sortable: true,
                    value: 'extra_hour_rate',
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
        addRoomType(){
            console.log("sdksjdjskdjksdjskjd")
            this.showForm = true
        },
        fetchPage(){
            this.data.isFetching = true
                let params = this._createParams(this.options);
                params = params + this._createFilterParams(this.data.filter)
                if(this.data.keyword)
                    params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/room-types?${params}`).then(({data})=>{
                this.roomtypes = data.data
                this.total = data.total
                this.data.isFetching = false
            })
        },
        save(){
            if (this.payload.id) {
                delete this.payload.created_at
                delete this.payload.updated_at
                axios.put(`/admin/room-types/${this.payload.id}`, this.payload).then(({data})=>{
                    this.fetchPage()
                    this.clear()
                })
                return
            }
            axios.post(`/admin/room-types`, this.payload).then(({data})=>{
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
            this.details.message = `Are you sure you want to remove ${this.payload.type}?`
            this.isdelete = true
        },
        remove(){
            axios.delete(`/admin/room-types/${this.payload.id}`).then(({data})=>{
                this.fetchPage()
                this.clear()
            })
        },
        clear(){
            this.payload = {}
            this.details = {}
            this.showForm = false
            this.isdelete = false
        }
      

    }
}
</script>