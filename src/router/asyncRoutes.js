// 权限页面：受保护页面，要求用户登录并拥有访问权限的角色才能访问
import Layout from '@/layout' // 布局页
export const asyncRoutes = [
  {
    path: "/about",
    component: Layout,
    redirect: "/about/index",
    meta: {title:'用户中心'},
    children: [
      {
        path: "index",
        component: () =>
          import("@/pages/About.vue"),
        name: "about",
        meta: {
          title: "About",
          icon: "qq",
          roles: ['admin', 'editor'] // 用户觉得中函数admin或editor角色的可以访问
        },
      },
      {
        path: "abc",
        component: () => import("@/pages/Home.vue"),
        name: "abc",
        meta: {
          title: "abc", // 导航菜单项标题
          icon: "wx", // 导航菜单项图标
          roles: ['home'] // 用户角色中含有home角色的访问
        }
      }
    ]
  }
];
