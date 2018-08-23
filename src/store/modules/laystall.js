import { articles,pic,video } from '../../api/laystall'

export const GET_ARTICLES = 'GET_ARTICLES'
export const GET_PIC = 'GET_PIC'
export const GET_VIDEO = 'GET_VIDEO'

export default {
    state: {
        data: {

        },
        pic: {
            contentlist:[{
                list:{}
            }]
        },
        video: null
    },
    mutations: {
        [GET_ARTICLES](state, data) {
            state.data = data
        },
        [GET_PIC](state, data) {
            state.pic = data
        },
        [GET_VIDEO](state, data) {
            state.video = data
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
        },
        [GET_VIDEO]({commit}, data) {
            return new Promise((resolve, reject) => {
                video().then(response => {
                    commit(GET_VIDEO, response.data)
                })
            })
        }

    }
}