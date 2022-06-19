import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
	theme: {
        themes: {
            light: {
                success: '#834622',
                primary: '#f39c12'
            },
        },
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
}

export default new Vuetify(opts)