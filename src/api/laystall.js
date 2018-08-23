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

export function video() {

    var data = request({
        url: BASE_URL + 'x/api/link/video',
        method: 'get'
    })
    return data
}

export function msg(data) {

    var data = request({
        url: BASE_URL + 'x/api/collection/msg',
        method: 'post',
        params: data
    })
    return data
}


export function flyFileUpload(data) {

    var data = request({
        url: BASE_URL + 'x/api/flyFile/code',
        method: 'post',
        params: data
    })
    return data
}

export function flyFileCode(data) {

    var data = request({
        url: BASE_URL + 'x/api/flyFile',
        method: 'get',
        params: data
    })
    return data
}