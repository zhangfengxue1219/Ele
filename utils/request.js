import config from './config.js'
export default (url , data={}, method='GET')=>{
	return new Promise((resolve,reject)=>{
		wx.request({
			url:config.host + url,
			data,
			method,
			success: (res) => {
				resolve(res.data)
			},
			fail:(err)=>{
				console.log('请求失败',err)
				reject(err)
			}
		})
	})
}