<template>
    <v-card elevation="1" max-height="90vh">
        <v-dialog v-model="showForm" width="600" persistent>
            <v-card>
                <v-card-title>
                    Room Type
                </v-card-title>
                <v-card-text>
                    <v-form ref="form" lazy-validation>
                        <v-container>
                            <v-row>
                                <v-col class="col-text-field" cols="12" sm="12">
                                    <label><span class="text-red">*</span> Room Type Name </label>
                                    <v-text-field
                                        :rules="[() => !!payload.type ||  '']"
                                        v-model="payload.type"
                                        filled
                                        dense
                                    ></v-text-field>
                                    <label> Room Type Description </label>
                                    <v-textarea
                                        v-model="payload.description"
                                        filled
                                        dense
                                        no-resize
                                        height="100"
                                    ></v-textarea>
                                    <v-col cols="12"  class="d-flex child-flex" style="padding: 0px !important">
                                        <div class="mr-2">
                                            <label><span class="text-red">*</span> Price </label>
                                            <v-text-field
                                                :rules="[() => payload.extra_person_rate > 0 || '']"
                                                v-model="payload.price"
                                                type="number"
                                                filled
                                                dense
                                                hide-details
                                            ></v-text-field>
                                        </div>
                                        <div>
                                            <label><span class="text-red">*</span> Extra Person Rate </label>
                                            <v-text-field
                                                :rules="[() => payload.extra_person_rate > 0 || '']"
                                                v-model="payload.extra_person_rate"
                                                type="number"
                                                filled
                                                dense
                                                hide-details
                                            ></v-text-field>
                                        </div>
                                    </v-col>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-col class="col-text-field" align="end">
                        <v-btn color="error" @click="cancel">Cancel</v-btn>
                        <v-btn color="success" @click="save" class="ml-2">Save</v-btn>
                    </v-col>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-card-text>
            <table-header
                :data="data"
                :hide="['filter','search']"
            >
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
                            :disable="admin.department_id!=0?['edit','delete']:['']"
                        ></table-action>
                    </v-row>
                </template>
            
            </v-data-table>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    data(){
        return {
            admin:{},
            payload:{},
            showForm:false,
            isdelete:false,
            admins:[],
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
                    value: 'name',
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
                    value: 'extra_person',
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
        addNew(){
            this.showForm = true
        },
        fetchPage(){
            this.data.isFetching = true
                let params = this._createParams(this.options);
                params = params + this._createFilterParams(this.data.filter)
                if(this.data.keyword)
                    params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/admins?${params}`).then(({data})=>{
                this.admins = data.data
                this.total = data.total
                this.data.isFetching = false
            })
        },
        save(){
            if (this.payload.id) {
                delete this.payload.created_at
                delete this.payload.updated_at
                axios.put(`/admin/admins/${this.payload.id}`, this.payload).then(({data})=>{
                    this.fetchPage()
                    this.clear()
                })
                return
            }
            axios.post(`/admin/admins`, this.payload).then(({data})=>{
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
            axios.delete(`/admin/admins/${this.payload.id}`).then(({data})=>{
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