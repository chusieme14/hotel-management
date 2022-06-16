<template>
    <div class="login-main-container">
        <div class="left-container">
            <div class="left-container1">
                <!-- <img src="/sample/login.png" alt=""> -->
            </div>
        </div>
        <div class="right-container">
            <!-- <div>
                <img class="test-class" src="/sample/logo.png" alt="">
            </div> -->
            <div class="right-inner-container">
                <h2>Sign in</h2>
                <v-layout justify-center row>
                    <v-flex md10>
                        <v-label>Emial</v-label>
                        <v-text-field
                            v-model="credential.email"
                            solo
                            dense
                            color="success"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md10>
                        <v-label>Password</v-label>
                        <v-text-field
                            v-model="credential.password"
                            solo
                            type="password"
                            dense
                            color="success"
                        ></v-text-field>
                    </v-flex>
                    <v-flex class="class-text" md10>
                        <small v-if="iserror" class="errormessege">Invalid email or password</small>
                    </v-flex>
                    <div class="action-btn">
                        <v-btn text @click="login">Login</v-btn>
                    </div>
                </v-layout>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            credential:{},
            isloading:false,
            iserror:false
        }
    },
    methods:{
        login(){
            let payload = this.credential
                axios.post(`/admin/login`,{...payload}).then(({data})=>{
                    if(!data.error_message){
                        console.log(data.user,"test user")
                        this.$store.dispatch("GET_USER_DETAILS", data.user);
                        this.$router.push({name:'rooms'})
                    }else {
                        this.iserror = true
                        setTimeout(() => {
                            this.iserror = false
                        }, 5000);
                    }
                })
                .finally(()=>{
                    this.isloading = false
                })
        }
    }
}
</script>
<style lang="scss" scoped>
.class-input-container{
    margin-top: 230px;
    // box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.42);
    // -webkit-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.42);
    // -moz-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.42);
    // padding: 55px;
}
.class-text{
    margin-top: -30px;
    .errormessege{
        color: red;
    }
}
.test-class{
    // position: absolute;
    width: 200px;
    // display: none;
}
.action-btn{
    display: flex !important;
    justify-content: flex-end !important;
    width: 100%;
    padding-right: 19px;
}
</style>