import request from '../../utils/request.js'
const state = {
	shopInfo:{}
}
const mutations = {
	getShopInfoMutations(state,shopInfo){
		state.shopInfo = shopInfo
	}
}
const actions = {
	async getShopInfo({commit},id){
		let result = await request('/shopInfo/:id')
		commit('getShopInfoMutations',result.data)
		console.log(result.data)
	}
}
const getters = {
	info(state){
		return state.shopInfo.info || {}
	},
	goods(state){
		return state.shopInfo.goods || []
	},
	ratings(state){
		return state.shopInfo.ratings || []
	}
}
export default {
	state,
	mutations,
	actions,
	getters
}