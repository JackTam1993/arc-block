const axios = require('axios');



const urls = {
    ETHERSCAN: 'https://etherscan.io/txs?a=0xeb2a81e229b68c1c22b6683275c00945f9872d90&p=2'
}

const getTxsData = function (a, p) {
    return axios.get(urls.ETHERSCAN, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
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