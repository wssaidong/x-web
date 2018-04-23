import Vue from 'vue'

export const GET_FILE = 'GET_FILE'
export const CLEAR_FILE = 'CLEAR_FILE'

export default {
    state: {
        flyfile: {
        }
    },
    mutations: {
        [GET_FILE](state, data) {
            state.flyfile = data
        },
        [CLEAR_FILE](state, data) {
            state.flyfile = {}
        }
    },
    actions: {
        [GET_FILE]({commit}, data) {
            return new Promise((resolve, reject) => {
                commit(GET_FILE, {path:'http://baidu.com'})
            })
        },
        [CLEAR_FILE]({commit}, data) {
            return new Promise((resolve, reject) => {
                commit(CLEAR_FILE)
            })
        }
    }
}