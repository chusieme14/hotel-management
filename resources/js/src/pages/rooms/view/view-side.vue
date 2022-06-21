<template>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      width="900"
    >
        <v-card>
            <v-card-title>Upcoming resevation
                <v-spacer></v-spacer>
                <v-btn icon @click="$emit('close')"><v-icon>close</v-icon></v-btn>
            </v-card-title>
            <v-card-text></v-card-text>
        </v-card>
    </v-navigation-drawer>
</template>
<script>
export default {
    props:{
        view:{}
    },
    data(){
        return{
            drawer:false
        }
    },
    watch:{
        view:{
            handler(val){
                this.drawer = val
            }
        }
    }
}
</script>