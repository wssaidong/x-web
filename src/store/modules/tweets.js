import Vue from 'vue'
import { tweets } from '../../api/laystall'

export const GET_TWEETS = 'GET_TWEETS'

export default {
    state: {
        data: {}
    },
    mutations: {
        [GET_TWEETS](state, data) {
            state.data = data
        }
    },
    actions: {
        [GET_TWEETS]({commit}, data) {
            return new Promise((resolve, reject) => {
                tweets().then(response => {
                    commit(GET_TWEETS, response.data)
                })
            })
        }
    }
}