<template>
    <div class="filter-main-container">
        <v-flex xs12>
            <v-flex xs12 sm12 class="d-block mb-12">
                <label>Department</label>
                <v-autocomplete
                    v-model="filter.department_id"
                    :items="departments"
                    item-text="name"
                    item-value="id"
                    hide-details
                    filled
                    dense
                    required
                    clearable
                ></v-autocomplete>
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
            search_sub: '',
            departments:[]
        }
    },
    methods:{
        getAllDepartment(){
            axios.get(`/admin/departments`).then(({data})=>{
                this.departments = data.data
            })
        },
    },
    created(){
        this.getAllDepartment()
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