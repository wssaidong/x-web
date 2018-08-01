import request from '../utils/request'


const BASE_URL = "http://api.laystall.top/";

export function tweets() {

    var data = request({
        url: BASE_URL + 'x/api/osc/tweets?page=1&pageSize=10',
        method: 'get'
    })
    return data
}

export function articles() {

    var data = request({
        url: BASE_URL + 'x/api/link/articles',
        method: 'get'
    })
    return data
}

export function pic() {

    var data = request({
        url: BASE_URL + 'x/api/link/pic',
        method: 'get'
    })
    return data
}