const cheerio = require('cheerio')
let arr = ['span .myFnExpandBox', 'span .myFnExpandBox_searchVal', 'span u-label', '.d-none span', '.showDate span', '.showAge span', '.hash-tag', '.text-center', 'span', '.text-secondary', '.showTxnFee span', '.showGasPrice span']
let nameArr = ['', 'txnHash', 'method', 'dnone', 'date', 'age', 'from', 'inout', 'to', 'todo', 'fee', 'gas']

/**
 * parse html to structured data
 * @param html {String} html
 * @return {Array} 
 */
const parse = function (html) {
    // parse a -> span for getting text
    const regex = /<a/ig;
    html = html.replaceAll(regex, '<span');
    const regex1 = /<\/a>/ig;
    html = html.replaceAll(regex1, '<span>');

    const $ = cheerio.load(html);
    let result = [];

    let trArray = $('tbody')
        .find('tr')
        .each((i, el) => {

            // tr map, el = td
            let resultItem = {};
            $(el).find('td').each((j, ell) => {
                let text = $(ell).find(arr[j]).text();
                if (text) {
                    resultItem[nameArr[j]] = $(ell).find(arr[j]).text();
                }
            })

            result.push(resultItem);
        })
    return result;
}

module.exports = {
    parse
}