<template>
    <v-navigation-drawer
        class=" accent-4"
        width=350
        :mini-variant="drawer"
        color="white"
        permanent
    >
        <v-list v-if="USER_DETAILS.isadmin">
            <v-img
                lazy-src="/images/logo.png"
                max-height="120"
                max-width="290"
                src="/images/logo.png"
            ></v-img>
            <v-list-item
                v-for="item in Menuitems"
                :key="item.name"
                :class="getCurrentUrl == item.route ? 'active' : ''"
                @click.stop="$route.name != item.route?$router.push({name: item.route}):''"
            >
                <v-list-item-icon v-if="drawer">
                    <v-tooltip right color="success">
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                v-bind="attrs"
                                v-on="on"
                            >{{item.icon}}</v-icon>
                        </template>
                        <span>{{item.name.toUpperCase() }}</span>
                    </v-tooltip>
                </v-list-item-icon>
                <v-list-item-icon v-else>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{item.name.toUpperCase()}}</v-list-item-title>
            </v-list-item>
        </v-list>
        <v-list v-else>
            <v-img
                lazy-src="/images/logo.png"
                max-height="120"
                max-width="290"
                src="/images/logo.png"
            ></v-img>
            <v-list-item
                v-for="item in Menuitems"
                :key="item.name"
                :class="getCurrentUrl == item.route ? 'active' : ''"
                @click.stop="$route.name != item.route?$router.push({name: item.route}):''"
                v-if="item.admin==false"
            >
                <v-list-item-icon v-if="drawer && item.admin==false">
                    <v-tooltip right color="success">
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                v-bind="attrs"
                                v-on="on"
                            >{{item.icon}}</v-icon>
                        </template>
                        <span>{{item.name.toUpperCase() }}</span>
                    </v-tooltip>
                </v-list-item-icon>
                <v-list-item-icon v-else>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{item.name.toUpperCase()}}</v-list-item-title>
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2">
                <v-btn class="class-logout" @click="logout" block color="#834622">
                    Logout
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>
<script>
import { mapGetters } from "vuex";
import Menuitems from './MenuItems'
export default {
    props:{
        drawer:{}
    },
    data(){
        return{
            Menuitems: Menuitems,
        }
    },
    methods:{
        logout(){
            this.$emit('logout')
        },
        test(item){
            console.log(this.$route.name)
            console.log(item.name)
        }
    },
    computed:{
        ...mapGetters(["USER_DETAILS"]),
        getCurrentUrl() {
            let url = this.$route.fullPath
            let parts = url.split("/")
            console.log(parts[1],"dksdjksjlkdlllll")
            return parts[1]
        },
        getCurrentSubUrl(){
            let url = this.$route.fullPath
            let parts = url.split("/")
            return parts[2]
        },
        isSetting(){
            let url = this.$route.fullPath
            let parts = url.split("/")
            if(parts[1]=='setting') return true
            return false
        }

    }
}
</script>
<style lang="scss" scoped>
    .active {
        color: black !important;
        background-color:#834622;
    }
    .class-logout{
        color: black !important;
    }
</style>