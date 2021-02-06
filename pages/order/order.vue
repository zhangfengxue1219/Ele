<template>
	<!-- 包裹器 -->
	<view class="orderContainer">
		<!-- 订单容器 -->
		<view class="order">
			
			<view class="orderItem">
				
				<view class="orderTop">
					<image class="orderImg" src="../../static/images/order/order1.webp" mode=""></image>
					<view class="orderInfo">
						<view class="Info">
							<text class="shopName">老菜包（果蔬生鲜超市）</text>
							<text class="icon">></text>
							<text class="dec">已送达</text>
						</view>
						<view class="time">
							2021-01-02 12:31
						</view>
					</view>
				</view>
			
				<view class="orderMiddle">
					<text>鸡胸肉250g（特享） 等8件商品</text>
					<text class="price">￥20.81</text>
				</view>
				
				<view class="footer">
					<button class="btn">再来一单</button>
				</view>
			</view>
			
			
			<view class="orderItem">
			
				<view class="orderTop">
					<image class="orderImg" src="../../static/images/order/order1.webp" mode=""></image>
					<view class="orderInfo">
						<view class="Info">
							<text class="shopName">老菜包（果蔬生鲜超市）</text>
							<text class="icon">></text>
							<text class="dec">已送达</text>
						</view>
						<view class="time">
							2021-01-02 12:31
						</view>
					</view>
				</view>
				
				<view class="orderMiddle">
					<text>鸡胸肉250g（特享） 等8件商品</text>
					<text class="price">￥20.81</text>
				</view>
			
				<view class="footer">
					<button class="btn">再来一单</button>
				</view>
			</view>
		</view>
		<!-- 未登录时显示的页面 -->
		<!-- 未登录的包裹器 -->
	<!-- 	<view class="outOrderContainer">
			<view class="outLogin">
				<view class="Imginfo">
					<image src="../../static/images/order/toLogin.png" mode=""></image>
					<view class="Info">
						登录后查看外卖订单
					</view>
					<button class="btn" @click='toLogin'>立即登录</button>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{}
			}
		},
		onLoad() {

		},
		methods: {
			toLogin(){
				if(this.userInfo.nickName){
					return
				}
				wx.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="stylus">
	.orderContainer
		height 100%
		width 100%
		.order
			//margin-top 10rpx
			background-color #F5F5F5
			width 100%
			height 100%
			.orderItem
				width 100%
				height 340rpx
				background-color #FFFFFF
				margin 20rpx 0rpx 0rpx
				padding 28rpx 0rpx 0rpx 30rpx
				.orderTop
					display flex
					//background-color #4CD964
					.orderImg
						width 64rpx
						height 64rpx
						margin-right 20rpx
					.orderInfo
						//background-color #808080
						width 636rpx
						height 94rpx
						border-bottom 1rpx solid #F8F8F8
						padding 0rpx 26rpx 20rpx 0rpx
						.Info
							height 48rpx
							line-height 48rpx
							font-size 32rpx
							.shopName
								display inline-block
								width 320rpx
								overflow hidden
								white-space nowrap
								text-overflow ellipsis
							.dec
								float right
								padding-right 20rpx
								font-size 26rpx
							.icon
								position relative
								top -12rpx
								left 2rpx
								color #999999
						.time
							font-size 22rpx
							color #999999
				.orderMiddle
					width 636rpx
					height 85rpx
					//background-color #C8C7CC
					padding 26rpx 30rpx 10rpx 84rpx
					border-bottom 1rpx solid #dfdfdf
					display flex
					justify-content space-between
					.price
						padding-right 20rpx
						font-size 26rpx
						font-weight bold
				.footer
					// width 720rpx
					 height 97rpx
					 padding 20rpx 32rpx
					.btn
						width 146rpx
						height 56rpx
						padding 0rpx
						margin-right 22rpx
						border 1rpx solid #2395ff
						margin 5rpx 20rpx
						font-size 26rpx
						text-align center
						line-height 56rpx
						color #2395FF
						float right
		.outOrderContainer
			.outLogin
				width 100%
				height 932rpx
				overflow hidden
				.Imginfo
					width 100%
					height 562rpx
					margin-top 200rpx
					display flex
					flex-direction column
					align-items center
					.Info
						height 40rpx
						color #6A6A6A
						margin 25rpx 0rpx 20rpx
						font-size 34rpx
					.btn
						width 240rpx
						color #FFFFFF
						background-color #56D176
						padding 5rpx 10rpx 10rpx 10rpx
						font-size 28rpx
						text-align center
						//line-height 78rpx
	.test
		font-size 0rpx
</style>
