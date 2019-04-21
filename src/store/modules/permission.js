/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-vars
import router from '@/router';

// eslint-disable-next-line no-unused-vars
const state = {
    routes: [],
    addRoutes: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = router.concat(routes)
    }
}


const actions = {
    generateRoutes({ commit }) {
        return new Promise(resolve => {
            let accessedRoutes
            // if (roles.includes('admin')) {
            //     accessedRoutes = asyncRoutes || []
            // } else {
            //     accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
            // }
            commit('SET_ROUTES', accessedRoutes)
            resolve(accessedRoutes)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
