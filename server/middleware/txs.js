const {
    getTxsData
} = require('../libs/http')

const {
    parse
} = require('../libs/parse');

const getData = async function (req, res) {
    const {
        a,
        p
    } = req.query

    try {
        const result = await fetchDataFromEth(a, p)
        // 页面html结构
        let html = result.data;
        let table = parse(html);


    } catch (error) {
        res.json({
            error
        })
    }


    res.json({
        result: 'success'
    })
}

/**
 * 从etherscan.io获取数据
 *
 * @param a {Number} 参数a
 * @param p {Number} 页码
 */
const fetchDataFromEth = async function (a, p) {
    console.log(a, p)
    let result = await getTxsData(a, p)
    return result;
}



module.exports = {
    getData
};