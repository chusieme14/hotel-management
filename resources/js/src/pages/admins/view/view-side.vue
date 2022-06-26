<template>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      width="900"
    >
        <v-card v-if="selectedUser.id">
            <v-card-title>
                    {{selectedUser.fullname}}
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
                    :hide="['addNew','search','filter']"
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
                    <template v-slot:item.created_at="{ item }">
                        {{_formatShowDate(item.created_at)}}
                    </template>
                    <template v-slot:item.login="{ item }">
                        {{_formatDate(item.login)}}
                    </template>
                    <template v-slot:item.logout="{ item }">
                        {{_formatDate(item.logout)}}
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
        selectedUser:{}
    },
    data(){
        return{
            checkins:[],
            drawer:false,
            data: {
                title: "Logs",
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
                    text: 'Date',
                    align: 'start',
                    sortable: true,
                    value: 'created_at',
                },
                {
                    text: 'Login',
                    align: 'start',
                    sortable: false,
                    value: 'login',
                },
                {
                    text: 'Logout',
                    align: 'start',
                    sortable: false,
                    value: 'logout',
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
                params = params + '&user_id=' + this.selectedUser.id
            axios.get(`/admin/user-logs?${params}`).then(({data})=>{
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
                    console.log(val,"selectedRoom")
                if(val){
                    console.log(this.selectedRoom,"selectedRoom")
                }
            }
        }
    }
}
</script>