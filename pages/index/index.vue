<template>
	<view class="indexContainer">
		<!-- 头部 -->
		<view class="header">
			<view class="address">
				<text class="iconfont icon-weizhi"></text>
				<view class="add">
					{{address.name}}
				</view>
				<text class="iconfont icon-Shape" ></text>
			</view>
			<!-- search -->
			<view class="searchContainer">
				<view class="search">
					<text class="iconfont icon-sousuo"></text>
					<text class="txt">搜索饿了么商家、商家名称</text>
				</view>
			</view>
		</view>
		<!-- 中间轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swipperContainer">
			<swiper-item class="swipper" v-for="(items,index) in navItems" :key='index'>
				<view class="swiper-item" v-for="(item,index) in items" :key='item.id'>
					<image class="Img" :src="baseImageUrl+item.image_url" mode=""></image>
					<view class="content">
						{{item.title}}
					</view>
				</view>
			</swiper-item>
		</swiper>
		<!-- 标签 -->
		<view class="TagContainer">
			<view class="tagTop">
				<view class="content">
					<view class="food">
						品质套餐
					</view>
					<view class="good">
						搭配齐全吃得好
					</view>
					<view class="imd">
						立即抢购 >
					</view>
				</view>
				<view class="imgContainer">
					<image class="img" src="../../static/images/index/food.webp" mode=""></image>
				</view>
			</view>
			<view class="tagBottom">
				<view class="tag">
					<view class="left">
						<image class="img" src="../../static/images/index/icon.webp" mode=""></image>
						<view class="sup">
							超级会员
						</view>
						<view class="bag">
							·每月领20元红包
						</view>
					</view>
					<view class="right">
						立即开通 >
					</view>
				</view>
			</view>
		</view>
		<!-- 推荐商家 -->
		<view class="recommend">
			<view class="shop">
				推荐商家
			</view>
		</view>
		<!-- 商家列表 -->
		<view class="shopContainer">
			<view class="shopItem" v-for="(item,index) in shopList" :key='item.id' @click="toDetail(item.id)">
				<view class="ImgContainer">
					<image class="Img" :src="item.image" mode=""></image>
					<view class="InfoContainer">
						<view class="title">
							{{item.name}}
							<text class="square">◻···</text>
						</view>
						<!-- 评价 -->
						<view class="ela">
							<view>
								<image class="star" src="../../static/images/index/star.svg" mode=""></image>
								<text class="score">{{item.rating}}</text>
								<text>月售{{item.recent_order_num}}单</text>
							</view>
							<view class="song">
								蜂鸟专送
							</view>
						</view>
						<!-- 配送 -->
						<view class="time">
							<view class="left">
								<text>￥{{item.float_minimum_order_amount}}起送</text>
								<text class="pei">{{item.piecewise_agent_fee.tips}}</text>
							</view>
							<view class="right">
								<text>{{item.distance}}</text>
								<text class="min">{{item.order_lead_time}}</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 折扣 -->
				<view class="discountContainer">
					<view class="kind">
						<view class="tet">
							{{item.category}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	import {mapState,mapActions} from 'vuex'
	export default {
		data() {
			return {
				address:{},
				navItem:[],
				baseImageUrl:'http://fuss10.elemecdn.com',
				shopId:{}//商店信息sID
			}
		},
		onLoad() {

		},
		mounted() {
			this.getInfo(),
			this.getShopListActions()
		},
		methods: {
			async getInfo(){
				let result = await request('/position/40.10038,116.36867')
				this.address = result.data
				 result = await request('/index_category')
				this.navItem = result.data
			},
			...mapActions({
				getShopListActions:'getShopListActions'
			}),
			toDetail(shopId){
				this.shopId = shopId
				//console.log(shopInfo)
				wx.navigateTo({
					url:'/pages/detail/detail?shopId='+shopId
				})
			}
		},
		computed:{
			//根据一个一维数组生成一个二维数组
			navItems(){
				let {navItem} = this
				//准备一个空的二维数组
				let arr = [] 
				let minArr = []
				//遍历
				navItem.forEach(c=>{
					//如果当前小数组已经满了，重新创建一个新的数组
					if(minArr.length === 10){
						minArr = []
					}
					//如果当前小数组为空，把小数组保存到大数组中
					if(minArr.length === 0){
						arr.push(minArr)
					}
					minArr.push(c)
				})
				return arr
			},
			...mapState({
				shopList:state=>state.home.shopList
			})
		}
	}
</script>

<style lang="stylus">
	.indexContainer
		.header
			width 100%
			height 191rpx
			background linear-gradient(to right , #00ADFF,#0087FF)
			.address
				box-sizing border-box
				padding 20rpx 28rpx 20rpx 
				height 89rpx
				position relative
				display flex
				.icon-weizhi
					color #fff
					font-size 32rpx
					position relative
					top 7rpx
					left 0rpx
				.add
					width 300rpx
					height 40rpx
					line-height 40rpx
					font-size 34rpx
					color #fff
					margin 0 10rpx
					font-weight bold
					white-space nowrap
					overflow hidden
					text-overflow ellipsis
				.icon-Shape
					font-size 12rpx
					color #FFFFFF
					position absolute
					top 34rpx
					left 379rpx
			.searchContainer
				height 102rpx
				margin -1rpx 0rpx
				padding 15rpx 28rpx
				.search
					height 72rpx
					background-color #FFFFFF
					line-height 72rpx
					text-align center
					color #999
					font-size 28rpx
					border-radius 20rpx
		.swipperContainer
			width 100%
			height 354rpx
			// background-color #CCCCCC
			.swipper
				width 100%
				height 354rpx
				display flex
				flex-wrap wrap
				.swiper-item
					width 150rpx
					height 127rpx
					margin 22rpx 0rpx 0rpx 
					// background-color #0087FF
					display flex
					flex-direction column
					align-items center
					.Img
						width 90rpx
						height 90rpx
					.content
						color #666
						font-size 24rpx
						margin 10rpx 0rpx 0rpx
		.TagContainer
			width 100%
			height 306rpx
			margin 0rpx 0rpx 16rpx
			padding 0rpx 20rpx
			box-sizing border-box
			.tagTop
				height 220rpx
				padding 24rpx 0rpx 0rpx 30rpx
				background-color #F6F6F6
				box-sizing border-box
				display flex
				justify-content space-between
				border-radius 10rpx
				.content
					.food
						height 40rpx
						color #333
						font-size 34rpx
						margin 0rpx 0rpx 10rpx
						font-weight bold
					.good
						color #777
						font-size 26rpx
						height 31rpx
						margin 0rpx 0rpx 18rpx
					.imd
						font-size 24rpx
						color #AF8260
				.imgContainer
					width 282rpx
					height 188rpx
					.img
						width 100%
						height 100%
			.tagBottom
				margin-top 5rpx
				height 80rpx
				.tag
					height 80rpx
					border-radius 10rpx
					padding 0rpx 20rpx 0rpx 30rpx
					background-color #FEE3AE
					display flex
					justify-content space-between
					.left
						display flex
						height 80rpx
						line-height 80rpx
						align-items center
						.img
							width 34rpx
							height 34rpx
							margin 0rpx 15rpx 0rpx 0rpx
						.sup
							width 112rpx
							font-weight bold
							color #644F1B
							font-size 28rpx
						.bag
							width 180rpx
							color #644F1B
							font-size 22rpx
					.right
						height 80rpx
						font-size 22rpx
						color #644F1B
						line-height 80rpx
	
		.recommend
			width 100%
			height 72rpx
			color #000
			font-size 30rpx
			display flex
			justify-content center
			.shop
				text-align center
				display flex
				align-items center
				&::before
					content ''
					display inline-block
					width 40rpx
					height 2rpx
					background-color #999
					margin-right 26rpx
				&::after
					content ''
					display inline-block
					width 40rpx
					height 2rpx
					background-color #999
					margin-left 26rpx
		.shopContainer
			.shopItem
				width 100%
				// height 357rpx
				color #666666
				font-size 24rpx
				box-sizing border-box
				border-bottom 5rpx solid #ccc
				//background-color #0088FF
				padding 30rpx 0rpx
				.ImgContainer
					width 100%
					height 130rpx
					padding 0rpx 20rpx
					display flex
					.Img
						width 130rpx
						height 130rpx
					.InfoContainer
						width 570rpx
						height 130rpx
						color #666
						font-size 24rpx
						padding 0rpx 0rpx 0rpx 20rpx
						display flex
						flex-direction column
						justify-content space-between
						.title
							font-size 30rpx
							font-weight bold
							color #333
							height 40rpx
							.square
								font-size 24rpx
								font-weight normal
								height 28rpx
								color #666666
								margin-left 20rpx
								padding 0rpx 10rpx
								float right
						.ela
							height 32rpx
							display flex
							font-size 24rpx
							justify-content space-between
							align-items center
							.star
								width 112rpx
								height 20rpx
							.score
								display inline-block
								padding 0 10rpx
							.song
								height 26rpx
								padding 0rpx 4rpx
								margin-right 5rpx
								color #FFFFFF
								line-height 26rpx
								box-sizing border-box
								text-align center
						.time
							height 32rpx
							color #666666
							font-size 24rpx
							display flex
							justify-content space-between
							align-items center
							.left
								.pei
									&::before
										content ''
										width 3rpx
										height 28rpx
										background-color #ccc
										display inline-block
										margin auto 6rpx
							.right
								.min
									&::before
										content ''
										width 3rpx
										height 28rpx
										background-color #ccc
										display inline-block
										margin auto 6rpx
								
							
	
				.discountContainer
					display flex
					flex-direction column
					justify-content space-between
					padding-left 170rpx
					.kind
						height 40rpx
						color #666
						font-size 24rpx
						margin 20rpx 20rpx 0rpx 0rpx
						//background-color yellow
						box-sizing border-box
						line-height 40rpx
						.tet
							width 120rpx
							height 32rpx
							padding 0rpx 16rpx
							border 1rpx solid rgb(221,221,221)
							text-align center
							line-height 32rpx
							border-radius 5rpx
							white-space nowrap
							overflow hidden
							text-overflow ellipsis
							//box-sizing border-box
	.test
		font-size 0rpx
</style>
