import Vue from 'vue'

import { flyFileUpload,flyFileCode } from '../../api/laystall'

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
                flyFileCode(data).then(response => {
                        commit(GET_FILE, response.data)
                    }
                )

            })
        },
        [CLEAR_FILE]({commit}, data) {
            return new Promise((resolve, reject) => {
                commit(CLEAR_FILE)
            })
        }
    }
}