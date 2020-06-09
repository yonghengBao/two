# two
打包优化

1.使用gzip压缩，修改config/index.js  productionGzip的值改为true npm install --save-dev compression-webpack-plugin@1.1.2  使用最新版可能会报错
  服务器上要配置开启gzip_static on;

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
