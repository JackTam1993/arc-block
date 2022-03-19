const path = require('path');

const {
    existsSync,
    writeFileSync,
    readFileSync
} = require('fs');

/**
 * 检查这个cacheId下有没有缓存
 * @param {String} cacheId
 * @returns {Boolean}
 */
const checkCache = function (cacheId) {
    const dir = path.resolve(__dirname, '..', 'cache', `${cacheId}.txt`)
    let result = existsSync(dir)
    return result
}

/**
 * 通过cacheId获取缓存中的内容
 * @param {String} cacheId
 * @return {*} 
 */
const getCache = function (cacheId) {
    let filename = path.resolve(__dirname, '..', 'cache', `${cacheId}.txt`)
    let result = readFileSync(filename)
    return result;
}

/**
 * 通过cacheId设置缓存中的内容
 * @param {String} cacheId
 * @param {String} data
 * @return {*} 
 */
const setCache = function (cacheId, data) {
    let filename = path.resolve(__dirname, '..', 'cache', `${cacheId}.txt`)
    let result = writeFileSync(filename, data)
    return typeof result == 'number';
}

module.exports = {
    checkCache,
    getCache,
    setCache
}