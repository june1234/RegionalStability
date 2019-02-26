import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    menus: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          debugger
          const data = res.data
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          commit('SET_NAME', data.username)
          commit('SET_MENUS', data.menu)
          const storage = window.localStorage
          storage.setItem('username', data.username)
          storage.setItem('menus', JSON.stringify(data.menu))
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // // // 获取用户信息
    // GetInfo ({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getInfo(state.token).then(response => {
    //       const data = (response.data)[0]
    //       if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
    //         commit('SET_ROLES', data.roles)
    //       } else {
    //         reject(new Error('getInfo: roles must be a non-null array !'))
    //       }
    //       commit('SET_NAME', data.name)
    //       commit('SET_AVATAR', data.avatar)
    //       resolve(response)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 退出登录
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_MENUS', [])
          const storage = window.localStorage
          storage.clear()
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        const storage = window.localStorage
        storage.clear()
        removeToken()
        resolve()
      })
    }
  }
}

export default user
