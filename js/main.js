import appsusCmp from './components/appsus-cmp.js'
import routes from './routes.js'
import appsusServices from './services/appsus-services.js'

Vue.use(VueRouter);
const router = new VueRouter ({routes : routes})

new Vue({
    el: '#app',
    router : router,
    components: {appsusCmp}
})