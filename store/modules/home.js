import request from '../../utils/request.js'
const state = {
	shopList:[]
}
const mutations = {
	getShopListMutations(state,shopList){
		state.shopList = shopList
	}
}
const actions = {
	async getShopListActions({commit}){
		let result = await request('/shops',{latitude:40.10038,longitude:116.36867})
		commit('getShopListMutations',result.data)
	}
}
const getters = {
	
}
export default {
	state,
	mutations,
	actions,
	getters
}