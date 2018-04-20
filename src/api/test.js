import request from '../utils/request'

export function test() {

    var data = request({
        url: 'http://api.laystall.top/ms/api/osc/tweets?page=1&pageSize=10',
        method: 'get'
    })
    console.log('test api data', data)
    return data
}