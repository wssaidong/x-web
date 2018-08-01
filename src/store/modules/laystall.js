import Vue from 'vue'
import { articles,pic } from '../../api/laystall'

export const GET_ARTICLES = 'GET_ARTICLES'
export const GET_PIC = 'GET_PIC'

export default {
    state: {
        data: {

        },
        pic: {
            contentlist:[{
                list:{}
            }]
        }
    },
    mutations: {
        [GET_ARTICLES](state, data) {
            state.data = data
        },
        [GET_PIC](state, data) {
            state.pic = data
        }
    },
    actions: {
        [GET_ARTICLES]({commit}, data) {
            return new Promise((resolve, reject) => {
                articles().then(response => {
                    commit(GET_ARTICLES, response.data)
                })
            })
        },
        [GET_PIC]({commit}, data) {
            return new Promise((resolve, reject) => {
                pic().then(response => {
                    commit(GET_PIC, response.data)
                })
            })
        }
    }
}