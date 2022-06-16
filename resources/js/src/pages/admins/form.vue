<template>
    <v-card>
        <v-card-title>{{payload.id?'Edit':'Add'}} Admin</v-card-title>
        <v-card-text>
            <v-form ref="form" lazy-validation>
                <v-container>
                    <v-row>
                        <v-col class="col-text-field" cols="12" sm="12">
                            <label><span class="text-red">*</span> First name </label>
                            <v-text-field
                                :rules="[() => !!payload.first_name ||  '']"
                                v-model="payload.first_name"
                                filled
                                dense
                            ></v-text-field>
                            <label><span class="text-red">*</span> Last name</label>
                            <v-text-field
                                :rules="[() => !!payload.last_name ||  '']"
                                v-model="payload.last_name"
                                filled
                                dense
                            ></v-text-field>
                            <label><span class="text-red">*</span> Email</label>
                            <v-text-field
                                :rules="[() => !!payload.email || '']"
                                v-model="payload.email"
                                filled
                                dense
                            ></v-text-field>
                            <label><span class="text-red">*</span> Password</label>
                            <v-text-field
                                :rules="payload.id?'':[() => !!payload.password ||  '']"
                                v-model="payload.password"
                                filled
                                dense
                                type="password"
                            ></v-text-field>
                            <label><span class="text-red">*</span> Department</label>
                            <v-autocomplete
                                :rules="[() => !!payload.department_id ||  '']"
                                item-value="id"
                                :items="departments"
                                item-text="abbreviation"
                                v-model="payload.department_id"
                                hide-details="auto"
                                filled
                                dense
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="$emit('cancel')">Cancel</v-btn>
            <v-btn color="success" @click="save">Save</v-btn>
        </v-card-actions>
        <v-snackbar
            :timeout="-1"
            v-model="istaken"
            tile
            top
            color="red accent-2"
        >
            Email already exist in admin table
        </v-snackbar>
    </v-card>
</template>
<script>
export default {
    props:{
        payload:{

        },
        show:{}
    },
    data(){
        return{
            istaken:false,
            departments:[]
        }
    },
    methods:{
        save(){
            if(!this.$refs.form.validate()) return;
            if(this.payload.id){
                axios.get(`/admin/check-email?email=${this.payload.email}&id=${this.payload.id}`).then(({data})=>{
                    if(data){
                        this.istaken = true
                        setTimeout(() => {
                            this.istaken = false
                        }, 3000);
                        return
                    }
                    this.$emit('save', this.payload)
                })
            }else{
                axios.get(`/admin/check-email?email=${this.payload.email}`).then(({data})=>{
                    if(data){
                        this.istaken = true
                        setTimeout(() => {
                            this.istaken = false
                        }, 3000);
                        return
                    }
                    this.$emit('save', this.payload)
                })
            }
        },
        getAllDepartment(){
            axios.get(`/admin/departments`).then(({data})=>{
                this.departments = data.data
            })
        },
    },
    watch:{
        "show":{
            handler(val){
                if(!val || this.$refs.form){
                    this.$refs.form.resetValidation()
                }else{
                    this.getAllDepartment()
                }
            },immediate:true
        }
    }
}
</script>