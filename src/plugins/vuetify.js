import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {
                primary:'#6b00ff',
            },
            dark: {
                primary:'#6b00ff',
            }
        }
    }
});