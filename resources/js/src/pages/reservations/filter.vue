<template>
    <div class="filter-main-container">
        <v-flex xs12>
            <v-flex sm6 class="d-block mr-3">
                <label>Status</label>
                <v-autocomplete
                    v-model="filter.status"
                    :items="status"
                    item-text="name"
                    item-value="id"
                    hide-details
                    filled
                    dense
                    required
                    clearable
                ></v-autocomplete>
            </v-flex>
            <v-flex sm6 class="d-block">
                <label>Room type</label>
                <v-autocomplete
                    v-model="filter.room_type_id"
                    :items="roomtypes"
                    item-text="type"
                    item-value="id"
                    hide-details
                    filled
                    dense
                    required
                    clearable
                ></v-autocomplete>
            </v-flex>
        </v-flex>
        <v-flex xs12 class="mt-2">
            <v-flex sm6 class="d-block">
                <label>Start date</label>
                <v-menu
                    v-model="isstart"
                    :close-on-content-click="false"
                    :nudge-right="0"
                    transition="scale-transition"
                    offset-y
                    position-y="1"
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="filter.start_date"
                        filled
                        dense
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="filter.start_date"
                        @input="isstart = false"
                    ></v-date-picker>
                </v-menu>
            </v-flex>

        </v-flex>
        <!-- <v-flex xs12>
            <v-flex xs12 sm6 class="d-block mb-5 mr-3">
                <label>{{_lang('price from','capitalize')}}</label>
                <v-text-field
                    v-model="filter.min_price"
                    filled
                    dense
                    hide-details="auto"
                    type="number"
                    clearable
                ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 class="d-block">
                <label>{{_lang('price to','capitalize')}}</label>
                <v-text-field
                    v-model="filter.max_price"
                    filled
                    dense
                    hide-details="auto"
                    type="number"
                    clearable
                ></v-text-field>
            </v-flex>
        </v-flex>
        <v-flex xs12>
            <v-flex xs12 sm6 class="d-block mb-5 mr-3">
                <label>{{_lang('brand','capitalize')}}</label>
                <v-autocomplete
                    v-model="filter.brand_id"
                    :items="brands"
                    item-text="name"
                    item-value="id"
                    hide-details="auto"
                    filled
                    dense
                    required
                    clearable
                ></v-autocomplete>
            </v-flex>
            <v-flex xs12 sm6 class="d-block">
                <label>{{_lang('caliber','capitalize')}}</label>
                <v-autocomplete
                    v-model="filter.caliber_id"
                    :items="calibers"
                    item-text="name"
                    item-value="id"
                    hide-details="auto"
                    filled
                    dense
                    required
                    clearable
                ></v-autocomplete>
            </v-flex>
        </v-flex> -->
    </div>
</template>

<script>
export default {
    props:{
        filter:{
            type: Object,
            default() {
                return {}
            }
        },
    },
    data(){
        return {
            isstart:false,
            search_sub: '',
            roomtypes:[],
            status:[
                {
                    id:1,
                    name:'Waitting'
                },
                {
                    id:2,
                    name:'Cancelled'
                }
            ]
        }
    },
    methods:{
        getRoomTypes(){
            axios.get(`/admin/room-types`).then(({data})=>{
                this.roomtypes = data.data
            })
        },
    },
    created(){
        this.getRoomTypes()
    },
    watch:{
        "filter.created_at"(val){
            if(val){
                if(val[0] > val[1]){
                    this.filter.created_at = [
                        val[1], val[0]
                    ]
                }
            }
        },
        "filter.sub_start_date"(val){
            if(val){
                if(val[0] > val[1]){
                    this.filter.sub_start_date = [
                        val[1], val[0]
                    ]
                }
            }
        },    
        "filter.sub_end_date"(val){
            if(val){
                if(val[0] > val[1]){
                    this.filter.sub_end_date = [
                        val[1], val[0]
                    ]
                }
            }
        },     
    }
}
</script>