// 爬楼梯
function fn(n) {
  let dp = new Array(n + 1).fill(1)
  for (let i = 2; i <= n; i++){
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

// 跨域
// 协议、域名、端口号有一项不同，则视为跨域
// 在开发环境下，前端一般使用proxy代理来解决跨域：
// 以vite构建的项目为例，在vite.config.js文件中配置代理：
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// export default defineConfig({
//     plugins: [vue()],
//     server: {
//         proxy: {
//             '/api1': {
//                 target: 'http://example1.com',
//                 changeOrigin: true,
//                 rewrite: (path) => path.replace(/^\/api1/, '')
//             }
//         }
//     }
// });
// 其中target为服务器地址，changeOrigin为开启跨域，rewrite可以重写请求路径

// 在生产环境中，使用nginx反向代理来解决跨域问题


// 传统的方法：
// jsonp：利用 <script> 标签的 src 属性不受同源策略限制的特点
// 服务器端设置cors响应头，设置哪些请求允许跨域
