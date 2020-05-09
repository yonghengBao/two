// 导入asyncRoutes，过滤它看当前用户是否拥有响应权限
import {constRoutes} from '@/router/constRouters.js'
import {asyncRoutes} from '@/router/asyncRoutes.js'

const state = {
    routes: [], // 完整路由
    addRoutes: [], // 权限路由
}

const mutations = {
    // routes: 用户可访问的权限路由
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes;
      state.routes = constRoutes.concat(routes);
      console.log(state.routes)
    }
}

const actions = {
    generateRoutes({commit}, roles) {
        // 过滤出能访问的路由表
        const routes = filterAsyncRoutes(asyncRoutes, roles)
        commit('SET_ROUTES', routes)
        return routes;
    }
}

/**
 *
 * @param routes 总的需要校验用户角色的路由表
 * @param roles 用户拥有的角色
 * @returns {Array} 由角色判断可以访问的路由表
 */
function filterAsyncRoutes(routes, roles) {
    const res = [];

    routes.forEach(route => {
        // 复制一份路由
        const tmp = {...route};
        // 拥有访问权限
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                // 递归子路由
                tmp.children = filterAsyncRoutes(tmp.children, roles)
            }

            res.push(tmp);
        }
    })

    return res;
}

/**
 *
 * @param roles 用户角色信息
 * @param route 总的需要校验用户角色的路由表中的单条路由
 * @returns {*}
 */
function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
      // 判断用户拥有的某个角色是否在路由元数据中的roles中存在
        return roles.some(role => route.meta.roles.includes(role))
    } else {
        // 路由定义中没有roles选项，则不需要权限即可访问
        return true;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
