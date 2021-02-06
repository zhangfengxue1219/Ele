<template>
	<view class="shopInfo">
		<!-- 头部 -->
		<view class="header">
			<image class="Img" :src="info.image" mode=""></image>
		</view>
		<!-- 店家基本信息 -->
		<view class="shopInfoContainer">
			<view class="headerInfo">
				<view class="title">
					{{info.name}}
				</view>
				<view class="Info">
					<text class="score">评价{{info.score}}</text>
					<text class="sale">月售{{info.sellCount}}单</text>
					<text class="min">蓝骑士专送约{{info.deliveryTime}}分钟</text>
				</view>
			</view>
			
			<view class="tips">
				公告：欢迎光临，用餐高峰期请提前下单，谢谢。
			</view>
		</view>
		<!-- 主体 -->
	<view class="mainContainer">
		<!-- 导航区域 -->
		<scroll-view scroll-x="true" enable-flex class="navScroll">
			<view class="navItem active">
				<text>点餐</text>
			</view>
			<view class="navItem">
				<text>评价</text>
			</view>
			<view class="navItem">
				<text>商家</text>
			</view>
		</scroll-view>
		<!-- 主题部分 -->
		<view class="main">
			<view class="leftContainer">
				<scroll-view scroll-y="true" class="scrollNav" >
					<view class="Item" :class="{active:navId===item.id}" v-for="(item,index) in goods" :key='item.name' @click="changeNav(item.id,index)">{{item.name}}</view>
				</scroll-view>
			</view>
			<!-- 右侧 -->
			<view class="rightContainer">
				<scroll-view scroll-y="true" class="shopScroll">
					<view>
						<view class="test">
							{{goodsObj.name}}
						</view>
						<!-- list -->
						<view class="shopList">
							<view class="shopItem" v-for="(food,index) in goodsObj.foods" :key='food.name'>
								<view class="shopImg">
									<image class="Img" :src="food.image?food.image:'../../static/images/index/shop.webp'" mode=""></image>
								</view>
								<view class="context">
									<view class="top">
										<view class="title">{{food.name}}</view>
										<view class="kind">主要原料：{{food.info}}</view>
										<view class="sals">月售{{food.sellCount}}份 好评{{food.rating}}%</view>
										<view class="price">
											<text style="color: red;">￥{{food.price}}</text>
											<text class="iconfont icon-wuuiconxiangjifangda" @click="toCart(food)"></text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
	
	</view>
	</view>
	
	
</template>

<script>
	import request from '../../utils/request.js'
	import {mapGetters,mapActions,mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				shopId:'',//商品信息的Id,
				navId:1,//切换侧边栏的id
				navIndex:0,
				food:{}
			};
			
		},
	onLoad(options) {
		this.shopId = options.shopId
		this.getShopInfo(this.shopId)
	},
	methods:{
		...mapActions({
			getShopInfo:'getShopInfo'
		}),
		changeNav(navId,navIndex){
			this.navId = navId,
			this.navIndex = navIndex
		},
		...mapMutations({addShopCartMutation:'addShopCartMutation'}),
		toCart(food){
			this.food = food,
			console.log(food),
			this.addShopCartMutation(this.food),
			wx.navigateTo({
				url:'../cart/cart'
			})
		}
	},
	computed:{
		...mapGetters(['info','goods','ratings']),
		goodsObj(){
			return this.goods[this.navIndex]
		}
	}
}
</script>

<style lang="stylus">
	.shopInfo
		.header
			height 200rpx
			width 100%
			background linear-gradient(to right,#776789, #ccc )
			display flex
			justify-content center
			.Img
				width 150rpx
				height 150rpx
				border 2rpx solid #DFDFDF
				border-radius 10rpx
				margin-top 80rpx
		.shopInfoContainer
			width 100%
			height 233rpx
			padding 60rpx 0rpx 0rpx
			//background-color #007AFF
			display flex
			flex-direction column
			justify-content space-around
			align-items center
			.headerInfo
				width 540rpx
				height 86rpx
				//background-color green
				display flex
				flex-direction column
				align-items center
				justify-content space-around
				.title
					font-weight bold
					padding 0rpx 20rpx
					font-size 41rpx
				.Info
					font-size 22rpx
					color #999999
					.min
						display inline-block
					.sale
						display inline-block
						margin 0 20rpx
					.score
						display inline-block
					
				
				
			.tips
				font-size 29rpx
				color #999999
				margin 17rpx 75rpx 20rpx
				overflow hidden
				white-space nowrap
				text-overflow ellipsis
		.mainContainer
			height calc(100vh - 248rpx)
			.navScroll
				display flex
				flex-wrap wrap
				height 90rpx
				justify-content space-around
				//border-bottom 1rpx solid #CCCCCC
				.navItem
					box-sizing border-box
					height 50rpx
					margin 20rpx 20rpx
					line-height 50rpx
					&.active
						font-weight bold
						border-bottom: 1rpx solid #0088ff;
				
				
					
	
			.main
				display flex
				border-top 1rpx solid #eee
				box-sizing border-box
				.leftContainer
					width 20%
					height 100%
					border-right 1rpx solid #eee
					box-sizing border-box
					.scrollNav
						height calc(100vh - 82rpx)
						.Item
							position relative
							font-size 26rpx
							height 80rpx
							line-height 80rpx
							text-align center
							background-color #EEEEEE
							&.active
								background #FFFFFF
	
				.rightContainer
					width 80%
					height 100%
					.shopScroll
						height calc(100vh - 82rpx)
						.test
							font-size 20rpx
							color #999999
							height 58rpx
							margin-left 20rpx
							line-height 58rpx
						.shopList
							height 100%
							//background-color red
							.shopItem
								display flex
								padding 20rpx
								color #333333
								font-size 24rpx
								height 230rpx
								.shopImg
									width 190rpx
									height 190rpx
									margin-right 10rpx
									.Img
										width 100%
										height 100%
								.context
									//background-color #007AFF
									.top
										height 180rpx
										display flex
										flex-direction column
										justify-content space-around
										.title
											font-size 30rpx
											height 40rpx
											font-weight bold
											overflow hidden
											white-space nowrap
											text-overflow ellipsis
										.kind
											font-size 20rpx
											color #999999
											margin 10rpx 0rpx
											width 320rpx
											overflow hidden
											white-space nowrap
											text-overflow ellipsis
										.sals
											height 21rpx 
											margin 13rpx 0rpx 0rpx 0rpx
											font-size 20rpx
											color #999999
											box-sizing border-box
										.price
											height 44rpx
											line-height 44rpx 
											margin-top 22rpx
											font-size 32rpx
											display flex
											justify-content space-between
											.icon-wuuiconxiangjifangda
												color #0088FF
	
	.t
		font-size 0rpx
</style>
