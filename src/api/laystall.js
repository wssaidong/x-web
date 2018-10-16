import request from '../utils/request'


const BASE_URL = "https://gateway.xcloud.laystall.top/x/api/biz/";

export function tweets() {

    var data = request({
        url: BASE_URL + 'edp/osc/tweets?page=1&pageSize=10',
        method: 'get'
    })
    return data
}

export function articles() {

    var data = request({
        url: BASE_URL + 'edp/link/articles',
        method: 'get'
    })
    return data
}

export function pic() {

    var data = request({
        url: BASE_URL + 'edp/link/pic',
        method: 'get'
    })
    return data
}

export function video() {

    var data = request({
        url: BASE_URL + 'edp/link/video',
        method: 'get'
    })
    return data
}

export function msg(data) {

    var data = request({
        url: BASE_URL + 'edp/collection/msg',
        method: 'post',
        params: data
    })
    return data
}


export function flyFileUpload(data) {

    var data = request({
        url: BASE_URL + 'edp/flyFile/code',
        method: 'post',
        params: data
    })
    return data
}

export function flyFileCode(data) {

    var data = request({
        url: BASE_URL + 'edp/flyFile',
        method: 'get',
        params: data
    })
    return data
}