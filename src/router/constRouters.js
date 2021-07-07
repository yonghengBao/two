// 通用页面：不需要守卫，可直接访问
export const constRoutes = [
  {
    path: '/',
    name: 'demo',
    component: () => import('@/pages/Demo.vue')
  },
  {
    path: "/login",
    component: () => import('@/pages/Login.vue'),
    hidden: true // 导航菜单忽略该项
  },{
    path: "/directiveDemo",
    component: () => import('@/pages/DirectiveDemo.vue'),
    hidden: true // 导航菜单忽略该项
  },
  {
    path: "/home",
    component: () => import("@/pages/Home.vue"),
    name: "home",
    meta: {
      title: "Home", // 导航菜单项标题
      icon: "qq" // 导航菜单项图标
    }
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: () => import("@/pages/NotFound.vue")
  }
]
// 错误处理路由
export const endRouter = [{
  path: "*",
  redirect: "/notFound"
}];
