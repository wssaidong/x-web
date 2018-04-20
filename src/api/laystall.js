import request from '../utils/request'


const BASE_URL = "http://api.laystall.top/";

export function tweets() {

    var data = request({
        url: BASE_URL + 'x/api/osc/tweets?page=1&pageSize=10',
        method: 'get'
    })
    return data
}