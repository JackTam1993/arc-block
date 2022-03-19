const axios = require('axios');



const urls = {
    ETHERSCAN: 'https://etherscan.io/txs'
}

const getTxsData = function (a, p) {
    return axios.get(urls.ETHERSCAN, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
        },
        params: {
            a,
            p
        },
        proxy: {
            host: '127.0.0.1',
            port: 8888,
        },
    })
}

module.exports = {
    getTxsData
}