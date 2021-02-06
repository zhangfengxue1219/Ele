<template>
	<view class="loginContainer">
		<p class='title'>欢迎使用 饿了么外卖</p>
		<p class='text'>立即登录，享受优质服务</p>
		<div class="loginMethods">
			<button class="login wechatLogin" open-type="getUserInfo" @getuserinfo='handleGetUserInfo'>
				微信登录
			</button>
			<button class="login emailLogin">
				邮箱登录
			</button>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleGetUserInfo(res){
				console.log(res)
				if(res.detail.userInfo){// 用户授权了
					wx.setStorage({
						key: 'userInfo',
						data: res.detail.userInfo
					})
					
					// 跳转至personal
					wx.reLaunch({
						url: '/pages/personal/personal'
					})
				}
			}
		}
	}
</script>

<style lang="stylus">
	.loginContainer
		width 100%
		height 100%
		background #F8F8F8
		display flex
		align-items center
		flex-direction column
		justify-content center
		.title
			font-size 48rpx
			font-weight bold
			color #333
			margin-bottom 40rpx
		.text
			font-size 26upx
			color #666
		.loginMethods
			width 80%
			margin 150upx auto
			display flex
			justify-content space-around
			.login
				width 240upx
				height 80upx
				background #41A863
				color #FFFFFF
				text-align center
				line-height 80upx
				font-size 26upx
			

</style>
