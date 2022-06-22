<template>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      width="900"
    >
        <v-card v-if="selectedRoom.id">
            <v-card-title>Upcoming resevation
                    <v-spacer></v-spacer>
                    <v-btn icon @click="$emit('close')"><v-icon>close</v-icon></v-btn>
                </v-card-title>
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
                    :items="checkins"
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
                        {{_formatShowDate(item.start_date)}}
                    </template>
                    <template v-slot:item.end_date="{ item }">
                        {{_formatShowDate(item.end_date)}}
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
        </v-card>
    </v-navigation-drawer>
</template>
<script>
export default {
    props:{
        view:{},
        selectedRoom:{}
    },
    data(){
        return{
            checkins:[],
            drawer:false,
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
    methods:{
        fetchPage(){
            this.data.isFetching = true
                let params = this._createParams(this.options);
                params = params + this._createFilterParams(this.data.filter)
                if(this.data.keyword)
                    params = params + '&keyword=' + this.data.keyword
                params = params + '&room=' + this.selectedRoom.id
            axios.get(`/admin/check-ins?${params}`).then(({data})=>{
                this.checkins = data.data
                this.total = data.total
                this.data.isFetching = false
            })
        },
        resetFilter(){

        },
        showEdit(){

        },
        showDelete(){

        }

    },
    watch:{
        view:{
            handler(val){
                this.drawer = val
                if(val){
                    console.log(this.selectedRoom,"selectedRoom")
                }
            }
        }
    }
}
</script>