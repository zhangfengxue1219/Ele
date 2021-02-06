import Vue from 'vue'

// 管理购物车数据
const state = {
	cartList: []
}

const mutations = {
	// 添加商品数据至cartList
	addShopCartMutation(state, food){
		/* 
		 思路： 
			1. 购物车已有该商品： 在原有的商品count上累加
			2. 购物车没有改商品，直接添加该商品至购物车
	  */
		let foodObj = state.cartList.find(item => item.id === food.id)
		
		if(foodObj){ // 购物车已有该商品
			foodObj.count += 1
		}else { // 购物车没有改商品
		
			Vue.set(food, 'count', 1)
			Vue.set(food, 'isSelected', true)
			state.cartList.push(food)
		}
		
	},
	
	// 修改数量
	changeCountMutation(state, {isAdd, index}){
		if(isAdd){
			state.cartList[index].count += 1
		}else {
			
			// 判断商品数量是否大于1
			if(state.cartList[index].count > 1){
				state.cartList[index].count -= 1
			}else {
				wx.showModal({
					content: '你确认删除该商品吗',
					success: (res) => {
						if(res.confirm){
							// 删除该商品
							state.cartList.splice(index, 1)
						}
					}
				})
				
			}
		}
		
	},
	// 修改是否选中状态
	changeIsSelectedMutation(state, {isSelected, index}){
		state.cartList[index].isSelected = isSelected
	},
	// 全选/全不选
	changeAllSelectedMutation(state, isSelected){
		state.cartList.forEach(item => item.isSelected = isSelected)
	}
}

const actions = {
	
}

const getters = {
	isAllSelected(state){
		/* 
			every:所有的元素都满足条件
			
			some: 只要有一个满足条件就为true
		 */
		return state.cartList.every(item => item.isSelected)
	},
	
	// 总数量
	totalCount(state){
		return state.cartList.reduce((pre, food) => {
			return pre += food.isSelected?food.count:0
		}, 0)
	},
	
	
	// 总价格
	totalPrice(state){
		return state.cartList.reduce((pre, food) => {
			return pre += food.isSelected?food.count*food.price:0
		}, 0)
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}