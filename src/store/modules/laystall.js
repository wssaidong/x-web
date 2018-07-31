import Vue from 'vue'
import { articles } from '../../api/laystall'

export const GET_ARTICLES = 'GET_ARTICLES'

export default {
    state: {
        data: {}
    },
    mutations: {
        [GET_ARTICLES](state, data) {
            state.data = data
        }
    },
    actions: {
        [GET_ARTICLES]({commit}, data) {
            return new Promise((resolve, reject) => {
                articles().then(response => {
                    commit(GET_ARTICLES, response.data)
                })
            })
        }
    }
}