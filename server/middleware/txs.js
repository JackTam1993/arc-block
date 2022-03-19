const {
    checkCache,
    getCache,
    setCache
} = require('../libs/cache')

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

    let cacheId = `${a}_${p}`
    let table;

    try {
        if (checkCache(cacheId)) {
            table = JSON.parse(getCache(cacheId));
        } else {
            result = await fetchDataFromEth(a, p)
            let html = result.data;
            table = parse(html);
            setCache(cacheId, JSON.stringify(table));
        }

        res.json({
            data: table
        })


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

    let result = await getTxsData(a, p)
    return result;
}



module.exports = {
    getData
};