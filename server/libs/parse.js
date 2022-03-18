const cheerio = require('cheerio')

let arr = ['span .myFnExpandBox', 'span .myFnExpandBox_searchVal', 'span', '.d-none span', '.showDate span', '.showAge span', '.hash-tag', '.text-center', 'span', '.text-secondary', '.showTxnFee span', '.showGasPrice span']
/**
 *
 *
 * @param html {String} html
 * @return {Array} 
 */
const parse = function (html) {
    const regex = /<a/ig;
    html = html.replaceAll(regex, '<span');
    const regex1 = /<\/a>/ig;
    html = html.replaceAll(regex1, '<span>');

    // console.log(html)
    const $ = cheerio.load(html);


    let trArray = $('tbody')
        .find('tr')
        .map((i, el) => {
            // tr map, el = td
            $(el).find('td').map((j, ell) => {
                console.log(j)
                console.log($(ell).find(arr[j]).text())
                $(ell).find(arr[j])
            })

            return el;
        })

    console.log(trArray)

    // let result = trArray.map((index, item) => html2Value(index, item))
    return result;
}

module.exports = {
    parse
}