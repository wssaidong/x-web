import Vue from 'vue'
import { test } from '../../api/test'

export const GET_TWEETS = 'GET_TWEETS'

export default {
    state: {
        data: {}
    },
    mutations: {
        [GET_TWEETS](state, data) {
            console.log('GET_TWEETS',data)
            state.data = data
        }
    },
    actions: {
        [GET_TWEETS]({commit}, data) {
            return new Promise((resolve, reject) => {
                test().then(response => {
                    commit(GET_TWEETS, response.data)
                })

            })
        }
    }
}