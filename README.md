# two
打包优化

1.使用gzip压缩，修改config/index.js  productionGzip的值改为true npm install --save-dev compression-webpack-plugin@1.1.2  使用最新版可能会报错
  服务器上要配置开启gzip_static on;
  
2.使用cdn优化打包输出文件的大小https://www.jianshu.com/p/9248db0349fb
  2.1根路径下的index.html文件中添加一下代码
  head中添加<% htmlWebpackPlugin.options.cdnConfig.forEach(function(item){ if(item.css){ %>
             <link href="<%= item.css %>" rel="stylesheet" />
             <% }}) %>

  body中添加
  <% htmlWebpackPlugin.options.cdnConfig.forEach(function(item){ if(item.js && !htmlWebpackPlugin.options.onlyCss){ %>
      <script type="text/javascript" src="<%= item.js %>"></script>
      <% }}) %>
  2.2修改webpack.prod.config.js中相关cdn的配置

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
