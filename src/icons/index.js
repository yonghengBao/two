// 图标自动加载
const req = require.context('./src', false, /\.svg$/)
req.keys().map(req)

