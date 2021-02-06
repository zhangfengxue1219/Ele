import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import shopInfo from './modules/shopInfo.js'
import cart from './modules/cart.js'
Vue.use(Vuex)
const store = new Vuex.Store({
	modules:{
		home,
		shopInfo,
		cart
	}
})
export default store